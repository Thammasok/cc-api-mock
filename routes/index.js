const express = require('express')
const router = express.Router()

const HomeController = require('../controller/home')

/* GET home page. */
router.get('/', HomeController.Index)

module.exports = router
