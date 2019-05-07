'use strict'

var url = require('url')

const myUrl = new url.URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')

console.log(myUrl.protocol, '协议')
console.log(myUrl.username, '用户名')
console.log(myUrl.password, '密码')
console.log(myUrl.host, '主机部分')
console.log('主机名'+ myUrl.hostname +', 端口:'+ myUrl.port)
console.log(myUrl.pathname, '路径')
console.log(myUrl.search, '序列化查询(query)部分')
// myUrl.searchParams.getAll()
console.log(myUrl.searchParams, '对query的读写')
console.log(myUrl.hash, '分段hash部分')
