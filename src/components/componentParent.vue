<template>
  <div id="componentParent">
    <div class="box">
      <h3>我是父组件</h3>
      <div>{{str}}</div>
      <el-button @click="getChildData">接收子组件传递的数据</el-button>
      <div v-show="flag">{{fromChild}}</div>
    </div>
    <!--child-event是子组件中自定义的方法；parentEvent是触发父组件的方法-->
    <componentChild :from-parent="str" @child-event="parentEvent"></componentChild>
  </div>
</template>

<script>
  import componentChild from './componentChild';
  export default {
    name: "componentParent",
    data(){
      return {
        str: '我是父组件向子组件传递的数据',
        fromChild: '',
        flag: false
      }
    },
    components: {
      componentChild
    },
    methods: {
      parentEvent(data){
        console.log(data);//子组件传递过来的数据
        this.fromChild = data;
      },
      getChildData(){
        this.flag = true;
      }
    }
  }
</script>

<style scoped>
  #componentParent{
    width: 100%;
    min-height: 200px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .box{
    width: 50%;
    min-height: 200px;
    color: #fff;
    float: left;
    padding: 10px;
    background: #3FB783;
    box-sizing: border-box;
  }
  #componentParent h3{
    margin-bottom: 10px;
  }
  #componentParent div,
  #componentParent button{
    margin-top: 10px;
  }
</style>
