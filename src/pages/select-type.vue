<template>
  <div>
    <el-button class="button" size="large" @click="navigateTo('/exportWord2')">xxx1</el-button>
    <el-button class="button" size="large" @click="navigateTo('/seuif97')">xxx2</el-button>
    <el-button class="button" size="large" @click="navigateTo('/exportWord2')">xxx3</el-button>
  </div>
</template>

<script>
export default {
  name: "selectType",
  methods: {
    // 跳转
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.button {
  margin-top: 100px;
  width: 200px;
  height: 200px;
}
</style>