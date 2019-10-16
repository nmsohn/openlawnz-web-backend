require('dotenv').config()
require('@babel/core')
const app = require('./config/express')
const DB_HOST = process.env.DB_HOST || 'localhost'
const PORT = process.env.NODE_PORT || 3000

app.listen(PORT, () => {
  console.log(`
  API server running on port: ${PORT}
  API AT : https://${DB_HOST}:${PORT}
  `)
})
