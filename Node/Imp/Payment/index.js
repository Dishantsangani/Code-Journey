require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("./Stripe/stripe");
const pool = require("./Database/dbConnection");

const app = express();
const port = process.env.PORT || 2700;

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5173"] }));

app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next(); // skip JSON parsing for webhook
  } else {
    express.json()(req, res, next);
  }
});

app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    await pool.query(
      `INSERT INTO payments
       (payment_intent_id, amount, currency, status)
       VALUES ($1, $2, $3, 'CREATED')`,
      [paymentIntent.id, paymentIntent.amount, paymentIntent.currency],
    );

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (error) {
      console.error("Webhook signature verification failed:", error.message);
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    if (event.type === "payment_intent.succeeded") {
      const pi = event.data.object;
      await pool.query(
        `UPDATE payments SET status='SUCCESS', updated_at=CURRENT_TIMESTAMP WHERE payment_intent_id=$1`,
        [pi.id],
      );
    } else if (event.type === "payment_intent.payment_failed") {
      const pi = event.data.object;
      await pool.query(
        `UPDATE payments SET status='FAILED', updated_at=CURRENT_TIMESTAMP WHERE payment_intent_id=$1`,
        [pi.id],
      );
    }

    res.json({ received: true });
  },
);

app.listen(port, () => console.log("Server running on port", port));
