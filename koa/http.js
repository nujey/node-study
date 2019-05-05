'use strict'

const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticPath = require('koa-static')
const router = require('./router')

const app = new Koa()

// 解析post中body体
app.use(bodyParser())

// 静态资源获取
const staticpath = './static'
app.use(staticPath(
  path.join(__dirname, staticpath)
))

//路由模块
router(app)

// 服务监听
app.listen(3000, () => {
  console.log('启动')
})
