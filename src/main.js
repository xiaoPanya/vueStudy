//局部禁用当前类型的错误(只禁用当前文件的这个类型的报错)
// /* eslint-disable no-unused-vars*/
// var a = 10;
import Vue from 'vue' //这个默认引入的是的runtime版本
// import Vue from 'vue/dist/vue.esm.js' //这个版本带解析
import App from '@/App'
// You are using the runtime-only build of Vue where the template compiler is not available.
//Either pre-compile the templates into render functions, or use the compiler-included build.
Vue.config.productionTip = false

//我们现在导入的版本的vue是一个runtime-only版本的vur  这个版本的vue不带解析器
/* new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
}) */

new Vue({
  el: '#app',
  render: h => h(App) //这个函数和我们上面写的功能差不多
  //1.定义注册了App   2.使用了vue这个组件  3.多了一件事情就是寻找解析器的loader
})

//使用render函数为什么就可以使用runtime.vue的版本呢

// 以后我们要使用的是下面这个
//下面这个打包体积小
