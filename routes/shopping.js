const express = require('express')
const router = express.Router()

const ProductController = require('../controller/product')

// Shopping Product API
router.get('/products', ProductController.productLists)
router.get('/product/:id', ProductController.productDetail)

module.exports = router
