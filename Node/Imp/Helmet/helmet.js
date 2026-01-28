const express = require("express");
const helmet = require("helmet"); // Import Helmet

const app = express();

// Use Helmet for basic security
app.use(helmet());
//
// Fake product details
const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 1500,
    description: "High performance laptop for gaming enthusiasts.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 200,
    description: "Noise-cancelling over-ear headphones.",
  },
  {
    id: 3,
    name: "Smartphone",
    price: 800,
    description: "Latest model with excellent camera features.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 120,
    description: "RGB backlit keyboard with tactile switches.",
  },
];

// Route to get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Original /data route
app.get("/data", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
