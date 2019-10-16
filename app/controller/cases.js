const Cases = require('../model/cases')

export function create (req, res) {
  const data = req.body
  const userId = req.user.sub
  Cases.insert(data, userId)
}

export function update (req, res) {
  const data = req.body
  const userId = req.user.sub
  Cases.insert(data, userId)
}
