'use strict'
const assert = require('assert')

const { message } = new assert.AssertionError({
  message: '错误消息',
  actual: 'actual', // 错误实际值
  expected: 'expected', // 期望值
  operator: 'operator', // 传入的运算符值
})