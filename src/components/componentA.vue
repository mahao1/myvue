<template>
  <div id="componentA">
    <h3>{{title}}</h3>
    <el-button @click="emitToB">点击按钮传递数据给兄弟组件B</el-button>
    <div v-show="flag">{{toB}}</div>
    <el-button @click="setSession">设置session缓存</el-button>
    <div v-show="flag2">{{orderData}}</div>
  </div>
</template>

<script>
  import eventBus from '../assets/js/eventBus';//引入eventBus其实就是引入另一个vue实例
  export default {
    name: "componentA",
    data(){
      return {
        title: '我是componentA组件',
        toB: '我是组件A传递给组件B的数据',
        flag: false,
        flag2: false,
        orderData: {
          'orderId': 123,
          'price': 88
        }
      }
    },
    methods: {
      emitToB(){
        //eventBus.$emit(方法名, 传输的数据)
        eventBus.$emit('eventFromA', this.toB);
        this.flag = true;
      },
      setSession(){
        // const orderData = { 'orderId': 123, 'price': 88 }
        sessionStorage.setItem('sessionA', JSON.stringify(this.orderData));
        this.flag2 = true;
      }
    }
  }
</script>

<style scoped>
#componentA{
  width: 50%;
  min-height: 200px;
  float: left;
  background: #3FB783;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
#componentA h3{
  margin-bottom: 10px;
}
#componentA div,
#componentA button{
  margin-top: 10px;
}
</style>
