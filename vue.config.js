module.exports = {
  // 5个
  // 入口
  // 出口
  /* module: {
    rules: [
      {
        test: '',
      },
    ],
  }, */
  // plugins
  //  mode: 'development',

  //禁用eslint
  lintOnSave: false,
  devServer: {
    proxy: {
      //就像一个看门狗一样
      //捕获路径中带有/api的请求
      '/api': {
        /* 
          本身8080/api/users/info
          target:代表转换为目标服务器  http://127.0.0.1:3000/api/users/info
          pathRewrite 3000/api/users/info 和真正的路径多了个api需要将路径剁掉  8080/api/users/info   
        */
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/api': '' }, //3000/users/info
        changeOrigin: true //不管改变那个跨域的条件都会转发 ---写不写都无所谓
      }
    }
  }
}
