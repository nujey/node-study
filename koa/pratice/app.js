'use strict'

const Koa = require('koa')
const fs = require('fs')

const app = new Koa()

/**
 * 使用promise封装异步读取文件方法
 */
function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./app/view/${page}`
    fs.readFile(viewUrl, "utf-8", (err, data) => {
      if(err) {
        reject(err)
      } else {
        console.log(data)
        resolve(data)
      }
    })
  })
}
/**
 * 根据URL获取HTML内容
 */
async function route(url) {
  let view = '404.html'
  switch(url) {
    case '/':
      view = 'home.html'
      break
    case '/index':
      view = 'home.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    default:
      break
  }
  let html = await render(view)
  return html
}

app.use(async (ctx) => {
  let url = ctx.path
  let html = await route(url)
  ctx.body = html
})
// app.use(async (ctx, next) => {
//   console.log(`${ctx.request.method} ${ctx.request.url}`)
//   await next()
// })

// app.use(async (ctx, next) => {
//   const start = new Date().getTime()
//   await next()
//   const ms = new Date().getTime() - start
//   console.log(`Time: ${ms}ms`)
// })

// app.use(async (ctx, next) => {
//   console.log(ctx.path === ctx.url)
//   if (ctx.request.path.includes('index')) {
//     ctx.response.body = 'index page'
//   } else {
//     await next()
//   }
// })

// app.use(async (ctx, next) => {
//   await next()
//   // console.log(ctx)
//   // 设置response的Content-Type
//   ctx.response.type = 'text/html'
//   // 设置response的内容
//   ctx.response.body = '<h1>Hello, koa2</h1>'
// })

app.listen(3000)
console.log('app started at part 3000...')
