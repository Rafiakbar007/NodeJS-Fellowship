const Product = require("../models/productModel")

//---------------------------
// create a product -> ADMIN
//---------------------------

exports.handleCreateProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body)

        return res.status(200).json({
            success: true,
            message: "product created successfully",
            product
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//---------------------------
// get all products
//---------------------------

exports.handleGetAllProducts = async (req, res) => {
    
    const products = await Product.find({})
    
    res.status(200).json({
        success: true,
        message: "all products are given below",
        products,
    })

}

//---------------------------
// get specific product 
//---------------------------

exports.handleGetSpecificProduct = async (req,res) => {
    
    try{
        let product = await Product.findById(req.params.id)
        
        if(!product){
            return res.status(404).json({
                success: false,
                message: "product not found !"
            })
        }
        const specificProduct = await Product.findById(req.params.id)

        return res.status(200).json({
            success: true,
            message: "product found successfully",
            specificProduct,
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//---------------------------
// update product -> ADMIN
//---------------------------

exports.handleUpdateProduct = async (req,res) => {
    try{
        let product = await Product.findById(req.params.id)
        
        if(!product){
            return res.status(404).json({
                success: false,
                message: "product not found !"
            })
        }
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        return res.status(200).json({
            success: true,
            message: "product updated successfully",
            updatedProduct,
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//---------------------------
// delete product -> ADMIN
//---------------------------

exports.handleDeleteProduct = async (req,res) => {
    try{
        const product = await Product.findById(req.params.id)
        
        if(!product){
            return res.status(404).json({
                success: false,
                message: "product not found !"
            })
        }
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            success: true,
            message: "product deleted successfully",
            deleteProduct,
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

