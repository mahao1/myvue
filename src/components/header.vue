<template>
	<div id="header">
    <div class="layout">
      <div class="left">
        <a>
          <img src="../assets/logo.png" alt="logo">
        </a>
      </div>
      <div class="right">
        <ul>
          <li>
            <router-link to="/index">Home</router-link>
          </li>
          <li>
            <router-link to="/news">News</router-link>
          </li>
          <li>
            <router-link to="/module">Module</router-link>
          </li>
          <li>
            <router-link to="/user">User</router-link>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>
<script>
	export default{
    data(){
      return{

      }
    },
    methods: {

    }
	}
</script>
<style scoped>
  #header{
    height: 60px;
    background: #eee;
    overflow: hidden;
  }
  .left a img{
    float: left;
    width: 50px;
    height: auto;
    margin-top: 5px;
  }
  .right{
    float: right;
    height: 60px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .right ul{
    overflow: hidden;
    float: left;
  }
  .right ul li{
    float: left;
    cursor: pointer;
    line-height: 60px;
  }
  .right ul li a{
    display: inline-block;
    height: 56px;
    padding: 0 15px;
    color: #666;
  }

  /* 当前状态 */
  .router-link-active {
    border-bottom: 4px solid #3FB783;
  }
</style>
