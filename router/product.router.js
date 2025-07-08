const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  newProduct,
} = require("../controller/product.controller");
const  upload  = require("../config/multer");


router.post('/newproduct', upload.single('ProductImage'), newProduct);
router.get('/allproducts', getAllProduct);

module.exports = router;