//配置vuex的相关文件

//1.安装 npm i vuex -S
//2.引入并使用vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex); //声明使用一下

//---包含多个属性的方法,,不是对象    --->就是储存的数据用的
const state = {
  count: 0,
};
//---也是一个对象是包含多个方法的对象,其实就是用这个里面的方法去直接操作数据的
//这个里面的方法不能包含if for 异步---->是直接操作的
const mutations = {
  //定义改变数据的方法
  //方法名一遍都是大写
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  },
};

//---包含多个方法,这个对象内部的方法是用来和vue当中用户操作去关联的
//这个里面的方法能包含if for 异步---->可以异步操作
// actions没办法直接访问数据 需要先提交到mutations-->在提交到state
const actions = {
  //context上下文对象,本质就是store对象
  iincrement(context) {
    setTimeout(() => {
      context.commit('INCREMENT'); //是mutations里面的.先提交到mutations
    }, 100);
  },
  decrement({ commit }) {
    //利用解构的方式获取commit
    commit('DECREMENT');
  },
  incrementInfoAdd({ commit, state }) {
    if (state.count % 2 == 1) {
      commit('INCREMENT');
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT');
    }, 500);
  },
};

//---getters是一个包含多个方法的对象,这个对象的内部的对应了一个计算属性的get,就是
//  通过state当中的已有数据 计算出来的一个新的想要使用的数据
const getters = {};
//3.向外暴露一个store的实例化对象
export default new Vuex.Store({
  //包含了六个核心概念
  //先讲四个
  state,
  mutations,
  actions,
  getters,
}); //向外暴露一个实例对象  ES6的语法

//4.将暴露出去的store的实例对象引入到Vue的配置文件当中使用
