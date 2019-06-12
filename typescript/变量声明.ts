
/**
 * @author let
 */
desc = '在一个嵌套作用域里引入一个新名字的行为称作屏蔽'

function sumMatrix(matrix: number[][]) {
  let sum = 0
  for(let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i]
    for(let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i]
    }
  }
  return sum
}

desc = '块级作用域变量的获取'
function theCityThatAlwaysSleeps() {
  let getCity;
  if (true) {
    let city = 'Seattle'
    getCity = function() {
      return city
    }
  }
  return getCity()
}

for (let i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i)
  }, 100 * i)
}

/**
 * @author const
 */

desc = '赋值后不能再被改变 与let的作用域规则相同 但是不能重新赋值'

