const express = require("express");
const app = express();

const dbConnectionFun = require("./connection/dbConnection");
const userRouter = require("./route/userRoute");

// Database Connection
dbConnectionFun("mongodb://127.0.0.1:27017/usersDB");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/user", userRouter);

const PORT = 8000;

app.listen(PORT, () => {
    console.log("server started at port", PORT);
});