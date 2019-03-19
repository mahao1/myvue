<template>
  <div id="gaodeMap">
    <h2>高德地图</h2>
    <div id="container"></div>
  </div>
</template>

<script>
  import AMap from 'AMap'
  let mapObj
  export default {
    name: "gaodeMap",
    data(){
      return{}
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        //创建地图
        mapObj = new AMap.Map('container', {
          center: [116.397428, 39.90923],
          resizeEnable: true,//自适应大小
          zoom: 10//初始视窗
        });
        //两个组件：放大缩小按钮和图层的切换
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType'], function () {
          mapObj.addControl(new AMap.ToolBar());
          mapObj.addControl(new AMap.Scale());
          //卫星和路况
          mapObj.addControl(new AMap.MapType({showTraffic: false, showRoad: false}))
        });
        //使用高德定位
        mapObj.plugin(['AMap.Geolocation'], function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //  是否使用高精度定位，默认:true
            timeout: 10000, //  超过10秒后停止定位，默认：无穷大
            maximumAge: 0, // 定位结果缓存0毫秒，默认：0
            convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, //  显示定位按钮，默认：true
            buttonPosition: 'LB',  // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,  //  定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();
          //监听定位是否成功还是失败，成功则可以得到当前位置的经度和纬度
          AMap.event.addListener(geolocation, 'complete', (result) => {
            console.log(result.position);
            // result.position.getLng() //定位成功返回的经度
            // result.position.getLat() //定位成功返回的纬度
            mapObj.setCenter(result.position);
          });  //  返回定位信息
          AMap.event.addListener(geolocation, 'error', (result) => {
            console.log(result)
          });  //  返回定位出错信息
        });
      }
    }
  }
</script>

<style scoped>
  #gaodeMap{
    margin-top: 20px;
    background: #eee;
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #gaodeMap h2{
    color: #585858;
  }
  #container{
    width: 600px;
    height: 400px;
    border: 1px solid #ccc;
    margin: 10px 0;
  }
</style>
