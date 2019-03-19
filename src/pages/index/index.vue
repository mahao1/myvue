<template>
	<div id="index" class="layout">
    <!-- 中英文切换 -->
    <zhEn></zhEn>
    <div class="share">
      <share :config="config"></share>
    </div>
    <!-- 拖拽 -->   
    <div class="drag">图片拖拽</div>  
    <draggable v-model="tags" @update="datadragEnd" :options = "{animation:500}">
      <transition-group>
        <img v-for="(item, index) in tags" :key="index" :src="item" alt="">
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import '../../filters/index'
  import zhEn from '../../components/zhEn'
  import share from '../../components/share'
  import draggable from 'vuedraggable'
	export default{
	  name: 'index',
		data(){
			return{
        config: {
          url                 : 'http://www.baidu.com', // 网址，默认使用 window.location.href
          source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
          title               : '分享', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
          description         : '描述', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
          image               : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', // 图片, 默认取网页中第一个img标签
          //sites               : ['weibo', 'qq', 'wechat', 'qzone', 'douban'], // 启用的站点
          disabled            : ['diandian', 'douban'], // 禁用的站点
          wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
          wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
        },
        /*vshareConfig: {
          shareList: [
            // 此处放分享列表（ID）
            'tsina', 'tqq', 'tsohu', 'qzone', 'tieba', 'renren', 'fbook', 'twi'
          ],
          common : {
            //此处放置通用设置
            bdText: '分享的内容',
            bdDesc: '分享的摘要',
            bdUrl: 'http://www.baidu.com',
            bdPic: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
          },
          share : [{
            //此处放置分享按钮设置
          }
          ],
          slide : [
            //此处放置浮窗分享设置
          ],
          image : [
            //此处放置图片分享设置
            'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
          ],
          selectShare : [
            //此处放置划词分享设置
          ]
        }*/
        tags: [
          '/static/images/img1.jpg',
          '/static/images/img2.jpg',
          '/static/images/img3.jpg',
          '/static/images/img4.jpg',
        ],

        colors: [
          {
            text: "Aquamarine",
          },
          {
            text: "Hotpink",
          },
          {
            text: "Gold",
          },
          {
            text: "Crimson",
          },
          {
            text: "Blueviolet",
          },
          {
            text: "Lightblue",
          },
          {
            text: "Cornflowerblue",
          },
          {
            text: "Skyblue",
          },
          {
            text: "Burlywood",
          }
        ],
			}
		},
    components: {
      zhEn,
      share,
      draggable
    },
    mounted(){
      //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
      document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
		methods: {
      getdata (evt) {
        console.log(evt.draggedContext.element.text)
      },
      datadragEnd (evt) {
        evt.preventDefault();
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
        console.log(this.tags);
      }
    },
	}
</script>
<style scoped>
  @import 'index.css';
  .color-item{
    border:1px solid #f1f1f1;
    padding:10px 5px;
    margin:5px 0;
    border-radius: 4px;
  }
</style>
