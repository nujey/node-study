
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  return arg
}

loggingIdentity({ length: 10, value: 3 })

var desc = '在泛型中使用类型参数'

function getProperty<T, K extends keyof T>(obj: T, key: K){
  return obj[key]
}
let x = { a: 1, b: 2, c: 3 }

getProperty(x, "a")

desc = '在泛型中使用类类型'
function create<T>(c: { new(): T }): T {
  return new c()
}

class BeeKeeper {
  hasMask: boolean
}
class ZooKeeper {
  nametag: string
}
class Animal {
  numLegs: number
}
class Bee extends Animal {
  keeper: BeeKeeper
}
class Lion extends Animal {
  keeper: ZooKeeper
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}
createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask
