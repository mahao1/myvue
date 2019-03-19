<template>
  <div id="app">
    <headbar></headbar>
    <!--其中mode="out-in"是解决切换时页面顶部会出现一段空白。-->
    <transition mode="out-in" enter-active-class="fadeInLeft" leave-active-class="fadeOutRight">
      <router-view class="animated"></router-view>
    </transition>
  </div>
</template>

<script>
  import headbar from './components/header'
  export default {
    name: 'App',
    data(){
      return{}
    },
    components: {
      headbar
    }
  }
</script>

<style>
</style>
