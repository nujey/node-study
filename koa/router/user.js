'use strict'

const router = require('koa-router')();
const { dbQuery } = require("../db")
const TABLENAME = 'sunday'

router.post('/oa/login', async (ctx, next) => {
  let { name, password} = ctx.request.body
  console.log(name, password)
  let sql = `SELECT name, age FROM ${TABLENAME} WHERE name=${name} AND is_delete=0;`
  await dbQuery(sql).then(res => {
    ctx.body = {
      msg: '',
      code: 1000,
      result: res
    }
  })
})

router.get('/name', async (ctx, next) => {
  if (!ctx.request.query.id) {
    ctx.body = {
      msg: 'id不能为空',
      code: 1005,
      result: null
    }
    return false
  }
  let sql = `SELECT * FROM ${TABLENAME} WHERE id = ${ctx.request.query.id}`
  await dbQuery(sql).then(res => {
    console.log(res)
    ctx.body = {
      msg: '',
      code: 200,
      result: res
    }
  })
})

module.exports = {
  user: router
}

// module.exports = router

// module.exports = { router }