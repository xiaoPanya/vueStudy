<template>
  <div>
    <Header></Header>
    <div class="container">
      <!-- props -->
      <!-- <Add :commentAdd="commentAdd"></Add> -->
      <!-- 自定义事件  麻烦写法 -->
      <Add ref="aa"></Add>
      <!-- 自定义事件  简单写法  以后常用-->
      <!-- <Add @AddComment="commentAdd"></Add> -->

      <List :coms="comments" :commentDel="commentDel"></List>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
import Add from '@/components/Add'

export default {
  name: '',
  components: {
    Header,
    List,
    Add
  },
  data() {
    return {
      comments: [
        { id: 1, content: 'vue不错', username: '赵丽颖' },
        { id: 2, content: 'vue可以', username: '戚薇' },
        { id: 3, content: 'vue牛逼', username: '杨幂' }
      ]
    }
  },
  //挂载后   自定义事件的麻烦写法
  mounted() {
    //对Add组件对象绑定自定义事件
    this.$refs.aa.$on('AddComment', this.commentAdd)
    // this.$refs.aa.$once('AddComment', this.commentAdd);//once绑定的事件只绑定一次
  },
  methods: {
    commentAdd(comment) {
      this.comments.unshift(comment)
    },
    //删除评论的
    commentDel(index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style scoped></style>
