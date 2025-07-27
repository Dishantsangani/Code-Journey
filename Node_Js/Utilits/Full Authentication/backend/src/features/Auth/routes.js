import express from "express";
import {
  Signin,
  Signup,
  ForgotPassword,
  ResetPassword,
  Logout,
} from "./Controller/Authcontroller.js";
import { VerifyToken } from "./Middleware/middleware.js";
const authrouter = express.Router(); 

authrouter.post("/signin", Signin);
authrouter.post("/signup", Signup);
authrouter.post("/forgot-password", ForgotPassword);
authrouter.post("/reset-password", ResetPassword);

authrouter.get("/home", VerifyToken, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, you're authorized` });
});
authrouter.post("/logout", Logout);

export default authrouter;
