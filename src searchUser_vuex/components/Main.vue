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
import { mapState } from 'vuex';
export default {
  name: '',
  /*  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: [],
    }
  }, */
  mounted() {
    this.$bus.$on('searchAjax', this.searchAjax);
  },
  computed: {
    ...mapState(['isFirst', 'isLoading', 'errMsg', 'users']),
  },
  methods: {},
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.33%;
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
