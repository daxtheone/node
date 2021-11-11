const express = require('express')
const suclientsRouter = require('./suclients.router')

//const sususcriptionsRouter = require('./suclients.router')
//const sucobrosRouter = require('./suclients.router')

function routerApi(app){
  const router = express.Router()
  app.use('/api/v2/',router)
  router.use('/suclient', suclientsRouter)
  //  router.use('/sususcriptions', sususcriptionsRouter)
  //  router.use('/sucobros', sucobrosRouter)

}

module.exports = routerApi
