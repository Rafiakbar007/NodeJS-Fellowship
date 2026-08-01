const express = require("express")
const app = express()
const errorHandler = require("./utils/errorHandler")

app.use(express.json())

// route imports
const products = require("./routes/productRoutes")

app.use("/api/v1", products)
app.use(errorHandler)

module.exports = app