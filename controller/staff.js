const bcrypt = require('bcrypt')
const moment = require('moment')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const StaffModel = require('../models/staff')

const SROUND = parseInt(process.env.SROUND)

const generateToken = (staffId) => {
  const payload = {
    iss: process.env.TOKEN_ISS,
    sub: staffId,
    iat: moment().unix(),
    exp: moment().add(4, 'hour').unix()
  }

  return jwt.sign(payload, process.env.TOKEN_SECRET)
}

const createStaffAccount = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(403).json({ errors: errors.array() })

  const hashpwd = bcrypt.hashSync(req.body.password, SROUND)

  StaffModel.find({
    username: req.body.username
  }, (err, docs) => {
    if (err) return res.status(403).json(err)

    if (!docs) {
      StaffModel.create([{
        username: req.body.username,
        password: hashpwd
      }], (err) => {
        if (err) return res.status(403).json({ msg: 'Create new account failed', err })

        return res.json({
          msg: 'create new account successed.'
        })
      })
    } else {
      return res.status(403).json({
        msg: 'this username already exists.'
      })
    }
  })
}

const loginStaff = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(403).json({ errors: errors.array() })

  StaffModel.find({
    username: req.body.username,
    allow: true
  }, (err, docs) => {
    if (err) return res.status(403).json(err)

    if (docs.length > 0) {
      bcrypt.compare(req.body.password, docs[0].password, (err, result) => {
        if (err) return res.status(403).json(err)

        if (result) {
          const token = generateToken(docs[0]._id)

          return res.json({ token: token })
        } else {
          return res.status(403).json({
            msg: 'username or password incorrect.'
          })
        }
      })
    } else {
      return res.status(403).json({
        msg: 'username or password incorrect.'
      })
    }
  })
}

module.exports = {
  createStaffAccount,
  loginStaff
}
