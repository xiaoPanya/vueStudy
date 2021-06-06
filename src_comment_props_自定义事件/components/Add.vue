<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" v-model="username" placeholder="用户名" />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" v-model="content" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC()">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      username: '',
      content: ''
    }
  },
  // props: ['commentAdd'], //prop接受的数据最终会混到vm身上
  methods: {
    addC() {
      //拿到用户输入的数据
      let { username, content } = this
      if (username.trim() && content.trim()) {
        let id = Date.now()
        //把数据变成一个对象
        let obj = { id, username, content }

        //把数据添加到comments数组当中
        //操作在哪里,操作数据的方法就要在哪里
        //哪里需要操作数据我们是把 操作数据的 方法  传过来.让其调用
        //在这里我们吧App当中操作评论的方法commentAdd传递过来,在Add当中调用
        // this.commentAdd(obj)//props方式

        //自定义事件的触发   分发   调用回调
        this.$emit('AddComment', obj) //obj是传的参数
      } else {
        alert('请输入合法的用户名和内容')
      }
      this.username = this.content = ''
      // this.$off('AddComment')解绑事件
    }
  }
}
</script>

<style scoped></style>
