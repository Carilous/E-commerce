const ProductModel = require('../model/product.model');
const cloudinary = require('../config/cloudinary');
const newProduct = async (req, res) => {
    try{
        const { productTitle,  price, description } = req.body;
        const productCodeGenerator = Math.floor(Math.random() * 1000000);
        const cloudImage = await cloudinary.uploader.upload(req.file.path)
        const productNew = await ProductModel.create({
            productTitle,
            productImageID: cloudImage.public_id,
            productImage: cloudImage.secure_url,
             price,
            description,
            productCode: `REDCART-${productCodeGenerator}`,
        });
        res.status(201).json({
            message: 'Product added successfully',
            data: productNew,
        });
        
    }

    catch(error){
        res.status(500).json({
            message: 'Failed to add product',
            data: error
        });
    }
};
const getAllProducts = async (req, res) => {
    try{
        const getproducts = await ProductModel.find({});
        res.status(200).json({
            message: 'Products fetched successfully',
            data: getproducts,
        });
    }
    catch(error){
        res.status(500).json({
            message: 'Failed to fetch products',
            data: error
        });
    }
}
const getOneProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
            });
        }
        res.status(200).json({
            message: 'Product fetched successfully',
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch product',
            data: error,
        });
    }
}
    

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
            });
        }
        res.status(200).json({
            message: 'Product fetched successfully',
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch product',
            data: error,
        });
    }



}

module.exports = {newProduct, getAllProducts, getProductById, getOneProduct};