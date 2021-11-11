const mysql = require('mysql')

function getConnection(){
  const client = mysql.createConnection({
    host : '35.224.91.81',
    user: 'paykudes',
    password: 'ovDhju4aZal9',
    database: 'payku_des'
  })
  client.connect()
  return client
}
module.exports = getConnection

