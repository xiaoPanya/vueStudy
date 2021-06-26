import Vue from 'vue';
import App from '@/App';
// 完整引入elementUi
// import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' //引入css
// 全局引入并注册组件库中定义好的各个组件
// Vue.use(ElementUi)

// 按需引入elementUi
import { Button, Slider, Switch } from 'element-ui';
// Vue.component(Button.name, Button) // 组件全局注册的方式
Vue.use(Button); //自定义插件的引入方式
Vue.use(Slider);
Vue.use(Switch);

/* 
element ui 当中的组件分为两类:按使用方式区分 组件标签的形式组件  和 js代码形式的组件
*/

Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  el: '#app',
  render: h => h(App),
});
