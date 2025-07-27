async function UserPayment(req, res) {
  try {
    const product = await stripe.products.create({ name: "Membership" });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 349 * 100,
      currency: "usd",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: price.id, quantity: 1 }],
      mode: "payment",
      success_url: "http://localhost:5173/pricing",
      cancel_url: "http://localhost:5173/pricing",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment: ", error);
    res.status(500).json({ error: "Payment creation failed" });
  }
}
