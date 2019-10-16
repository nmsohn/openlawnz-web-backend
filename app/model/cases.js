const db = require('./index')

export function insert (data, userId, done) {
  const values = [...Object.values(data)]
  const keys = [...Object.keys(data)]
  const wildcards = values.map((val, idx) => '$' + (idx + 1)).join(',')
  const sql = `INSERT INTO cases.cases (${keys.join(',')}) VALUES (${wildcards})`

  db.query(sql, values)
    .then(result => {
      done(null, result.rows)
    }).catch(e => {
      done(e, null)
    })
}
