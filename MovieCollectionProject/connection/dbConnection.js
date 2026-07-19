// connect database

const mongoose = require("mongoose");

// create module for data base connection
async function dbConnectionFun(url) {

    try{
        await mongoose.connect(url)
        console.log("mongoDB connected")

    }
    catch (error) {
        console.log(error)

    }
}

module.exports = dbConnectionFun;