<!-- 嵌套路由使用方法 -->
<template>
  <div id="appnew">
    <h2>hello world!</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.path)
  }
}
</script>

<style>
</style>
