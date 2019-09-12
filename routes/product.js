const express = require('express')
const router = express.Router()

const ProductController = require('../controller/product')

router.get('/', ProductController.productLists)
router.get('/:id', ProductController.productDetail)

module.exports = router
