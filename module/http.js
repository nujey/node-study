'use strict'
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs')
// const { URL } 
// 解析当前目录:
var workDir = path.resolve('.')
console.log(new url.URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'))

// 创建http server，并传入回调函数:
var server = http.createServer(function(request, response) {
  // console.log(request)
  // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
  response.writeHead(200, { 'Content-Type': 'text/html' });
  // 将HTTP响应的HTML内容写入response:
  response.end('<h1>Hola,Bonos Tares!</h1>')
})

// 服务器监听9090端口
server.listen(9090)
