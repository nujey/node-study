'use strict'

const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`)
  await next()
})

app.use(async (ctx, next) => {
  const start = new Date().getTime()
  await next()
  const ms = new Date().getTime() - start
  console.log(`Time: ${ms}ms`)
})

app.use(async (ctx, next) => {
  await next()
  // console.log(ctx)
  // 设置response的Content-Type
  ctx.response.type = 'text/html'
  // 设置response的内容
  ctx.response.body = '<h1>Hello, koa2</h1>'
})

app.listen(3000)
console.log('app started at part 3000...')
