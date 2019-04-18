'use strict'

var url = require('url')

console.log(new url.URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'))