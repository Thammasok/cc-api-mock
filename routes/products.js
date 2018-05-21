var express = require('express');
var router = express.Router();

const ProductController = require('../controller/product');

router.get('/', ProductController.List);
router.get('/:id', ProductController.Detail);


module.exports = router;
