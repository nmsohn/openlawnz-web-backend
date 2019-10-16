const express = require('express')
const router = express.Router()
const app = express()

app.use(express.json)
app.use(express.urlencoded)

// Implement routes
require('../app/routes/cases')(router)
// require('./app/routes/folder')(router)

module.exports = app
