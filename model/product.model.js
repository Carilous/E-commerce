const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    ProductImage: {
        type: String,
        
    },
    ProductImageId: {
        type: String,
    },
    productTitle: {
        type: String,
       
    },
    productCode: {
        type: String,
        
    },
    price :{
        type: Number,
        },
    description: {
          type: String,
    },
   
    
      
    
}, {
    timestamps: true,})
    const ProductModel = mongoose.model('products', productSchema);
module.exports = ProductModel;