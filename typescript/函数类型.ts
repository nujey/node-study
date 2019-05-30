'函数声明'
'输入多余的参数，或者少输入参数，是不被允许的'

function sum(x: number, y: number):number {
  return x + y
}

'函数表达式'

let mysum:(x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}

interface Seach {
  (source: string, subString: string): boolean
}

let testFun: Seach;
    testFun = function(source: string, subString: string) {
      return source.search(subString) !== -1
    }

'可选参数'
'可选参数后面不允许出现必选参数，也就是可选参数必须跟在必选参数后面'
function b(first: string, last?: string) {
  ///
}
'参数默认值'
'我们可以给函数的参数添加默认值，自动变为可选参数， 有了默认值以后就可以在必选参数的前面了'
function bb(first: string = 'b', last: string) {
  //
}

'剩余参数'

  