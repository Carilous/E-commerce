const express = require('express');
const App = express();
const PORT = 3550
const cors = require('cors');
require("dotenv").config();
require("./config/db")
require("./config/cloudinary");
const productRouter = require('./router/product.router');
App.use(cors());


App.get('/', (req, res) => {
    res.json({
        message: 'Server is running successfully',
    });

})
App.use('/api/product', productRouter);
App.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});