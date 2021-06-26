<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false" :class="{ myColor: isShow }">
    <label>
      <input type="checkbox" :checked="todo.isOver" @click="updateO" />
      <!-- checkbox的两种用法v-model
      1.多个复选框一组,那么此时复选框需要填写直接的value值,最终收集value值到一个数组当中
      2.一个复选框,此时不需要写value值,v-model此时操作的是复选框的checkout值-->
      <!-- <input type="checkbox" v-model="something" /> -->

      <!-- 自己研究的 -->
      <!-- <input type="checkbox" v-model="todo.isOver" /> -->
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteO">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: '',
  //第二种写法可以写一个对象,可以对传递过来的属性值类型进行限制
  props: {
    todo: Object,
    index: {
      type: Number
      // default: 0, //传递过来了就拿传递的值,如果没有传值就默认值0
      // required: true //必须传
    }
    // updateOne: Function //更新isOver的值---PubSubJS代替了
    //deleteOne: Function //删除---全局事件总线代替了
  },
  data() {
    //显示不显示
    return { isShow: false }
  },
  //计算   结合上面第二种写法
  computed: {
    something: {
      get() {
        return this.todo.isOver
      },
      set(val) {
        this.todo.isOver = val
      }
    }
  },
  //方法
  methods: {
    updateO() {
      // this.updateOne(this.index)
      PubSub.publish('updateOne', this.index)
    },
    deleteO() {
      // this.deleteOne(this.index)//全局事件组件代替了
      this.$bus.$emit('deleteOne', this.index) //这是全局事件主线
    }
  }
}
</script>

<style scoped>
.myColor {
  background: skyblue;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
  /* display: none; */
}
/* li:hover {
  background: skyblue;
}
li:hover button {
  display: block;
} */

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
