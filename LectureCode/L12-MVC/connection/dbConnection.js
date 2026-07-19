const mongoose = require("mongoose");


function dbConnectionFun(url) {

        
    mongoose.connect(url)
    .then(() => console.log("MongoDB Connected for MVC"))
    .catch((err) => console.log(err));

}

module.exports =  dbConnectionFun;