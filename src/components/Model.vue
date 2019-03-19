<template>
  <div id="Model">
    <h2 class="title">表单数据绑定</h2>
    <div class="box">
      <p class="p-box">单个复选框：</p>
      <input type="radio" value="html" id="html" v-model="picked"/>
      <label for="html">html</label>
      <input type="radio" value="css" id="css" v-model="picked"/>
      <label for="css">css</label>
      <div>选中的值为：{{picked}}</div>
    </div>

    <div class="box">
      <p class="p-box">多个复选框：</p>
      <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
      <label for="runoob">Runoob</label>
      <input type="checkbox" id="google" value="Google" v-model="checkedNames">
      <label for="google">Google</label>
      <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
      <label for="taobao">taobao</label>
      <br>
      <span>选择的值为: {{ checkedNames }}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Model",
    data(){
      return {
        picked: 'html',
        checkedNames: []
      }
    }
  }
</script>

<style scoped>
.title{
  color: #585858;
  margin-bottom: 10px;
}
  .box{
    margin-bottom: 10px;
    line-height: 1.8;
  }
</style>
