'use strict';
const Koa = require('koa')
const path = require('path')
const app = new Koa()

const { uploadFile } = require('./upload')

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
                <h1>koa2 upload demo</h1>
                <form method="POST" action="/upload.json" enctype="multipart/form-data">
                  <p>file upload</p>
                  <span>picName:</span><input name="picName" type="text" /><br/>
                  <input name="file" type="file" /><br/><br/>
                  <button type="submit">submit</button>
                </form>
              `
    ctx.body = html
  } else if (ctx.url === '/upload.json' && ctx.method === 'POST'){
    // 上传文件请求处理
    console.log(ctx)
    let result = { success: false }
    let serverFilePath = path.join(__dirname, 'upload-files')
    console.log(serverFilePath)
    result = await uploadFile(ctx, {
      fileType: 'album',
      path: serverFilePath
    })
  } else {
    ctx.body = '<h1>404!!!</h1>'
  }
})

app.listen(3001, () => {
  console.log('upload-simple server')
})
