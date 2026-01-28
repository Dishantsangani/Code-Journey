const express = require("express");
const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Dishant" }]);
});

app.listen(4001, () => console.log("User Service running on port 4001"));
