const postList = require('../mock/post-list.json')

exports.List = function (req, res, next) {
  return res.status(200).json(postList)
}

exports.Detail = async function (req, res, next) {
  req.assert('id', 'product id cannot be empty.').notEmpty()

  let errors = req.validationErrors()
  if (errors) {
    return res.status(400).json(errors)
  } else {
    await getData(req.params.id)
  }

  function getData (id) {
    postList['list'].map((value, index) => {
      if (value.id === id) {
        return res.status(200).json(value)
      }
    })
  }
}
