<template>
  <div id="slide">
    <div class="picBox">
      <el-carousel>
        <el-carousel-item v-for="(item, index) in newsArr" :key="index">
          <img :src="item.img" :alt="item.title">
          <span class="bg"></span>
          <h3>
            <a href="#">{{item.title}}</a>
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slide",
    data(){
      return {
        newsArr: []
      }
    },
    created(){
      this.$http.get('../../static/data/news.json').then(res=>{
        console.log(res.data);
        this.newsArr = res.data.slide;
      }).catch(res=>{
        console.log(res.status);
      })
    }
  }
</script>

<style scoped>
  .picBox{
    width: 600px;
    height: 300px;
    position: relative;
  }
  .el-carousel__item img{
    width: 600px;
    height: 300px;
  }
  .el-carousel__item .bg{
    position: relative;
    margin-top: -64px;
    width: 600px;
    height: 60px;
    display: block;
    background-image: linear-gradient(transparent,#000);
    background-size: auto 100%;
  }
  .el-carousel__item h3{
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
  .el-carousel__item h3 a{
    color: #fff;
  }
  #slide .picBox .el-carousel__indicators{
    position: absolute;
    left: 0;
    right: 10px;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .el-carousel__indicator .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px #d6d6d6 solid;
  }
  .el-carousel__arrow{
    background-color: rgba(31,45,61,.4);
  }
  .el-carousel__arrow:hover{
    background-color: rgba(31,45,61,.8);
  }
</style>
