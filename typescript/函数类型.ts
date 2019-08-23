'函数声明'
'输入多余的参数，或者少输入参数，是不被允许的'

function sum(x: number, y: number):number {
  return x + y
}

'函数表达式'
// 完整函数类型

'函数类型包括【参数类型】、【返回值类型】完整函数类型这两部分是必须的'

'=> 并不是ES6的箭头函数 而是前面是函数 后面是返回值类型'

'函数的类型只是由参数类型和返回值组成的 函数中使用的捕获变量不会体现在类型里面 实际上 变量是函数的隐藏状态并不是组成API的一部分'

let mysum:(x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}

'只要参数类型是匹配的 那么就认为是有效的函数类型，而不在乎参数名是否正确'

interface Seach {
  (source: string, subString: string): boolean
}

let testFun: Seach;
    testFun = function(source: string, subString: string) {
      return source.search(subString) !== -1
    }
let testFun: Search;
    testFunction = function(source: string, subString: string) {
      return source.search(subString) !== -1
    }

'推断类型'
'仅在等式的一侧带有类型 ts编译器仍可以正确识别类型'
let myapp = function(x: number, y:number):number {
  return x + y
}
let myapp1: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y
}

'可选参数'
'可选参数后面不允许出现必选参数，也就是可选参数必须跟在必选参数后面'
function b(first: string, last?: string) {
  ///
}
'js中，每个参数都是可选的 可传可不传 没有传参的时候 是undefined '


'参数默认值'
'我们可以给函数的参数添加默认值，自动变为可选参数， 有了默认值以后就可以在必选参数的前面了'
'带默认值的参数不需要放在必须参数的后面'
'如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined来获得默认值 '
function bb(first: string = 'b', last: string) {
  //
}

'剩余参数'
'es6中的rest参数，只能作为函数的最后一个参数'
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + '' + restOfName.join(' ')
}
'剩余参数会被当作个数不限的可选参数 可以一个都没有，同样也可以有任意个 '
function push(array: any[], ...items:any[]) {
  items.forEach(item => {
    array.push(item)
  })
}

'重载'
'重载允许一个函数接受不同数量或者类型的参数时候，作出不同的处理'

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): number | string {
  return x.split('').reverse().hoin('')
}
