 '对值所具有的结构进行类型检查，鸭式辩型法 结构性子类型化'

 function printLabel(labeledObj: { label: string }) {
   console.log(labeledObj.label)
 }

 let myObj = { size: 10, label: 'size 10' }

 printLabel(myObj)


//////////////////////
'接口好比名字，用来描述要求'
interface LabeledValue {
  label: string
}

function printLabel2(labeledObj: LabeledValue) {
  console.log(labeledObj.label)
}

printLabel2(myObj)

'类型检查器不会检查属性的顺序，只要相应的属性存在并且类型也是对的就可以'

/////
'可选属性'
'接口里面的属性不全都是必需的  需要在不同条件下存在 即给函数传入的参数对象中部分属性赋值'

interface SquareConfig {
  color?: string
  width?: number
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({ color: 'black' })

////
'只读属性  只在刚刚创建的时候修改其值 readonly来指定只读属性'
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }

let a: number[] = [1, 2, 3, 4]
let aa: ReadonlyArray<number> = a

'把readonly赋值给一个普通数组的时候也是不可以的 a = aa' + '可以使用类型断言'
 a = aa as number[]

 'readonly' + '当作一个属性的时候是只读'
 'const' + '当作一个变量的时候，需要时const'

'函数类型'
'接口表示函数类型，我们需要一个调用签名'
'参数列表和返回值类型的函数定义 参数列表里的每一个参数都需要名字和类型'

interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc;
  mySearch = function(s: string, sub: string) {
    return 0 > -1
  }
'可索引的类型'
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['a', 'b']

'ts中支持两种索引签名： 字符串 和 数字'
class Animal {
  name: string
}
class Dog extends Animal {
  breed: string
}

interface NotOkey {
  [x: number]: Animal
}
interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray1: ReadonlyStringArray = ['ALice', "Bob"]
myArray1[2] = "Ma"

