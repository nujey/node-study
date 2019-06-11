let desc = '接口【interfaces】用于对【对象的形状shape】进行描述'
  desc = '对类的一部分进行抽象'

desc = '[implements]实现 面向对象中的一饿重要概念 '

desc = '一个类只能继承自另一个类，有时候不同类之间有一些共用的特性，就需要把特性提取成接口'

interface Alarm {
  alert(1)
}

desc = '一个类可以有多个接口'

interface Light {
  lightOn()
  LightOff()
}

desc = '接口继承接口'

interface LightableAlarm extends Alarm {
  lightOn()
  LightOff()
}

class Door {

}

class Point {
  x: number;
  y: number
}

interface Point3d extends Point {
  z: number
}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }
  lightOn() {}
  LightOff() {}
}

desc = '混合类型'

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}

desc = '有时候，一个函数可以有自己的属性和方法'

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {

  let counter = <Counter>function(start: number) {} // 类型断言
  // let counter = function<Counter>(start: number) {}
  // let counter = function(start: number) {} as Counter
  counter.interval = 123

  counter.reset = function() {}
  
  return counter
}
