const express = require("express");
const app = express();
app.use(express.json());

app.get("/products", (req, res) => {
  res.json([{ id: 201, name: "Laptop", price: 700 }]);
});

app.listen(4003, () => console.log("Product Service running on port 4003"));
