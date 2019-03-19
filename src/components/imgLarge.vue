<template>
  <div id="imgLarge">
    <h2>点击图片放大</h2>
    <viewer :images="images">
      <!--<img v-for="src in images" :src="src" :key="src" width="300">-->
      <el-carousel>
        <el-carousel-item v-for="src in images" :key="src">
          <img :src="src" alt="">
        </el-carousel-item>
      </el-carousel>
    </viewer>
  </div>
</template>

<script>
  export default {
    name: "imgLarge",
    data(){
      return{
        images: [
          '../../static/images/img7.jpg',
          '../../static/images/img8.jpg',
          '../../static/images/img9.jpg',
          '../../static/images/img10.jpg'
        ]
      }
    }
  }
</script>

<style scoped>
.el-carousel{
  width: 400px;
}
h2{
  color: #585858;
  margin-bottom: 10px;
}
</style>
