const getUserClaims = require('../auth/authorization').getUserClaims

describe('Authorization', () => {
  it('should return userClaims', () => {
    const user = {
      'https://openlaw.nz/roles': 'admin',
      nickname: 'test',
      name: 'test@test.com',
      picture: 'https://s.gravatar.com/avatar/4ca3baa26aae7b605fb250bb78f2bbdc?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fno.png',
      updated_at: '2019-10-15T04:38:58.395Z',
      email: 'test@test.com',
      email_verified: true,
      exp: 1571255254
    }
    const expected = {
      roles: 'admin',
      nickname: 'test',
      name: 'test@test.com',
      picture: 'https://s.gravatar.com/avatar/4ca3baa26aae7b605fb250bb78f2bbdc?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fno.png',
      updated_at: '2019-10-15T04:38:58.395Z',
      email: 'test@test.com',
      email_verified: true,
      exp: 1571255254
    }
    const result = getUserClaims(user)

    expect(result).toEqual(expected)
  })
})
