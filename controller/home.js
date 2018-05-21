exports.Index = function(req, res, next) {
  return res.status(200).json({
    title: "Candidate Test"
  });
}