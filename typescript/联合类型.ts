['表示取值可以为多种类型的一种']

let myTest: string | number;

function t(something: string | number):string {
  return something.toString()
}
