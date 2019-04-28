'use strict'
var fn_index = async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
      <p>Name: <input name="name" value="koa"></p>
      <p>Password: <input name="password" type="password"></p>
      <p><input type="submit" value="Submit"></p>
    </form>`
}

var fn_signin = async (ctx, next) => {
  var name = ctx.request.body.name
  var password = ctx.request.body.password
  if (name === 'koa' && password === '123456') {
    ctx.body = `<h1>, ${name}! `
  } else {
    ctx.body = `<h1>Login failed</h1>`
  }
}

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
}
