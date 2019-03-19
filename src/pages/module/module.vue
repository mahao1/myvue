<template>
	<div id="module" class="layout">
		<todoList></todoList>
    <div class="module">
      <div class="box">
        <h2>父子组件之间的传值</h2>
        <componentParent></componentParent>
      </div>
      <div class="box">
        <h2>不同组件之间传值，通过eventBus</h2>
        <componentA></componentA>
        <componentB></componentB>
      </div>
    </div>
    <div class="module">
      <Watch></Watch>
    </div>
    <div class="module">
      <Model></Model>
    </div>
    <div class="module">
      <drag></drag>
    </div>
    <div class="module">
      <imgLarge></imgLarge>
    </div>
    <gaodeMap></gaodeMap>
  </div>
</template>
<script>
	import todoList from '../../components/todolist/todolist';
	import gaodeMap from '../../components/gaodeMap/gaodeMap';
	import componentA from '../../components/componentA';
	import componentB from '../../components/componentB';
	import componentParent from '../../components/componentParent';
	import drag from '../../components/drag';
	import Watch from '../../components/Watch';
	import Model from '../../components/Model';
	import imgLarge from '../../components/imgLarge';
	export default{
		data(){
			return{
        msg: 'module'
			}
		},
		components: {
      todoList,
      gaodeMap,
      componentA,
      componentB,
      componentParent,
      drag,
      Watch,
      Model,
      imgLarge
		}
	}
</script>
<style scoped>
	@import './module.css';
</style>
