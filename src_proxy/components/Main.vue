<template>
  <div class="row">
    <h2 v-if="isFirst">欢迎搜索</h2>
    <h2 v-else-if="isLoading">搜索中</h2>
    <h2 v-else-if="errMsg">请求失败 -----{{ errMsg }}</h2>
    <div class="card" v-else v-for="user in users" :key="user.username">
      <a :href="user.urlStr" target="_blank">
        <img :src="user.avatar" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: '',
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: [],
    }
  },
  mounted() {
    this.$bus.$on('searchAjax', this.searchAjax)
  },
  methods: {
    async searchAjax(q) {
      this.isFirst = false
      this.isLoading = true
      try {
        const response = await Axios({
          method: 'get',
          // url: 'http://127.0.0.1:3000/users/info',//跨域了不行
          url: 'http://127.0.0.1:8080/api/users/info', //配置了代理
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
