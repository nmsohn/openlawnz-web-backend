require('dotenv').config()
require('@babel/core')

const app = require('./config/express.js')
const DB_HOST = process.env.DB_HOST || 'localhost'
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`
  Postgraphile API server running on port: ${PORT}
  API AT : https://${DB_HOST}:${PORT}/graphql
  User Graphiql interface at: https://${DB_HOST}:${PORT}/graphiql
  `)
})
