const postList = require('../mock/post-list.json');

exports.List = function (req, res, next) {
  return res.status(200).json(postList);
}