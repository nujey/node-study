'use strict'
const assert = require('assert').strict

const { message } = new assert.AssertionError({
  // message: '错误消息',
  actual: 1, // 错误实际值
  expected: 2, // 期望值
  operator: 'strictEqual', // 传入的运算符值
})

try {
  assert.strictEqual(1, 2)
} catch(err) {
  assert(err instanceof assert.AssertionError)
}

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5])
assert.ifError(null)

const date = new Date()
const object = {}
const fakeDate = {}

Object.setPrototypeOf(fakeDate, Date.prototype)

assert.deepStrictEqual(NaN, NaN)

assert.deepStrictEqual(new Number(1), new Number(2))

assert.deepStrictEqual(new String('foo'), Object('foo'))

assert.deepStrictEqual(object, fakeDate)

assert.deepStrictEqual({a: 1}, {a: '1'})
assert.notDeepStrictEqual({a: 1}, {a: '1'})
