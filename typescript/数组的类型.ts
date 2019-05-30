let a = [
  '类型+方括号表示法',
  '单一类型',
  '联合类型'
]
let testArr: number[] = [1, 2, 3, 4]

let testArr1: (number | string)[] = [1, 2, '333']

let b = [
  '数组泛型',
  '接口表示数组'
]

let testArr2: Array<number> = [1,2,3]

interface NumberArray {
  [index: number]: number
}
let testArr3: NumberArray = [1, 2, 3, 4] // 只要index的类型是number，值的类型必须是number

let list: any[] = ['1', 2, {a: 'a'}]
