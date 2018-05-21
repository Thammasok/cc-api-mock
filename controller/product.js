
const _ = require('lodash');
const postList = require('../mock/post-list.json');

exports.List = function(req, res, next) {
  return res.status(200).json(postList);
}

exports.Detail = async function(req, res, next) {
  req.assert("id", "product id cannot be empty.").notEmpty();

  let errors = req.validationErrors();
  if (errors) {
    return res.status(400).json(errors);
  } else {
    await getData(req.params.id);
  }


  function getData(id) {
    _.findIndex(postList["list"], function (p) {
      if (p.id === id) {
        return res.status(200).json(p);
      } else {
        return res.status(200).json({
          msg: "Not Found"
        });
      }
    });
  }
}