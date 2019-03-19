<template>
  <div id="waterfall" class="clearfix">
    <h2>瀑布流</h2>
    <div id="main" class="clearfix">
      <div class="box">
        <div class="pic">
          <img src="../../static/images/1.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/2.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/3.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/4.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/5.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/6.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/7.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/8.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/9.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/10.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/11.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/12.jpg"/>
        </div>
      </div>
      <div class="box">
        <div class="pic">
          <img src="../../static/images/13.jpg"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'waterfall',
    data(){
      return {
        list: [
          {"src": "10.jpg"},
          {"src": "11.jpg"},
          {"src": "12.jpg"},
          {"src": "13.jpg"}
        ],
        num: 0,
      }
    },
    created(){
      this.checkScrollSlide();
      console.log(this.checkScrollSlide());

    },
    mounted(){
      this.waterfall();
      $(window).scroll(()=>{
        var limit = this.checkScrollSlide();//是否滚动
        console.log(limit);
        if(this.num < 5){
          limit = true;
          $.each(this.list, function(key, value){
            var oBox = $('<div>').addClass('box').appendTo($('#main'));
            var oPic = $('<div>').addClass('pic').appendTo($(oBox));
            $('<img>').attr('src', '../../static/images/'+$(value).attr('src')).appendTo($(oPic));
          });
          this.waterfall();//加载图片
          this.num++;
          console.log('加载次数',this.num);
        }else{
          return false;
        }

      })
    },
    methods: {
      waterfall(){
        var $boxs = $('#main>div');//获取所有class=box的元素
        var w = $boxs.eq(0).outerWidth();//获取每列的宽度
        // var cols = Math.floor($(window).width() / w);//获取列数
        var cols = Math.floor($('#main').width() / w);//获取列数
        //设置main的宽度
        $('#main').width(w*cols).css('margin','0 auto');
        var hArr = [];//存放每一列的高度
        $boxs.each(function(index, value){
          var h = $boxs.eq(index).outerHeight();
          if(index < cols){
            hArr.push(h);
          }else{
            var minH = Math.min.apply(null, hArr);//获取每列的最小高度
            var minHIndex = $.inArray(minH, hArr);//获取每列最小高度的索引
            //设置下一列图片位置
            $(value).css({
              'position': 'absolute',
              'top': minH + 'px',
              'left': minHIndex * w + 'px'
            });
            ////数组 最小高元素的高 + 添加上的展示框[i]块框高,  改变数组列的高度
            hArr[minHIndex] += $boxs.eq(index).outerHeight();
            $('#main').height(hArr[hArr.length-1] + 200);//设置父元素高度
          }
        });
      },

      //检测是否具备滚动加载数据块的条件
      checkScrollSlide(){
        //获取最后一个box
        var $lastBox = $('#main>div').last();
        //取出最后一个盒子高度的一半 + 头部偏离的位置
        var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
        var documentH = $(window).height();//获取页面高度
        var scrollTop = $(window).scrollTop();//求出页面偏离浏览器高度
        return (lastBoxDis<documentH+scrollTop) ? true : false;
      }
    }
  }
</script>

<style>
  #waterfall{
    width: 100%;
    height: auto;
    background: #eee;
  }
  #main{
    width: 1000px;
    height: auto;
    position: relative;
    text-align: center;
    margin: 0 auto;
  }
  .box{
    padding: 15px 0 0 15px;
    float: left;
  }
  .pic{
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
  }
  .pic img{
    width: 160px;
    height: auto;
  }


  .clearfix:after {
    content: ""; /*设置内容为空*/
    height: 0; /*高度为0*/
    line-height: 0; /*行高为0*/
    display: block; /*将文本转为块级元素*/
    visibility: hidden; /*将元素隐藏*/
    clear: both; /*清除浮动*/
  }

  .clearfix {
    zoom: 1; /*为了兼容IE*/
  }
</style>
