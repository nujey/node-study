/**
 * @param {boolean} 布尔
 * @param {number} 数值
 * @param {string} 字符串
 * @param {null} null
 * @param {undefined} undefined
 */

 let isStatus: boolean = false
 let number: number = 1
 let number1: number = undefined
 
 let str: string = '111'
 let str1: string = null
 // javascript 没有空值的概念 ts中用void来表示没有任何返回值的函数
 // 和void的区别就是: undefined和null 是所有类型的子类型,undefined类型的变量 可以赋值给别的类型的变量
 // 但是void类型的变量不能赋值给别的类型的变量
 function testFun(): void {
   console.log(111)
 }
