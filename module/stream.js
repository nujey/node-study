'use strict';

var stc = '流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。'

var str = '有些流用来读取数据，比如从文件读取数据时，可以打开一个文件流，'+
          +'然后从文件流中不断地读取数据。有些流用来写入数据，比如向文件写入数据时，只需要把数据不断地往文件流中写进去就可以了'

var str2 = '在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：'+
          +'data事件表示流的数据已经可以读取了'+
          +'end事件表示这个流已经到末尾了，没有数据可以读取了'+
          +'error事件表示出错了。'

var fs = require('fs')

// 打开一个流
var rs = fs.createReadStream('fs-writesync.txt', 'utf-8')

rs.on('data', function(chunk) {
  console.log(JSON.parse(chunk))
})
rs.on('end', function() {
  console.log('读取结束')
})
rs.on('error', function(err) {
  console.log(err)
})

var ws = fs.createWriteStream('output.txt', 'utf-8')
ws.write('使用stream写入');
var wsobj = { name: '测试一下对象的写入'}
var arr = [1, 2, 3, 4]
ws.write(JSON.stringify(wsobj))
ws.write(arr.join('-'))
ws.end()
