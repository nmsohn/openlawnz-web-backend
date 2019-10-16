const { snakify } = require('../utils')

module.exports = (req, res, next) => {
  req.body = snakify(req.body)
  next()
}
