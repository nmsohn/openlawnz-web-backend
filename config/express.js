const express = require('express')
const app = express()
const router = require('express').Router()
const jwtCheck = require('../middlewares/auth0')
const mapKeys = require('../middlewares/mapKeys')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Implement routes
require('../app/routes/cases')(router)
// require('./app/routes/folders')(router)
// require('./app/routes/legislation')(router)
// require('./app/routes/pdf')(router)
// require('./app/routes/pipelineCases')(router)
app.use('/api/v1', mapKeys, jwtCheck, router)

module.exports = app
