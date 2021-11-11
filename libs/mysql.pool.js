const mysql = require('mysql')
const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

function getConnection(){
  return mysql.createPool(URI);
}

module.exports = getConnection
