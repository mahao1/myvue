$(function(){
  waterfall();
  //模拟数据
  var dataInt = {
    data: [
      {"src": "10.jpg"},
      {"src": "11.jpg"},
      {"src": "12.jpg"},
      {"src": "13.jpg"}
    ]
  };
  //监听浏览器滚动事件
  $(window).scroll(function(){
    if(checkScrollSlide){
      $.each(dataInt.data, function(key, value){
        var oBox = $('<div>').addClass('box').appendTo($('#main'));
        var oPic = $('<div>').addClass('pic').appendTo($(oBox));
        $('<img>').attr('src', 'images/'+$(value).attr('src')).appendTo($(oPic));
      });

      waterfall();//加载图片
    }
  })
})

function waterfall(){
  var $boxs = $('#main>div');//获取所有class=box的元素
  var w = $boxs.eq(0).outerWidth();//获取每列的宽度
  var cols = Math.floor($(window).width() / w);//获取列数
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
      //改变数组列的高度
      hArr[minHIndex] += $boxs.eq(index).outerHeight();
    }
  })
}

//检测是否具备滚动加载数据块的条件
function checkScrollSlide(){
  var $lastBox = $('#main>div').last();//获取最后一个box
  var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
  var documentH = $(window).height();//获取页面高度
  var scrollTop = $(window).scrollTop();//获取滚动高度
  return (lastBoxDis<documentH+scrollTop) ? true : false;
}