let text = [
  '在typescript中,我们使用接口[interfaces]来定义对象的类型',
  '面向对象语言中,接口是对行为的抽象,具体如何行动需要class[类]去实现',
  '对类的一部分行为进行抽象',
  '对象的shape进行描述'
]

interface Person {
  name: string;
  age: number
}
// tom 是变量
// Person 是接口
let tom: Person = {
  name: 'Tom',
  age: 25
}

// [赋值的时候, 变量的形状必须和接口的形状保持一致]

let b = [
  '可选属性',
  '可选属性的意义就是该属性可以不存在',
  '哪怕是可选属性,也不允许添加未定义的属性'
]

interface Person1 {
  name: string;
  age?: number
}
let tom1: Person1 = {
  name: 'tom'
}

let c:any = [
  '任意属性',
  '接口允许有任意的属性',
  '🔥🔥一旦定义了任意属性,那么确定属性和可选属性的类型必须是它的类型的子集🔥🔥'
]

interface Person2 {
  name: string;
  age?: number;
  [propName: string]: string | number; // 报错 因为number不是子集
}

let tom2:Person2 = {
  name: 'tom2',
  age: 20,
  gender: 'male'
}

let c = [
  '只读属性',
  '希望对象中的一些字段只能在创建的时候被赋值, 可以用readonly定义只读属性',
  'readonly的值不能在定义初始化之后被赋值,否则会报错',
  '只读的约束 在第一次给对象赋值的时候,而不是第一次给只读属性赋值的时候'
]
interface Person3 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any
}

let tom3: Person3 = {
  id: 89757,
  name: 'tom3'
}

