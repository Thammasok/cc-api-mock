const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema(
  {
    username: String,
    password: String,
    allow: {
      type: Schema.Types.Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Staffs = mongoose.model('staff', staffSchema)

module.exports = Staffs
