'强制一个类去符合某种契约'

interface ClockInteface {
  currentTime: Date;
  setTime(d: Date): void
}

class Clock implements ClockInteface {
  currentTime: Date = new Date()
  setTimeout(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}

'类静态部分和实例部分的区别------类具有两个类型【静态部分的类型】、【实例的类型】'

interface ClockConstructor {
  new (hour: number, minute: number)
}

class Clock implements ClockConstructor {
  currentTime: Date
  constructor(h: number, m: number) {}
}
'直接操作类的静态部分'

interface ClockConstructor {
  new (hour: number, minute: number): ClockInteface
}

interface ClockInteface {
  tick(): void
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInteface {
  return new ctor(hour, minute)
}

class DigitalCLock implements ClockInteface {
  constructor(h: number, m: number){ }
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInteface {
  constructor(h: number, m: number) {}
  tick() {}
}

'第一个参数是clockConstructot类型 所以会检查AnalogClock是否符合构造函数签名'

let digital = createClock(DigitalCLock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

'使用类表达式的时候'
interface ClockConstructor {
  new (hour: number, minute: number)
}
interface ClockInterface {
  tick()
}
const Clock: ClockConstructor = class Clock implements ClockInteface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}
