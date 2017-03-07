<template>
  <div id="appnew">
    <img src="../assets/images/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from '../components/Hello'

export default {
  name: 'home',
  components: {
    Hello
  },
  mounted(){
    // setTimeout(()=>{
    //  this.$router.push('A');
    // },3000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
