const jwt = require('jsonwebtoken')

const StaffModel = require('../models/staff')

const authenticated = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    return res.status(403).json({
      msg: 'authorization header is require.'
    })
  } else if (req.headers.authorization === '') {
    return res.status(403).json({
      msg: 'authorization header is not empty.'
    })
  } else {
    jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json(err)
      } else {
        StaffModel.find({ _id: decoded.sub, allow: true }, (err, user) => {
          if (err) return res.status(401).json(err)

          if (!user) {
            return res.status(403).json({
              msg: 'Unauthorized'
            })
          } else {
            req.user = user[0]

            next()
          }
        })
      }
    })
  }
}

module.exports = {
  authenticated
}
