const express = require("express");
const router = express.Router();
const {
    signupUser,
  loginUser,
  logoutUser,
} = require("../controllers/authControllers")

router.post("/signup", signupUser)

router.post("/login", loginUser)

router.post("/logout", logoutUser)

module.exports = router;