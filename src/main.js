// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import animate from 'animate.css'
import './directives.js'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//社交分享
import vshare from 'vshare'
import Share from 'vue-social-share'
Vue.use(Share);

//中英文切换
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueDND from 'awe-dnd'
Vue.use(VueDND);

// 使用多文件管理不同的语言是一个好习惯：
import LangStorage from './common/cookie/lang'
const i18n = new VueI18n({
  locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  //locale: 'zh', // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
});

Vue.use(animate);
Vue.use(vshare);

Vue.config.productionTip = false;
Vue.prototype.$http = axios; // 绑定到vue原型

//Vue.use(Viewer) 默认配置写法
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
});

//饿了么框架 链接：http://element-cn.eleme.io/#/zh-CN/component/quickstart
import ElementUI from 'element-ui';
//全局引入饿了么框架里边的组件，可以在页面级直接调用
Vue.use(ElementUI);

//全局引入饿了么框架的css
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import './main.css';
import './assets/reset.css';


//引入过滤器
import filters from './filters/index.js';
//配置全局过滤器
//Object.keys() 返回数组 [索引]
Object.keys(filters).forEach((key)=>{
	Vue.filter(key,filters[key]);
});

//require ('./pages/index/a.js');//引入外部js

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
