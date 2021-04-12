const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.get('/products/all', productController.getAllProducts)
router.post('/product', productController.createProducts)
router.get('/product/:id', productController.getProduct)
router.get('/products', productController.getAllProductsLimit)


module.exports = router