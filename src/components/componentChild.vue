<template>
  <div id="componentChild">
    <h3>我是子组件</h3>
    <div>{{fromParent}}</div>
    <el-button @click="toParent">向父组件传递数据</el-button>
    <div>{{str}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      'from-parent': [String]
    },
    name: "componentChild",
    data() {
      return {
        str: '我是子组件向父组件传递的数据！'
      }
    },
    methods: {
      toParent(){
        this.$emit('child-event', this.str);
      }
    }
  }
</script>

<style scoped>
  #componentChild{
    width: 50%;
    min-height: 200px;
    float: right;
    background: #2C3E50;
    padding: 10px;
    color: #fff;
    box-sizing: border-box;
  }
  #componentChild div,
  #componentChild button{
    margin-top: 10px;
  }
</style>
