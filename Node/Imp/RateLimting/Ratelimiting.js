const rateLimit = require("express-rate-limit");
const express = require("express");

const app = express();
const port = 9800;

const limiter = rateLimit({
  windowsMs: 15 * 60 * 1000,
  max: 100,
  massage: "Too many Request",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello with Rate Limiting!");
});

app.listen(port, () => console.log(`Server Started At Port ${port}`));
