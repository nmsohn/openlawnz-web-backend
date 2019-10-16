const Cases = require('../model/cases')

export function create (req, res) {
  const data = req.body
  const userId = req.user.sub || 0
  Cases.insert(data, userId, (err, result) => {
    if (err) {
      res.sendStatus(500).send('error')
    } else {
      res.sendStatus(201).send('Create Case success')
    }
  })
}

export function update (req, res) {
  res.sendStatus(500).send('Not implemented')
}
