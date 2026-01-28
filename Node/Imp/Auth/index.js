const express = require("express");
const cors = require("cors");

const {
  SignupController,
  SigninController,
  ForgotPasswordController,
  SetPasswordController,
} = require("./Auth");
const TokenCompare = require("./Utils/TokenCompare");

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

app.post("/signup", SignupController);
app.post("/signin", SigninController);
app.post("/forgot-password", ForgotPasswordController);
app.post("/set-password", TokenCompare, SetPasswordController);

app.listen(port, () => console.log(`Server Started At port ${port}`));
