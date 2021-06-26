<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todoS" :key="todo.id" :todo="todo" :index="index"></Item
    ><!-- :deleteOne="deleteOne" :updateOne="updateOne"这个用全局事件总线代替了   和PubSubJS -->
  </ul>
</template>

<script>
import Item from '@/components/Item'

export default {
  name: '',
  components: { Item },
  props: ['todoS'] //'deleteOne','updateOne'
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
