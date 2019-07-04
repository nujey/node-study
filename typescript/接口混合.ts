'一个对象可以同时具有多种类型'

'一个对象可以同时作为函数和对象使用，并且具有额外的属性'

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void
}

function getCounter(): Counter {
  // let counter = <Counter>function(start: number): string { return '' }
  let counter = function(start: number): string { return ' '} as Counter

  counter.interval = 124

  counter.reset = function() {}

  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 123