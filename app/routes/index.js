const router = require('express').Router

module.exports = app =>{
  
  app.use('/cases', casesRoutes)(router)
  app.use('/folders', folderRoutes)(router)

  return app
}