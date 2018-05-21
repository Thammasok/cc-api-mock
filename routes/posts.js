var express = require('express');
var router = express.Router();

const PostController = require('../controller/post');

router.get('/', PostController.List);

module.exports = router;
