const { check } = require('express-validator')

exports.authStaff = [
  check('username').not().isEmpty(),
  check('password').not().isEmpty().isLength({ min: 5 }).withMessage('must be at least 5 chars long')
]
