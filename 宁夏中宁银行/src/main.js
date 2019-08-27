import Vue from 'vue'//引入Vue
import App from './App.vue'//引入App.vue项目总组件
import $ from 'jquery'//引入jquery文件
import ElementUI from 'element-ui' //引入ElementUI
import Vuex from 'vuex'//引入Vuex
import store from './store/store.js'//引入数据仓库
import 'element-ui/lib/theme-chalk/index.css'//引入ElementUI 插件
import VueRouter from 'vue-router'// 引入路由模块
import VueResource from 'vue-resource' //引入http模块
import { routes } from './router/router.js'// 引入路由字典文件
import BaiduMap from 'vue-baidu-map'
Vue.config.productionTip = false;
Vue.use(VueRouter);// 使用路由
Vue.use(VueResource);// 使用http模块
Vue.use(ElementUI)// 使用ElementUI模块
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'btdLALhz2PRv8iqW6oT95l6p'
})
// 设置路由
const router = new VueRouter({
  routes,//使用router.js路由字典文件
  // mode:"history", // 消除默认链接地址里的#号
});
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})
new Vue({//实例化
  el: '#app', //获取index.html中div容器
  router, //注册使用路由
  store,//注册使用store
  template: '<App/>', //设置模板标签为APP
  components: { App }, //设置总模板文件为APP.vue
});
