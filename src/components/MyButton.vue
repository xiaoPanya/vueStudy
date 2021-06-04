<template>
  <div>
    <p v-text="msg"></p>
    <button @click="count++">爱了{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      msg: '赵丽颖',
      count: 0,
    };
  },
};
</script>

<style scoped>
p {
  background: red;
}
</style>
