const Cases = require('../model/cases')

export function create (req, res) {
  const data = req.body
  const userId = req.user.sub || 0
  Cases.insert(data, userId, err => {
    if (err) {
      res.status(500).send(err.stack)
    } else {
      res.status(201).send('Created case')
    }
  })
}

export function update (req, res) {
  res.status(500).send('Not implemented')
}

export function del (req, res) {
  res.status(500).send('Not implemented')
}
