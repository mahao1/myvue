<template>
	<div id="drag">
    <h2>拖动弹框</h2>
		<el-button @click="dialogVisible = true">可拖动弹框</el-button>
		<el-dialog title="提示" :visible.sync="dialogVisible" center id="drag-frame" v-drag>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				dialogVisible: false
			}
		},
		methods:{
      //接受传来的位置数据，并将数据绑定给data下的val
      // greet(val){
      // 	this.val = val;
      // }
    }
  }
</script>
<style scoped>
  #drag h2{
    color: #585858;
  }
  #drag button{
    margin-top: 10px;
  }
 	#drag-frame{
		width: 60%;
		text-align: center;
	}
</style>
