<template>
  <div>
    <p>我爱你</p>
    <!-- vue当中的内置组件标签 -->
    <!-- 默认插槽 默认插槽只能有一个-->
    <slot>
      <!-- slot当中的东西是等待父组件使用的时候传递过来的  -->
      <span>嘿嘿</span>
    </slot>
    <!-- 具名插槽 -->
    <slot name="xxx"></slot>

    <slot name="yyy">
      <ul>
        <li>我爱你1(默认)</li>
        <li>我爱你2(默认)</li>
      </ul>
    </slot>

    <!-- 无论是默认插槽,还是具名插槽都可以写东西,也可以不写东西
        如果写了东西,就看你用的时候有没有给slot传递新的东西,如果传递了,slot当中写的东西就被覆盖了
        如果没有给slot传递新的东西,那么默认显示的就是slot当中的东西 -->
    <hr />
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
.bgc {
  color: skyblue;
}
</style>
