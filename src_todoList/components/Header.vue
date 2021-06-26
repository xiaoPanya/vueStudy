<!--
 * @Author: your name
 * @Date: 2021-06-07 21:03:14
 * @LastEditTime: 2021-06-12 01:20:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-dome\src\components\Header.vue
-->
<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addContent" v-model="content" />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      content: ''
    }
  },
  /* props: {
    //第二种写法
    //addTodo: Function

    //第三种写法 也是对象,只是比第二种对象显示的更加严格
    addTodo: {
      //这是一个配置对象,他可以限制属性值更多东西
      type: Function,
      required: true //代表必须传
      // default: 10 //默认值是10,不传的话默认值是10
      //他俩值一般只选择其中一个因为冲突
    }
  }, */
  methods: {
    addContent() {
      let content = this.content.trim()
      if (!content) {
        alert('输入的内容不能为空')
        return false
      }
      let id = Date.now()
      let isOver = false
      let obj = { id, content, isOver }
      //props组件通信传递函数数据让子组件调用
      // this.addTodo(obj)
      //事件通信
      this.$emit('addTodo', obj)
      this.content = ''
    }
  }
}
</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
