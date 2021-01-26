const { validationResult } = require('express-validator')

const ProductModel = require('../models/product')

const createProduct = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(403).json({ errors: errors.array() })

  ProductModel.create([{
    name: req.body.name,
    image_url: req.body.image_url,
    description: req.body.description,
    price: req.body.price,
    review: req.body.review,
    brand_info: req.body.brand_info
  }], (err) => {
    if (err) return res.status(403).json({ msg: 'Create new product failed', err })

    return res.json({
      msg: `create new ${req.body.name} successed.`
    })
  })
}

const productLists = (req, res) => {
  // ProductModel.find({}, (err, products) => {
  //   if (err) return res.status(403).json(err)

  //   return res.json(products)
  // })

  var query = ProductModel.find({}).select('_id', 'name', 'image_url', 'price', 'review', 'brand')

  query.exec(function (err, products) {
    if (err) return res.status(403).json(err)

    return res.json(products)
  })
}

const productDetail = async function (req, res) {
  ProductModel.findById(req.params.id, (err, product) => {
    if (err) return res.status(403).json(err)

    return res.json(product)
  })
}

module.exports = {
  createProduct,
  productLists,
  productDetail
}
