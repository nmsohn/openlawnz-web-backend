const Cases = require('../controller/cases')

module.exports = router => {
  router.post('/', (req, res) => {
    res.json(req.body)
  })
  router.post('/cases', Cases.create)
  // router.put('/:id', Cases.update)
  // router.del('/:id', Cases.delete)

  return router
}
