const dotenv = require('dotenv')
const _ = require('lodash')
dotenv.config()

function sanitizeEnv (requiredEnvVars) {
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(
      `Could not find process.env.${envVar}: Did you remember to setup your environment variables?`
      )
    }
  }
}

function snakify (obj) {
  return _.mapKeys(obj, (value, key) => _.snakeCase(key))
}

module.exports = { sanitizeEnv, snakify }
