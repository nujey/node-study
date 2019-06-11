class GeneriNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T
}
let test1 = new GeneriNumber<number>();
  test1.add = function(x, y) {
     return x + y
  }
  test1.zeroValue = 1

