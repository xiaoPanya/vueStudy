import Vue from 'vue';
import App from '@/App';
import store from '@/store';
Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  el: '#app',
  store,
  render: h => h(App),
  /*  render: function(h) {
    h(App)
  } */
});
