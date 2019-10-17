const namespace = 'https://openlaw.nz'

function getUserClaims (user) {
  return {
    ...Object.entries(user)
      .reduce((newObj, [key, value]) => {
        console.log(key, value)
        const regexNamespace = /https:\/\/openlaw\.nz\/.+/
        const isCustomClaim = key.match(regexNamespace)

        // Sanitize Claim
        const isClaim = key.match(/^[a-z][a-z0-9A-Z-_]+$/)
        if (!isClaim && !isCustomClaim) {
          throw new Error('Invalid claim key.')
        }
        // Remove nameSpace
        if (isCustomClaim) {
          key = key.replace(namespace + '/', '')
          console.log('after replace', key)
        }

        newObj[key] = value
        return newObj
      })
  }
}

function authorizationCheck ({ user, route }, res, next) {
  // do checks here
  // run user claims to remove openlaw.nz namespace
  // check with scope if role is allowed to use route
  // if allowed next()
  // if not allowed throw error
  // paste in route eg .post('/', cases.auth, Cases.insert)
  next()
}

module.exports = {
  getUserClaims,
  authorizationCheck
}
