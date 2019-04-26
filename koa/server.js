'use strict'
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, ) => {
  let url = ctx.url
  ctx.body = url
})

app.listen(3333)

console.log('koa原生路由服务')
