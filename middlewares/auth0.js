const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const dotenv = require('dotenv')
dotenv.config()

const JWT_ISSUER = process.env.JWT_ISSUER
const JWT_AUDIENCE = process.env.JWT_AUDIENCE
const JWT_URI = process.env.JWT_URI
const ALGORITHMS = process.env.ALGORITHMS.split(',')

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const secret = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: JWT_URI
})

const jwtCheck = jwt({
  secret,
  audience: JWT_AUDIENCE,
  issuer: JWT_ISSUER,
  algorithms: [...ALGORITHMS]
})

module.exports = jwtCheck