import Vue from 'vue'
import App from '@/App.vue'
Vue.config.productionTip = false
new Vue({
  //全局
  beforeCreate(){
   Vue.prototype.$bus=this//就是把vm挂载到Vue的原型上，让所有的组件对象都能找到它，进而调用它的$on和$emit
  },
  el: '#app',
  render: h => h(App)
})
