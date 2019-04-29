'use strict'
const Koa = require('koa')
const path = require('path')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const resourse = require('koa-static')

const app = new Koa()
const staticPath = './static'

app.use(bodyParser())

console.log(path.join(__dirname, staticPath))

app.use(resourse(
  path.join(__dirname, staticPath)
))

router.get('/', async (ctx) => {
  ctx.body = `<form action="/signin" method="post">
                name: <input name="name" value="111"/>
                pass: <input name="pass" value="222"/>
                <input type="submit" value="提交"/>
              </form>`
})

router.post('/signin', async (ctx, next) => {
  let name = ctx.request.body.name || '',
      password = ctx.request.body.pass || ''
      ctx.body = {
        name: name,
        password: password
      }
})

router.get('/index', async (ctx, next) => {
  let url = ctx.url
  console.log(ctx.request.query, ctx.query)
  let req_query = ctx.request.query
  let req_querystring = ctx.request.querystring

  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

// app.use(async (ctx, ) => {
//   let url = ctx.url
//   ctx.body = url
// })

// koa-bodyparser 必须在router之前被注册到app对象上
app.use(router.routes())

app.listen(3333)

console.log('koa-router服务')
