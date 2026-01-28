const express = require("express");
const app = express();
const port = 5500;

const ipcheck = (req, res, next) => {
  const ip = req.socket.remoteAddress;
  if (!ip.includes("192.168.137.1")) {
    res.send("You can no access");
  } else {
    next();
  }
};

app.use(ipcheck);

app.get("/", (req, res) => {
  res.send("hello form server");
});

app.listen(port, () => console.log(`Server Started At Port ${port}`));
