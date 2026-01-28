const express = require("express");
const app = express();
app.use(express.json());

app.get("/orders", (req, res) => {
  res.json([{ id: 101, userId: 1, product: "Laptop" }]);
});

app.listen(4002, () => console.log("Order Service running on port 4002"));
