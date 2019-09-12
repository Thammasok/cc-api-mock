const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema(
  {
    name: String
  },
  {
    timestamps: false
  }
)

const Locations = mongoose.model('location', locationSchema)

module.exports = Locations
