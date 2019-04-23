'use strict'
const assert = require('assert')
const fs = require('mz/fs')
const asyncHello = require('../async-test')

describe('#async-test.js', () => {
  // it('test sync function', function(done){
  //   // assert(true)
  //   fs.readFile('../data.txt', function(err, data) {
  //     if(err) {
  //       done(err)
  //     } else {
  //       done()
  //     }
  //   })
  // })
  it('#async with done', (done) => {
    (async function(){
      try {
        let r = await asyncHello()
        assert.strictEqual(r, 15);
        done()
      } catch (err) {
        done(err)
      }
    })()
  })
  //  直接把async 函数当作同步函数来测试
  it('#async function', async () => {
    let r = await asyncHello();
    assert.strictEqual(r, 15)
  })
})
