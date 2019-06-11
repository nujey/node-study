let desc = '泛型是指在定义函数、接口或类的时候，不预先制定具体的类型，而在使用的时候再制定类型的一种特性'

function createArray(length: number, value: any): Array<any> {
  let result = []
  for(let i =0; i < length; i++) {
    result[i] = value
  }
  return result
}

function createArray1<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for(let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray1<string>(3, 'x')

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap([7, 'seven'])


desc = '泛型约束'
  var d = '在函数内部使用泛型变量的时候，由于事先不知道是哪种类型，所以不能随意的操作它的属性和方法'

  interface Lengthwise {
    length: number
  }
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
  }

desc = '多个类型参数之间也可以互相约束'

  function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
      target[id] = (<T>source)[id]
    }
    return target
  }

interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>
}
let createArray2: CreateArrayFunc;
createArray2 = function<T>(length: number, value: T):Array<T> {
  let result: T[] = []
  for(let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

interface CreateArrayFunc3<T> {
  (length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc3<any>;
  createArray3 = function<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for(let i = 0; i < length; i++) {
      result[i] = value
    }
    return result
  }

  desc = '泛型类'
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T
  }

desc = '泛型参数的默认类型'
function createArray4<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for(let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

function identity<T>(arg: T):T {
  return arg
}

let output = identity<string>("myString")
