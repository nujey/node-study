var module = {
  id: 'module',
  exports: {}
}

var load = function(module) {
  // 读取模块代码
  function greet(name) {
    console.log('')
  }
  module.exports = greet
  return module.exports
}

var exported = load(module)

save(module, exported)

// module： Node在加载js的时候准备一个变量，并将其传入到加载函数，通过参数module传递给load函数，hello.js就会把变量传递给node环境
// Node会把module保存到某一个地方，有多少保存多少

// 所以在require的时候，会找到对应的module

// 不能直接给exports赋值，因为module.exports默认还是一个空对象，并不会获取到赋值