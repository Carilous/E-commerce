const express = require("express");
const router = express.Router();

const upload = require("../config/multer");
const { newProduct, getAllProduct } = require("../controller/product.controller");

router.post('/new-product', upload.single("productImage"), newProduct);
router.get('/all-products', getAllProduct);

module.exports = router;
