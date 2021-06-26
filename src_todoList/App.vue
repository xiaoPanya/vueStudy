<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo" /> -->
      <Header @addTodo="addTodo" />
      <!-- <List :todoS="todoS" :updateOne="updateOne" :deleteOne="deleteOne" /> -->
      <!-- 全局事件总线和PubSubJS -->
      <List :todoS="todoS" />
      <Footer :todoS="todoS" :updateAll="updateAll" :deleteAll="deleteAll" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import List from '@/components/List'
import PubSub from 'pubsub-js'
export default {
  name: '',
  components: { Header, Footer, List }, //注册组件
  //全局事件总线的使用
  mounted() {
    //挂载后
    this.$bus.$on('deleteOne', this.deleteOne) //在App当中找到总线然后给总线绑定一个事件'deleteOne'

    //消息订阅
    PubSub.subscribe('updateOne', this.updateOne)
  },
  //data当中不能出现this
  data() {
    return {
      /* todoS: [
        { id: 1, content: '抽烟', isOver: false },
        { id: 2, content: '喝酒', isOver: false },
        { id: 3, content: '打牌', isOver: true },
        { id: 4, content: '痘痘', isOver: false }
      ] */
      todoS: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }
  },
  //自己想的
  /* created() {
    if (localStorage.getItem('TODOS_KEY')) {
      let TODOS_KEY = localStorage.getItem('TODOS_KEY')
      this.todoS = JSON.parse(TODOS_KEY)
    }
  }, */
  watch: {
    todoS: {
      /* 深度监视
          一般监视的是数组的数据,但是数组内部对象的数据监视不到
          深度监视可以监视到内部对象的数据 */
      deep: true,
      /* 只要todoS数据发生变化,就把变化的数据储存到,localStorage当中
        localStorage是前端本地储存的方法,是一个小型的数据库,储存到localStorage当中的东西都会自动转换为字符串
        localStorage当中的4个Api
          localStorage.setItem('键',值)-->储存数据
          localStorage.getItem('键',值)-->获取数据   -->能获取就获取,获取不到返回null
          localStorage.deleteItem('键',值)-->删除数据
          localStorage.clear()-->清空localStorage的所有储存
           */
      handler(newVal, oldVal) {
        localStorage.setItem('TODOS_KEY', JSON.stringify(newVal))
      }
    }
  },
  methods: {
    addTodo(obj) {
      this.todoS.unshift(obj)
    },
    //msg是消息订阅和发布 传递过来的消息名称,即使不用也要占位
    updateOne(msg, index) {
      //PubSub必须写第一个参数msg
      console.log(msg)
      this.todoS[index].isOver = !this.todoS[index].isOver
    },
    updateAll(val) {
      this.todoS.forEach(item => {
        item.isOver = val
      })
    },
    deleteOne(index) {
      this.todoS.splice(index, 1)
    },
    deleteAll() {
      //把没有勾选的过滤出来,把原数组修改为过滤完成的数据
      this.todoS = this.todoS.filter(item => !item.isOver)
    }
  }
}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
