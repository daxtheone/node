const { SuClients, SuClientsSchema } = require('./suclients.model')
//const { SuPlanes, SuPlanesSchema } = require('./suplanes.model') ...


function setupModels(sequelize){
  SuClients.init(SuClientsSchema, SuClients.config(sequelize))
  //  SuPlanes.init(SuPlanesSchema, SuPlanes.config(sequelize)) ...

}

module.exports = setupModels
