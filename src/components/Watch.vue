<template>
  <div id="Watch">
    <h2 class="title">监听属性：</h2>
    <div class="box">
      <span>num的值：{{num}}</span>
      <el-button @click="num++">计数器</el-button>
    </div>
    <div class="form_line">
      <label>用户名:</label>
      <input v-model="info.name" placeholder="请输入用户名" />
    </div>
    <div class="form_line">
      <label>密码:</label>
      <input v-model="info.passw" placeholder="请输入密码" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Watch",
    data(){
      return {
        num: 0,
        info: {
          name: '',
          passw: ''
        }
      }
    },
    watch: {
      num(curVal, oldVal){
        alert('num的值从' + oldVal + '变为' + curVal);
      },
      info: {// 这监听对象值的改变 和上面的不一样。
        handler(curVal, oldVal){
          console.log(curVal);
        },
        deep: true
      }
    },
    methods: {

    },

  }
</script>

<style scoped>
  .title{
    color: #585858;
    margin-bottom: 10px;
  }
  .box{
    margin-bottom: 10px;
  }
  .form_line input{
    height: 30px;
    margin-bottom: 10px;
    padding: 0 5px;
  }
</style>
