'use strict'
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs')
// const { URL } 
// 解析当前目录:
var workDir = path.resolve('.') // 当前目录

// var filePath = path.join(workDir, 'module', 'es.html') // 在目录后面添加文件

// 从命令行参数获取root目录，默认是当前的目录
var root = path.resolve(process.argv[2] || '.')

// 创建http server，并传入回调函数:
var server = http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname
  var currentFile = path.join(root, 'module', pathname)
  // 获取文件状态
  fs.stat(currentFile, function(err, stats) {
    if (!err && stats.isFile) {
      response.writeHead(200)
      fs.createReadStream(currentFile).pipe(response)
    } else if (err.errno == -2){
      fs.createWriteStream(currentFile, '404测试')
      // response.writeHead(200)
      // response.end('404 Not Found')
    } else {
      response.writeHead(200)
      response.end('404 Not Found')
    }
  })
  // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
  // response.writeHead(200, { 'Content-Type': 'text/html' });
  // 将HTTP响应的HTML内容写入response:
  // response.end('<h1>Hola,Bonos Tares!</h1>')
})

// 服务器监听9090端口
server.listen(9090)
