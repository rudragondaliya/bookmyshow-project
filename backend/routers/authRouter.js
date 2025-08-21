const express = require("express");
const { userSignup, userLogin } = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/signup",userSignup)
authRouter.post("/login",userLogin)

module.exports = authRouter;