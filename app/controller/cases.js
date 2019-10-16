const Cases = require('../model/cases')

exports = function create(req, res) {
  const data = req.body;
  const userId = req.user.sub;
  Cases.insert(data, userId)
  .then(result =>{
    done(null,result.rows)
  }).catch(e =>{
    done(e, null)
  })
}