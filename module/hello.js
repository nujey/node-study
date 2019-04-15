'use  strict';

var s = 'hello'

function greet(name) {
  console.log(s + ', ' + name + '!')
}


module.exports = {
  greet: greet,
  s: s
}

exports.a = 'sss' // s=如果没有momdule.exports的时候 就会导出这个
