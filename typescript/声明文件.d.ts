// let a = {
//   a: 'declare var 声明全局变量',
//   b: 'declare function 声明全局方法',
//   c: 'declare class 声明全局类',
//   d: 'declare enum 声明全局枚举类型',
//   e: 'declare namespace 声明含有子属性的全局对象',
//   f: 'interface和type声明全局类型',
//   g: 'export 导出变量',
//   h: 'export namespace 导出含有子属性的对象',
//   i: 'export default ES6默认导出',
//   j: 'export = commonjs导出模块',
//   k: 'export as namespace UMD库声明全局变量',
//   l: 'declare global 扩展全局变量',
//   m: ' declare module 扩展模块',
//   n: '/// <reference />三斜线指令'
// }

/// <reference types="sizzle"/>
/// <reference path="jquery.d.ts" />

import * as moment from 'moment' 

declare var jQuery: (selector: string) => any
declare let $:(selector: string) => any
declare const $q:(selector: string) => any

declare function jQuery1(selector: string): any;
declare function jQuery1(domReadycallback: () => any): any

declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string
}

declare enum Directions {
  UP, Down, Left, Right
}

declare namespace jQuery2 {
  function ajax(url: string, setting ?: any): void;
  const version: number;
  class Event {
    blur(eventType: EventType): void
  }
  enum EventType {
    CustomClick
  }
  namespace fn {
    function extend(object: any): void;
  }
}

interface AjaxSetting {
  method?: 'GET' | 'POST',
  data?: any
}
declare namespace jQ {
  function ajax(url: string, setting?: AjaxSetting): void;
}

declare global {
  interface String {
    prependHello(): string
  }
}

declare module 'moment' {
  export function foo(): moment.CalendarKey
}


export { jQuery, jQuery1, Animal, Directions, AjaxSetting, jQ }