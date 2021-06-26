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
    /* 
      async 和 await 是使用同步代码实现异步效果
      async代表的是一个异步函数,async返回的是promise
      async返回不看return 必然返回的是promise
      async 函数返回的promise是成功还是失败 看return
        return的结果代表promise是成功还是失败
         1.如果return的是一个非promise的值 代表async函数的promise成功
            成功的结果是return的结果
         2.如果返回的是一个成功的 promise 代表async的函数返回的promise也是成功的(他们不是同一个promise)
            成功的结果是return的 promise 的成功的结果resolve
         3.如果返回的是失败的promise 代表async函数返回的promise是失败的
            失败的原因是return的 promise 失败的原因reject
         4.如果throw出错误,代表async函数返回的是promise是失败的
            失败的结果是throw抛出的错误的原因   throw new Error('嘿嘿')
         
     */
    async searchAjax(q) {
      this.isFirst = false
      this.isLoading = true
      try {
        //await右侧为promise返回的是成功promise的值  错误直接跳到catch中并把失败的promise返回值给catch
        const response = await Axios({
          method: 'get',
          // url: 'https://api.github.com/search/users?${{q=q}}',
          url: 'https://api.github.com/search/users',
          params: {
            q,
          },
        })
        console.log(response)
        this.isLoading = false
        /* 
              forEach map filter some every reduce  都会暗含遍历
              功能:加工函数 根据已有的数据创建一个新的数组,新数组当中每一项和老数组当中每一项有关系
              参数:回调函数(item,index,arr) 每个数组项都会执行这个回调函数,返回的是一个新的项,放在新数组当中
              返回值:把每一项都返回的新数组返回
            */
        this.users = response.data.items.map((item) => ({
          //返回一个对象
          username: item.login, //用户名
          avatar: item.avatar_url, //头像地址
          urlStr: item.html_url, //用户地址
        }))
        console.log(this.users)
      } catch (error) {
        console.log('错了')
        this.isLoading = false
        this.errMsg = error.message
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
