'和类一样，接口也可以互相继承 可以更加灵活的将接口分割到可重用的模块'

interface Shape {
  color: string
}
'当然 一个接口可以继承多个接口'
interface PenStroke {
  penWidth: number
}
interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = <Square> {}
square.color = 'blue'
square.sideLength = 10

'接口继承类'
'当接口继承了一个类类型的时候，会继承类的成员但是不包括其实现'
'就像是接口声明了所有类中存在的成员 但是并没有提供具体实现一样'
'接口同样会继承到类的private和protected成员 ----- 接口继承了一个拥有私有或受保护的成员的类 只能被这个类或者子类实现【implement】'

'庞大的继承结构中 要指出只在子类拥有指定属性起作用 '
class Control {
  private state: any
}
interface SelectableControl extends Control {
  select(): void
}
class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() {}
}

class Image implements SelectableControl {
  select() {}
}

class Location {

}


