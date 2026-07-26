const mongoose = require("mongoose");

const connectDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("✅ Mongo db connected successfully !")

    }

    catch(error){
        console.log("mongo db connection failed")
        console.log(error.message)
        // stop server if db not connected
        process.exit(1);

    }
}

module.exports = connectDB;