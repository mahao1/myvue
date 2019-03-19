<template>
  <div id="newsDetail">
    <el-button type="primary" icon="el-icon-back" class="back" @click="backBtn">返回</el-button>
    <div class="post-content-main">
      <h1>{{detail.title}}</h1>
      <div class="post-time-source">
        {{detail.time}}　来源:
        <a href="#">{{detail.author}}</a>
        <a href="#" class="report">举报</a>
      </div>
    </div>
    <div class="post-text">
      <p class="otitle">（原标题：{{detail.sub_title}}）</p>
      <div class="content" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newsDetail",
    data(){
      return {
        detail: {}
      }
    },
    mounted(){
      console.log("$route",this.$route);
      this.$http.get('/static/data/news.json').then(res=>{
        console.log("新闻详情",res.data.todayNews);
        this.detail = res.data.todayNews[this.$route.query.id - 1];
        console.log("detail",this.detail);
      })
    },
    methods: {
      backBtn(){
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>
  @import './newsDetail.css';
</style>
