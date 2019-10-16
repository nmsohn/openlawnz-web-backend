const db = require('./index');


exports = function insert(data, userId){
  const values = [...Object.values(data)]
  const keys = [...Object.keys(data)]
  const sql = `INSERT INTO cases.cases (${keys.join(',')}}) values ()`
 return db.query(sql, [...wildcards])
  
}

