const { Sequelize } = require('sequelize');
const { config } = require('../config/config')
const setupModels = require('../db/models')
const tunnel = require('tunnel-ssh');


const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI,
  {
    dialect: 'mysql'
  }
)

const llave = require('fs').readFileSync('./config/google_compute_engine')

// tunnel config

var configTunel = {
 /* username:'danie',
  host:'104.197.109.157',
  port:22,
  dstHost:'127.0.0.1',
  dstPort:3006,
  srcHost:'127.0.0.1',
  srcPort:3006,
  localHost:'127.0.0.1',
  localPort: 3006,
  privateKey: require('fs').readFileSync('./config/google_compute_engine.txt')

*/
  username:'danie',
  host:'104.197.109.157',

  port: 22,
  dstHost:'35.224.91.81',
  dstPort:'3306',
  privateKey: llave,
  passphrase:'conan'
};
/*
var config = {
  username:'root',
  password:'secret',
  host:sshServer,
  port:22,
  dstHost:destinationServer,
  dstPort:27017,
  localHost:'127.0.0.1',
  localPort: 27000
};*/
// initiate tunnel

tunnel(configTunel, function (error, server) {
  //....
  if(error) {
    console.error(error);
  } else {
    console.log('server:', server);
    // test sequelize connection
    setupModels(sequelize)

    sequelize.sync()

    module.exports = sequelize
  }
})




