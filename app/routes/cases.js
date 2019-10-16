const Cases = require('../controller/cases')

module.exports = router => {
  router.post('/', Cases.create)
  // router.put('/:id', Cases.update)
  // router.del('/:id', Cases.delete)

  return router
}
