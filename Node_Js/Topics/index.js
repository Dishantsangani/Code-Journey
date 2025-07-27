const cookieParser = require("cookieparser");
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("dishant", salt, (err, hash) => {
      console.log("hash: ", hash);
    });
  });
  res.send("done");
});

app.get("/read", (req, res) => {
  res.send("read page");
});

app.listen(2700);
