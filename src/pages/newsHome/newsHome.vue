<template>
  <div id="newsHome">
    <div class="main-content clearfix">
      <div class="left-content">
        <slide></slide>
      </div>
      <div class="right-content">
        <div class="today-news">
          <h2 class="title">
            今日推荐<em>hot</em>
          </h2>
          <ul>
            <li v-for="(item, index) in todayNews" :key="index">
              <router-link :to="{path: '/news/newsDetail', query: {id: item.id}}" :title="item.title">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="waterfall">
      <waterfall></waterfall>
    </div>
  </div>
</template>

<script>
  import slide from '../../components/slide';
  import waterfall from '../../components/waterfall'
  export default {
    name: "newsHome",
    data(){
      return {
        newsArr: [],
        todayNews: []
      }
    },
    created(){
      this.$http.get('/static/data/news.json').then(res=>{
        console.log("news",res.data);
        this.newsArr = res.data.slide;
        this.todayNews = res.data.todayNews;
      }).catch(res=>{
        console.log(res.status);
      });
    },
    mounted(){
      console.log(this.newsArr, this.todayNews)
    },
    components: {
      slide,
      waterfall
    }
  }
</script>

<style scoped>
  @import './newsHome.css';
</style>
