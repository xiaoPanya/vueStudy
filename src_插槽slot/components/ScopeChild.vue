<template>
  <div>
    <ul>
      <li v-for="todo in todoS" :key="todo.id">
        <!-- 每一项都在给父亲传递 slot作用域插槽传递-->
        <slot :todo="todo">{{ todo.content }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['todoS'],
}
</script>

<style scoped>
</style>
