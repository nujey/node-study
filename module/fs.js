// fs就是node内置的文件系统模块，负责读写文件

// fs模块同时提供了异步和同步的方法

'use strict'

var fs = require('fs')

// 异步读取文件
fs.readFile('fs.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(1, bufferToString(data))
  }
})

function bufferToString(bf) {
  return bf.toString('utf-8')
}

function stringToBuffer(str) {
  return Buffer.from(str, 'utf-8')
}
// 同步读取文件
try {
  var syncData = fs.readFileSync('fs1.txt')
  console.log(2, syncData)
} catch(err) {
  // throw Error(err)
  console.log(err.Error)
}

// 写文件
var writeData = 'Hello, fs writeFile'
fs.writeFile('fs-write.txt', writeData, function(err) {
  if (err) {
    console.log('写文件失败')
  }
})

fs.writeFileSync('fs-writesync.txt', writeData)

// 获取文件信息
/**
 * @param {String} path 文件路径
 * @param {Function} callback 回调函数 参数是err和status 【fa.status】
 */
fs.stat('fs-writesync.txt', function(err, stats) {
  // console.log(stats)
  if (err) {
    console.log(err)
  } else {
    var statsObj = {
      isFile: stats.isFile(), // 是否是文件
      isDirectory: stats.isDirectory(), // 是否是目录
      size: stats.isFile() ? stats.size : '', // 文件大小
      birthTime: stats.isFile() ? stats.birthtime : '', // 创建时间
      modifiedTime: stats.isFile() ? stats.mtime : ''// 修改时间
    }
    fs.writeFileSync('fs-writesync.txt', JSON.stringify(statsObj))
  }
})
