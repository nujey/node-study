'对象解构'
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};

let { a: num1, b: num2 } = o

let { a, b }: { a: string, b: number } = o

desc = '结构也能用于函数声明'
type C = { a: string, b?: number }

function f({a, b}: C): void { }