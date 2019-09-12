const express = require('express')
const fs = require('fs')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(cors())

// connect mongodb
mongoose.set('useFindAndModify', false)

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-phsdq.gcp.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true`
const opts = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(url, opts)
mongoose.connection.once('open', () => {
  console.log('connected to database: ', process.env.MONGO_NAME)
})

const files = fs.readdirSync('./routes')
for (const i in files) {
  const routeName = require('./routes/' + files[i])
  const fileName = files[i].replace(/\.[^/.]+$/, '')

  if (fileName === 'index') {
    app.use('/', routeName)
  } else {
    app.use(`/${fileName}`, routeName)
  }
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// error handler
app.use(function (err, req, res, next) {
  return res.status(403).json({
    msg: err.message
  })
})

module.exports = app
