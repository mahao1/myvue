<template>
	<div id="todoList">
		<div class="todolist">
			<h2 v-html="title"></h2>
			<div class="list">
				<h3>添加小目标</h3>
				<input type="text" class="ipt-text" placeholder="输入小目标后，按回车确认"  @keyup.13="addList" v-model="addText"/>
				<p>共有<span class="num_color">{{prolist.length}}</span>个目标，{{noend == 0 ? "全部完成了。" : "已完成"+(prolist.length-noend)+"个目标，还有"+noend+"个目标未完成。"}}</p>
				<div>
          <div class="radio_change">
            <input type="radio" name="choseType" id="allGole" @click="chooseList(1)" checked/>
            <label for="allGole"></label>
            <span>所有目标</span>
          </div>
					<div class="radio_change">
            <input type="radio" name="choseType" id="finishGole" @click="chooseList(2)"/>
            <label for="finishGole"></label>
            <span>已完成目标</span>
          </div>
					<div class="radio_change">
            <input type="radio" name="choseType" id="unfinishGole" @click="chooseList(3)"/>
            <label for="unfinishGole"></label>
            <span>未完成目标</span>
          </div>
				</div>
			</div>
			<ul class="list_ul">
				<li class="li1" v-for="(item,index) in newlist" :key="index" :class="{'eidting': curIndex === index}">
					<div>
						<span class="type-span" @click="item.status=!item.status" :class="{'status-end': item.status}"></span>
						<span @dblclick="curIndex=index">{{item.name}}</span>
						<span class="close" @click="delectList(item)">x</span>
					</div>
					<input type="text" class="text2" v-model='item.name' @blur='edited' @focus='editBefore(item.name)' @keyup.esc='cancelEdit(item)'/>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'todoList',
		data(){
			return {
			  title: '<span></span>This is todolist',
				addText: '',
				prolist: [
					{"name": "HTML5", status: false},
					{"name": "CSS3", status: true},
					{"name": "javascript", status: false},
					{"name": "vue", status: false}
				],
				newlist: [],
				curType: 0,
				curIndex: '',
				beforeEditText: '',
        radio: '1'
			}
		},
		computed: {
			noend(){
				return this.prolist.filter(function(item){
					return !item.status; //找到未完成的，即status为false
				}).length;
			}
		},
		mounted(){
			//初始化，把prolist赋值给newList。默认显示所有目标
			this.newlist = this.prolist;
		},
		methods: {
			addList(){
				//添加进来默认status=false,就是未完成状态
				this.prolist.push({
					name: this.addText,
					status: false
				});
				//添加后，清空addText
				this.addText = "";
			},
			chooseList(type){
				//type=1时，选择所有目标
        //type=2时，选择所有已完成目标
        //type=3时，选择所有未完成目标
        this.curType = type;
        console.log(this.curType);
        switch(type){
        	case 1 : this.newlist = this.prolist;
        		break;
        	case 2 : this.newlist = this.prolist.filter(function(item){return item.status});//找到status为true的
        		break;
        	case 3 : this.newlist = this.prolist.filter(function(item){return !item.status});//找到status为false的
        		break;
        }
			},
			/*改变单条数据的完成状态*/
      changeType(index){
        this.newList[index].status=!this.newList[index].status;
        //更新数据
        this.chooseList(this.curType);
      },
			//删除
			delectList(list){
				var index = this.prolist.indexOf(list);
//				console.log(index);
				//根据索引，删除数组某一项
				this.prolist.splice(index,1);
				//更新newList  newList可能经过this.prolist.filter()赋值，这样的话，删除了prolist不会影响到newList  那么就要手动更新newList
        //this.newList=this.prolist;
        this.chooseList(this.curType);
			},
			//修改前
			editBefore(name){
				//先记录当前项（比如这一项，{name:"HTML5",status:false}）
        //beforeEditText="HTML5"
        this.beforeEditText = name;
			},
			//修改完成后
			edited(){
				//修改完了，设置curIndex=""，这样输入框就隐藏，其它元素就会显示。因为在li元素 写了：:class="{'eidting':curIndex===index}"  当curIndex不等于index时，eidting类名就清除了！
	      //输入框利用v-model绑定了当前项（比如这一项，{name:"HTML5",status:false}）的name,当在输入框编辑的时候，比如改成‘HTML’,实际上当前项的name已经变成了‘HTML’，所以，这一步只是清除eidting类名，隐藏输入框而已
	      //还有一个要注意的就是虽然li遍历的是newList，比如改了newList的这一项（{name:"HTML5",status:false}），比如改成这样（{name:"HTML",status:true}）。实际上prolist的这一项（{name:"HTML5",status:false}），也会被改成（{name:"HTML",status:true}）。因为这里是一个对象，而且公用一个堆栈！修改其中一个，另一个会被影响到
	      this.curIndex = '';
			},
			//取消修改
			cancelEdit(val){
				//上面说了输入框利用v-model绑定了当前项（比如这一项，{name:"HTML5",status:false}）的name,当在输入框编辑的时候，比如改成‘HTML’,实际上当前项的name已经变成了‘HTML’，所以，这一步就是把之前保存的beforeEditText赋值给当前项的name属性，起到一个恢复原来值得作用！
				val.name = this.beforeEditText;
				this.curIndex = '';
			}
		}/*,
		directives: {
      "focus": {
        update(el) {
          el.focus();
        }
      }
	  }*/
	}
</script>
<style scoped>
	@import 'todoList.css';
</style>
