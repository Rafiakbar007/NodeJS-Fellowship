// ==============================
// 1. Load Environment Variables
// ==============================
require("dotenv").config();

// ==============================
// 2. Import Packages
// ==============================
const express = require("express");
const cookieParser = require("cookie-parser");

// ==============================
// 3. Import Local Files
// ==============================
const dbConnectionFun = require("./connection/dbConnection");
const movieRouter = require("./routes/movieRoute");
const userRouter = require("./routes/userRoute");

// ==============================
// 4. Create Express App
// ==============================
const app = express();

// ==============================
// 5. Connect Database
// ==============================
dbConnectionFun(process.env.MONGO_URI);

// ==============================
// 6. Set View Engine
// ==============================
app.set("view engine", "ejs");

// ==============================
// 7. Global Middleware
// ==============================

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse cookies
app.use(cookieParser());

// Serve static files (CSS, Images, JS)
app.use(express.static("public"));

// ==============================
// 8. Routes
// ==============================
app.use("/", userRouter);
app.use("/", movieRouter);

// ==============================
// 9. Start Server
// ==============================
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});