const express = require("express");
const cors = require("cors");

const {
  SignupController,
  SigninController,
  ForgotPasswordController,
  SetPasswordController,
} = require("./Controller/AuthController");

const TaskController = require("./Controller/TaskController");
const TokenCompare = require("./Utils/TokenCompare");
const { allowPermission } = require("./Utils/allowPermission");

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

app.post("/signup", SignupController);
app.post("/signin", SigninController);
app.post("/forgot-password", ForgotPasswordController);
app.post("/set-password", TokenCompare, SetPasswordController);
app.post("/task", TokenCompare, allowPermission("admin"), TaskController);

app.listen(port, () => console.log(`Server Started At port ${port}`));
