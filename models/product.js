const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: String,
    image_url: String,
    description: String,
    price: String,
    review: Object,
    brand_info: Object
  },
  {
    timestamps: true
  }
)

const Products = mongoose.model('product', productSchema)

module.exports = Products
