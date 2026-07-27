


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin:[ "http://localhost:5173",
      "https://node-js-fellowship.vercel.app",
  ],
          credentials: true,
           methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// user and student routes
app.use("/api/auth", authRoutes)
app.use("/api/students", studentRoutes)

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "StudentSphere API Running 🚀",
  });
});

const startServer = async () => {
  await connectDB()

  app.listen(PORT, () => {
  console.log(`🚀Server running on Port ${PORT}`);
});

}

startServer()

