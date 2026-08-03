const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

//----------------
//---sign up---
//--------------
const signupUser = async (req, res) => {
  // 1. Read request data
  const { name, email, password } = req.body

// 2. Validate input
  if (!name || !email || !password) {
  return res.status(400).json({
    success: false,
    message: "All fields are required.",
  });
  }

  // 3. Check existing user

const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    success: false,
    message: "User already exists.",
  });
}

// 4. Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// 5. Save user
const user = await User.create({
  name,
  email,
  password: hashedPassword,
});

// 6. Send response
 return res.status(201).json({
    success: true,
    message: "User Signup Successfully",
    user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    }
  })
}

//----------------
//---log in---
//--------------

const loginUser = async (req, res) => {

  // 1- get data from req body
  const { email, password } = req.body;

  // 2- check email and password present
  if (!email || !password) {
  return res.status(400).json({
    success: false,
    message: "Email and Password are required.",
  });
}

// 3- find the user
const user = await User.findOne({ email });

// 4- validate the user 
if (!user) {
  return res.status(400).json({
    success: false,
    message: "Invalid Email or Password.",
  });
}

// 5- match the hashed password
const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  return res.status(400).json({
    success: false,
    message: "Invalid Email or Password.",
  });
}

// 6- generate jwt token
const token = generateToken(user.id)

// 7- send cookie containing token
res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
});

// 8- return final responce

return res.status(200).json({
  success: true,
  message: "Login Successful",
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});
}

//----------------
//---log out---
//--------------

const logoutUser = (req, res) => {
  
  res.clearCookie("token")
  
  res.status(200).json({
    success: true,
    message: "User Logout Successfully",
  });
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
};