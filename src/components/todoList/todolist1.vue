<template>
  <div id="todolist1">
    <div class="todolist">
      <h2>todoList</h2>
      <div class="list">
        <h3>添加小目标</h3>
        <input type="text" class="ipt-text" placeholder="输入小目标后，按回车确认" v-model="newItem" @keyup.enter="addItem"/>
        <p>共有<span class="num_color">{{items.length}}</span>个目标，{{noend == 0 ? "全部完成了。" : "已完成"+(items.length-noend)+"个目标，还有"+noend+"个目标未完成。"}}</p>
        <p>
          <input type="radio" name="choseType" class="true" @click="choseList(1)" checked/><label>所有目标</label>
          <input type="radio" name="choseType" @click="choseList(2)"/><label>已完成目标</label>
          <input type="radio" name="choseType" @click="choseList(3)"/><label>未完成目标</label>
        </p>
      </div>
      <ul class="list_ul">
        <li class="li1" v-for="(item, index) in newList" :key="index" :class="{'eidting': curIndex === index}">
          <div>
            <span class="type-span" @click="changeState(index)" :class="{'status-end': item.state}"></span>
            <span @dblclick="curIndex=index">{{item.content}}</span>
            <span class="close" @click="deleteItem(item)">x</span>
          </div>
          <input type="text" class="text2" v-model="item.content" @blur='edited' @focus='editBefore(item.content)' @keyup.esc='cancelEdit(item)'/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "todolist1",
    data(){
      return{
        newItem: "",
        items: [
          {
            content: 'html',
            state: false
          },
          {
            content: 'css',
            state: false
          },
          {
            content: 'javascript',
            state: false
          }
        ],
        newList: [],
        curType: 0,
        curIndex: '',
        beforeEditText: ''
      }
    },
    computed: {
      noend(){
        return this.items.filter(item=>{
          return !item.state;//找到state为false
        }).length;
      }
    },
    mounted(){
      //初始化，把prolist赋值给newList。默认显示所有目标
      this.newList = this.items;
    },
    methods: {
      //将输入框的内容添加到列表中
      addItem(){
        this.items.push({
          content: this.newItem,
          state: false
        });
        this.newItem = "";
      },
      choseList(type){
        this.curType = type;
        // console.log(this.curType);
        switch(type){
          case 1: this.newList = this.items;
            break;
          case 2: this.newList = this.items.filter(item=>{
            return item.state;//找到status为true的
          });
            break;
          case 3: this.newList = this.items.filter(item=>{
            return !item.state;//找到status为false的
          });
            break;
        }
      },
      //改变列表元素状态
      changeState(index){
        this.newList[index].state = !this.newList[index].state;
        //更新数据
        this.choseList(this.curType);
      },
      //删除列表元素
      deleteItem(item){
        //获取当前索引
        var index = this.newList.indexOf(item);
        // console.log(index);
        //根据索引，删除数组某一项
        this.items.splice(index, 1);
        this.choseList(this.curType);
      },
      //修改前
      editBefore(content){
        //记录当前项
        this.beforeEditText = content;
        console.log(this.beforeEditText);
      },
      //修改后
      edited(){
        this.curIndex = '';
        console.log(this.curIndex);
      },
      //取消修改
      cancelEdit(val){
        val.content = this.beforeEditText;
        this.curIndex = '';
      }
    }
  }
</script>

<style scoped>
  @import 'todoList.css';
</style>
