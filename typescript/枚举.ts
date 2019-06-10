let desc:string = '枚举类型用于取值被限定在一定范围内的场景、比如一周只能有7天、颜色限定为红绿蓝等'

enum Days {Sum, Mon, Tue, Wed, Thu, Fri, Sat}

var Days1;
    (function (Days1) {
      Days1[Days1['Sun'] = 0] = "sun"
      Days1[Days1['Mon'] = 0] = "Mon"
    })(Days1 || (Days1 = {}))

enum Color { Red, Green, Blue = "blue".length }

desc = '如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错'
enum Color1 { Red = 'red'.length, Green, Blue }

desc = '常数枚举'

declare const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let Directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

