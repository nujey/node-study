'类型兼容性是基于结构子类型的'
'结构类型是一种只使用其成员来描述类型的方式'

 interface Named {
   name: string
 }

 class Person {
   name: string
 }

 let p: Named

 p = new Person()

 '结构化类型系统的基本规则是：如果x要兼容y，那么y至少具有与x相同的属性'
 interface Named {
   name: string
 }
 let x: Named;

 let y = { name: 'alice', location: 'shuttbug' }

 x = y

 let a = (a: number) => 0
 let b = (b:number, s: string) => 0

 b = a // ok
 a = b // error

 '类型系统强制源函数的返回值必须是目标函数返回值类型的子类型'

 '比较兼容性的时候，可选参数与必选参数是可以互换的'
 '源类型上有额外的可选参数不是错误 目标类型的可选参数在原类型里没有对应的参数也不是错误'

'枚举'
'枚举类型与数字类型兼容 并且数字类型与枚举类型兼容'
