const express = require("express")
const router = express.Router()
const { 
    handleGetAllProducts, 
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleGetSpecificProduct,
} = require("../controllers/productController")


router.route("/products").get(handleGetAllProducts)
router.route("/products/new").post(handleCreateProduct)
router.route("/products/:id").put(handleUpdateProduct)
router.route("/products/:id").delete(handleDeleteProduct)
router.route("/products/:id").get(handleGetSpecificProduct)


module.exports = router