如果没有明确的制定类型 
那么typeScript会依照类型推论[Type Inference]的规则来推断

let str = 'str'
会被推断为
let str: string = 'str'

如果定义的时候没有赋值,不管后面有没有赋值,那么都会是any