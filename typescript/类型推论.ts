'如果没有明确的制定类型' 
'那么typeScript会依照类型推论[Type Inference]的规则来推断'

let str = 'str'
'会被推断为'
let str: string = 'str'

'如果定义的时候没有赋值,不管后面有没有赋值,那么都会是any'

'当需要从几个表达式中推断类型的时候，会使用表达式的类型来推断出一个最合适的通用类型'
let x = [0, 1, null]

'候选类型共享相同的通用类型，但是没有一个类型能作为所有候选类型的类型'
'当候选类型不能使用的时候 我们需要明确的指出类型'

let zoo:Animal[] = [new Rhino(), new Elephant(), new Snake()]

'类型推论可能按照相反的方向进行 上下文归类会发生在表达式的类型与所处的位置相关时候'

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button)
}
