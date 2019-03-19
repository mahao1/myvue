<template>
  <div id="componentB">
    <h3>{{title}}</h3>
    <el-button @click="showEventData">接收组件A传递过来的数据</el-button>
    <div v-show="flag">{{fromA}}</div>
    <el-button @click="getSession">获取session缓存</el-button>
    <div v-show="flag2">{{dataB}}</div>
  </div>
</template>

<script>
  import eventBus from '../assets/js/eventBus';
  export default {
    name: "componentB",
    data(){
      return {
        title: '我是componentB组件',
        fromA: '',
        flag: false,
        flag2: false,
        dataB: ''
      }
    },
    mounted(){
      this.getEventData();
    },
    methods: {
      getEventData(){
        const that = this;//这个this是项目vue的实例，用that接收，与eventBus的vue区分
        eventBus.$on('eventFromA', function(val){
          // console.log(val);
          that.fromA = val;
          //this.fromA = val;//这个this是eventBus的vue实例
        })
      },
      showEventData(){
        this.flag = true;
      },
      getSession(){
        this.dataB = JSON.parse(sessionStorage.getItem('sessionA'));
        this.flag2 = true;
        // console.log(this.dataB);
      }
    }
  }
</script>

<style scoped>
#componentB{
  width: 50%;
  min-height: 200px;
  float: right;
  background: #2C3E50;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
#componentB h3{
  margin-bottom: 10px;
}
#componentB div,
#componentB button{
  margin-top: 10px;
}
</style>
