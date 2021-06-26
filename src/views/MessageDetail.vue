<template>
  <ul class="list-group">
    <li class="list-group-item">message01</li>
    <li class="list-group-item">message02</li>
    <li class="list-group-item">message03</li>
    <li class="list-group-item">message04</li>
    <li>
      {{ msg }}
    </li>
  </ul>
</template>

<script>
export default {
  name: '',
  computed: {
    msg() {
      console.log(this.$router);
      return this.$router;
    },
  },
};
</script>

<style scoped></style>
