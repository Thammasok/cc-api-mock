const { check } = require('express-validator')

exports.product = [
  check('name').not().isEmpty(),
  check('image_url').not().isEmpty(),
  check('description').not().isEmpty(),
  check('price').not().isEmpty(),
  check('brand_info').not().isEmpty()
]
