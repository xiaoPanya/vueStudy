<template>
  <div>
    <el-button round>圆角按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <el-button type="success" round>成功按钮</el-button>
    <el-button type="info" round>信息按钮</el-button>
    <el-button type="warning" round>警告按钮</el-button>
    <el-button type="danger" round>危险按钮</el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button></el-button>
    <el-slider v-model="value"></el-slider>
    <el-switch v-model="model" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      value: 10,
      model: true,
    }
  },
}
</script>

<style scoped></style>
