'use strict'

const Koa = require('koa')
const path = require('path')
const router = require('koa-router')()
const staticModule = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')
const { query } = require('../db/async-db')

const TABLENAME = 'sunday'



const app = new Koa()

app.use(bodyParser())
const staticPath = '../static'

app.use(staticModule(
  path.join(__dirname, staticPath)
))

async function selectAllData(sql) {
  // let sql = `SELECT * FROM ${tableName}`
  // console.log(sql)
  let dataList = await query(sql)
  return dataList
}

// cookie 操作
router.get('/index', async (ctx) => {
  ctx.cookies.set(
    'cid',
    'Hola!',
    {
      domain: 'localhost', // 写cookie所在的域名
      path: '/index', // 写cookie锁在的所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2020-01-01'), // cookie失效时间
        httpOnly: false, // 是否只用于http请求中获取
        overwrite: false // 是否允许重写
    }
  )
  ctx.body = 'cookie is ok'
})

// 数据库获取到的数据直接渲染到页面上
router.get('/mysql', async (ctx) => {
  const tableName = ctx.request.query.name ? ctx.request.query.name : ''
  const id = ctx.query.id
  if (tableName === '') {
    throw ('表不存在啊')
  } else {
    let sql = `SELECT * from ${tableName} WHERE id = ${id}`
    await selectAllData(sql).then(res => {
      console.log(res)
      ctx.body = `${res[0].id} : ${res[0].name}`
    })
  }
})

// 前后分离的接口 查询接口
router.get('/getData', async (ctx) => {
  let sql = ctx.request.query.id ? `SELECT * FROM ${TABLENAME} WHERE id = ${ctx.request.query.id}` : 
                                   `SELECT * FROM ${TABLENAME}`
  await selectAllData(sql).then(res => {
    ctx.body = {
      status: true,
      code: '200',
      result: {
        id: ctx.request.query.id,
        list: res
      }
    }
  })
})

// 给数据库新增一条数据
router.post('/addData', async (ctx) => {
  if (!ctx.request.body.name) {
    ctx.body = {
      status: false,
      code: '5001',
      result: {},
      message: '名称不能为空'
    }
    return false
  } else {
    const date = new Date().toJSON().slice(0, 10)
    let sql = `INSERT INTO ${TABLENAME}(name, age, time) VALUES ('${ctx.request.body.name}', '12', '${date}')`
    await selectAllData(sql).then(res => {
      ctx.body = {
        status: false,
        code: '200',
        result: {},
        message: '添加成功'
      }
    })
  }
})
// 删除一条数据
router.post('/removeDate', async (ctx) => {
  if (!ctx.request.body.id) {
    ctx.body = {
      status: false,
      code: '5001',
      result: {},
      message: 'id不能为空'
    }
    return false
  } else {
    let sql = `DELETE FROM ${TABLENAME} WHERE id='${ctx.request.body.id}'`
    await selectAllData(sql).then(res => {
      ctx.body = {
        status: false,
        code: '200',
        result: {},
        message: '删除成功'
      }
    })
  }
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('cookie server')
})
// 配置存储session的信息的mysql
// let store = new MysqlSession({
//   user: 'root',
//   password: 'abc123',
//   database: 'koa_demo',
//   host: '127.0.0.1'
// })

// // 存放sessionId的cookie的配置
// let cookie = {
//   maxAge: ''
// }

// // 使用session中间件
// app.use(session({
//   key: 'SESSION_ID',
//   store: store,
//   cookie: cookie
// }))

// app.use(async (ctx) => {
//   if (ctx.url === '/set') {
//     ctx.session = {
//       user_id: Math.random().toString(36).substr(2),
//       count: 0
//     }
//     ctx.body = ctx.session
//   } else {
//     ctx.session.count = ctx.session.count + 1
//     ctx.body = ctx.session
//   }
// })

// app.listen(3000, () => {
//   console.log('cookie server')
// })
