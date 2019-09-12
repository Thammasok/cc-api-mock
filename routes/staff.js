const express = require('express')
const router = express.Router()

const { authenticated } = require('../middleware/auth')
const { authStaff } = require('../validate/staff')
const { product } = require('../validate/product')

const StaffController = require('../controller/staff')
const ProductController = require('../controller/product')

router.put('/add', authStaff, StaffController.createStaffAccount)
router.post('/login', authStaff, StaffController.loginStaff)

router.put('/product', authenticated, product, ProductController.createProduct)

module.exports = router
