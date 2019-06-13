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
interface ClockCon
