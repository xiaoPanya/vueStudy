<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span>
      <span>已完成{{ finish }}</span> /全部 {{ allT }}</span
    >
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['todoS', 'updateAll', 'deleteAll'],
  data() {
    return {}
  },
  computed: {
    allT() {
      return this.todoS.length
    },
    finish() {
      // return this.todoS.filter(item => item.isOver).length//自己想的

      //功能统计数组当中符合条件的的结果(数值或者其他类型
      //参数 回调函数(prev , current ,index arr)  统计的初始值
      return this.todoS.reduce((pre, current) => {
        //这个方法暗含遍历,会拿数组的每一项执行回调函数
        //第一次执行回调的时候,pre的值就是你给的初始值
        //第一次执行完回调后返回pre的值,返回给了第二次执行时候的初始值

        //最后一次执行返回的pre的值因为没有下一次了,这个值作为reduce返回值返回
        if (current.isOver) {
          pre++
        }
        return pre
      }, 0)
    },
    isCheckAll: {
      get() {
        //自己想的
        /* if (this.todoS.every(item => item.isOver)) {
          return true
        } else {
          return false
        } */
        return this.allT === this.finish && this.allT > 0
      },
      set(val) {
        //自己想的
        /* for (let i = 0; i < this.todoS.length; i++) {
          this.todoS[i].isOver = val
        } */
        this.updateAll(val)
      }
    }
  },
  methods: {
    deleteA() {
      this.deleteAll()
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
