<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/Layout/header.vue'
import Main from '@/Layout/main.vue'
import Footer from '@/Layout/footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
}
</style>
