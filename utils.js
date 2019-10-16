const dotenv = require('dotenv')
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

module.exports = { sanitizeEnv }