import { jQ, AjaxSetting } from './声明文件'
function sayHello(person: string) {
  return 'Hello, ' + person
}
let user = 'Tom'

let setting: AjaxSetting = {
  method: 'POST'
}

jQ.ajax('/api')
