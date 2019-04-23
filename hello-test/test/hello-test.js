'use strict'

const assert = require('assert')

const sum = require('../hello')

// mocha BDD-style测试 
describe("#hello.js", () => {
  describe('#sum()', () => {
    before(function() {
      console.log('before')
    })
    after(function() {
      console.log('after')
    })
    beforeEach(function() {
      console.log('beforeEach')
    })
    afterEach(function() {
      console.log('afterEach')
    })
    // 一次只测一种情况，且测试代码要非常简单
    it('sum() should return 0', () => {
      assert.strictEqual(sum(), 0)
    })

    it('sum(1) should return 1', () => {
      assert.strictEqual(sum(1), 1)
    })

    it('sum(1, 2) should return 3', () => {
      assert.strictEqual(sum(1, 2), 3)
    })
  })
})
