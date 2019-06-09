let desc:string = '定义了一件事物的抽象特点，包含它的属性和方法‘

desc = '封装: 将对数据的操作细节隐藏起来，只暴露对外的接口，就能通过对外提供的接口来访问对象，同时也保证了外界无法任意更改对象内部的数据'

desc = '继承：子类继承父类，子类拥有父类的所有特性'

desc = '由继承产生了相关的不同的类, 对同一个方法可以有不同的响应'

desc = 'getter&setter 用以改变属性的读取和赋值行为'

desc = 'Modifiers 修饰符是一些关键字，用于限定成员类型的性质。public表示公有或方法'

desc = 'Abstract Class 抽象类是供其他类继承的基类 抽象类不允许被实例化 抽象类中的抽象方法必须在子类中被实现'

desc = 'Interfaces 接口： 不同类之间公有的属性或者方法，可以抽象成一个接口。接口可以被类实现。一个类只能继承另一个类，但是可以实现多个接口'


// 属性和方法
class Animal {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    return  `my name is ${this.name}`
  }
}

let a = new Animal('Jack')

// 类的继承
class Cat extends Animal {
  constructor(name) {
    super(name) // 调用父类的constructor（name）
  }
  sayHi() {
    return 'Meow, ' + super.sayHi()
  }
}

let c = new Cat('Tom')

// 存取器 使用getter和setter 可以改变属性的赋值和读取行为
class Animal {
  constructor(name) {
    this.name = name
  }
  get name() {
    return 'Jack'
  }
  set name(value) {
    console.log(`setter: ${value}`)
  }
}

// 静态方法
// 使用static修饰符修饰的方法成为静态方法 不需要实例化 直接通过类来调用
class Animal {
  static isAnimal(a) {
    return a instanceof Animal
  }
}
let aa = new Animal('JACK')

//

