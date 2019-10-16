const pool = require('../../config/config')

pool.connect().finally(() => pool.end())

module.exports = pool