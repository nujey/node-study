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


