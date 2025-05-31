const express = require('express');
const router = express.Router();
const productController = require('../controller/product'); // or a dedicated cart controller

router.post('/add', productController.addToCart);

module.exports = router;