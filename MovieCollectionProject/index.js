const express = require("express");
const cookieParser = require("cookie-parser")
const dbConnectionFun = require("./connection/dbConnection")
const MovieModel = require("./models/movieModel")
const movieRouter = require("./routes/movieRoute")
const userRouter = require("./routes/userRoute")
const app = express();

// 2- ejs configure
app.set("view engine", "ejs")

//middleware
app.use(express.urlencoded({
    extended: false
}));

app.use("/", userRouter);

app.use(cookieParser());

app.use(express.static("public"));

// 1- server create and listen
const PORT = 8001;
app.listen(PORT, () => {
    console.log("server listening at port: ", PORT)
})

// 3- connect with database
dbConnectionFun("mongodb://127.0.0.1:27017/movieDB")

// routes

app.use("/" , movieRouter)

