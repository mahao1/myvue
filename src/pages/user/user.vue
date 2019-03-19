<template>
  <div id="user" class="layout">
    <h1>{{msg}}</h1>
    <div id="app">
      <select v-model="obj.selected" v-for="(obj,key) in selectedArr" @change="select">
        <option v-for="item in obj.optionArr" :value="item.value">{{item.text}}</option>
      </select>
      <p>selectedArr: {{ selectedArr }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    data(){
      return {
        msg: 'user',
        selectedArr: [{
          selected:'a0',
          optionArr:[
            { text: '10', value: 'a0' },
            { text: '20', value: 'b0' },
            { text: '30', value: 'c0' }]
        }],
      }
    },
    methods: {
      //获取当前选中层级
      getCurrentIndex:function(value){
        for(var i=0;i<this.selectedArr.length;i++){
          for(var j=0;j<this.selectedArr[i].optionArr.length;j++){
            if(this.selectedArr[i].optionArr[j].value === value){
              return i
            }
          }
        }
      },
      //模拟添加下一级
      addSelected:function(index){
        this.selectedArr.push({
          selected:'a'+index,
          optionArr:[
            { text: '1'+index, value: 'a'+index },
            { text: '2'+index, value: 'b'+index },
            { text: '3'+index, value: 'c'+index }
          ]
        })
      },
      //去除当前选中层级之后的级数
      removeSelected:function(index){
        if( index < this.selectedArr.length ){
          this.selectedArr.splice(index,this.selectedArr.length)
        }
      },
      select:function(e){
        var current = e.target.value;//获取选中值
        var currentIndex = this.getCurrentIndex(current)+1;//获取当前层级
        this.removeSelected(currentIndex);
        this.addSelected(currentIndex);
      }
    }
  }
</script>

<style scoped>
  @import 'user.css';
</style>
