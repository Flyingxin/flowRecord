<template>
  <div>
    <h1>seuif97</h1>
    <h1>详情请看控制台</h1>
  </div>
</template>

<script>
import Module from "../utils/seuif97.js";
export default {
  name: "seuif97",
  mounted() {
    // emcc seuif97.c -o seuif97.js -s EXPORTED_FUNCTIONS="['_test']"
    console.log(Module);
    // 初始化之前要在seuif97.js最底下写下 export default Module
    // 初始化模块
    Module.onRuntimeInitialized = function () {
      Module._test();
      // let a = Module._seupt(2.5,5.6,1)
      // console.log(a);
    };
  },
};
</script>

<style>
</style>