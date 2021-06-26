import App from '@/App'
import Vue from 'vue'
//4.将暴露出去的store的实例对象引入到Vue的配置文件当中使用
import store from '@/store' //如果是一个文件夹自动引入index.js文件的

Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
  // store: store//简写
  store //store在配置对象当中配置使用,每个组件当中都可以通过this.$store获取到我们这个对象
  //不要再组件中国直接使用this.$store.因为不安全,找不到是谁修改的
})
