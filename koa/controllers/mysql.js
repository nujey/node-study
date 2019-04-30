'use strict'
const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'xiaokan',
//   database: 'nini'
// })

// connection.query('SELECT * FROM sunday', (error, results, fields) => {
//   if (error) throw error
//   console.log(results)
//   // connection.release()
// })

// 创建数据池
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'xiaokan',
  database: 'nini'
})

// 在数据池中进行会话操作
pool.getConnection(function(err, connection) {
  connection.query('SELECT * FROM sunday', (error, results, fields) => {
    connection.release()
    if (err) throw err
  })
})
