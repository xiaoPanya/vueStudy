import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);
const state = { isFirst: true, isLoading: false, errMsg: '', users: [] };
const mutations = {
  //请求中
  REQUESTING(state) {
    state.isFirst = false;
    state.isLoading = true;
  },
  //请求成功
  REQUESTSUCCESS(state, users) {
    state.isLoading = false;
    state.users = users;
  },
  REQUESTFAILED(state, error) {
    state.isLoading = false;
    state.errMsg = error.message;
  },
};
const actions = {
  //第一个参数必须是context,就算不用也要占位  第二个参数是传递进来的参数
  async searchAjax({ commit, state }, q) {
    commit('REQUESTING');
    try {
      const response = await Axios({
        method: 'get',
        // url: 'https://api.github.com/search/users?${{q=q}}',
        url: 'https://api.github.com/search/users',
        params: {
          q,
        },
      });
      console.log(response);
      const users = response.data.items.map(item => ({
        username: item.login, //用户名
        avatar: item.avatar_url, //头像地址
        urlStr: item.html_url, //用户地址
      }));
      commit('REQUESTSUCCESS', users);
      console.log(state.users);
    } catch (error) {
      console.log('错了');
      commit('REQUESTSUCCESS', error);
    }
  },
};
const getters = {};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
