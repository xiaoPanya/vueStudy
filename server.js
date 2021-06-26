const express = require('express')
const app = express()
const port = 3000
/* 
    路径和一个映射的关系叫路由
        如果是路径和函数的路由叫后台路由
        路径和组件之间的路由是前台路由
*/
//这是后台路由  一个路径对应一个函数
app.get('/users/info', (req, res) => {
  //req请求发送过来的   res响应的 要发送过去的
  // res.setHeader('Access-Control-Allow-Origin', '*')//后台上进行跨域设置
  let response = {
    status: 200,
    data: {
      name: '潘增',
      age: 19
    }
  }
  res.send(JSON.stringify(response))
})

app.listen(port, () => {
  console.log('服务器端口3000已经启动了')
})
