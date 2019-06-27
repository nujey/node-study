'symbol是一种新的原生类型 就像number和string一样'
'symbol类型的值是通过symbol构造函数创建的'

let sym = Symbol()

let sym1 = Symbol('key')

'symbol是不可改变且唯一的'

 const sym2 = Symbol()

 let obj = {
   [sym2]: "value"
 }

 console.log(obj[sym2])

const getClassNameSymbol = Symbol()

class C {
  [getClassNameSymbol]() {
    return 'C'
  }
}

let c = new C()
let className = c[getClassNameSymbol]()

[Symbol.hasInstance]
'构造器对象用来识别一个对象是否是其实例'

[Symbol.isConcatSpreadable]
'布尔值 表示当一个对象上调用Array.prototype.concat时候，这个对象的数组元素是否可以展开'

[Symbol.iterator]
'for-of语句调用 返回对象的默认迭代器'

[Symbol.match]
'被string.prototype.match调用，正则表达式用来匹配字符串'

[Symbol.replace]
'被string.prototype.replace正则表达式用来替换字符串中匹配的子串'

[Symbol.search]
'被string.prototype.search调用 返回被匹配部分在字符串索引中的索引'

[Symbol.species]
'函数值 为一个构造对象 用来创建派生对象'

[Symbol.split]
'被string.prototype.split调用 正则表达式用来分隔字符串'

[Symbol.toPrimitive]
'被toPrimitive抽象操作调用 把对象转换未相应的原始值'

[Symbol.toStringTag]
'被内置方法Object.prototype.toString调用 返回创建对象时默认的字符串描述'

[Symbol.unscopables]
'自己拥有的属性会被with作用域排除在外'

