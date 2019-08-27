<template>
  <div class="contents">
    <!--头部模块-->
    <app-header></app-header>
    <!--导航栏模块-->
    <nav-list></nav-list>
    <!--路由模块内容-->
    <div class="router_content">
      <router-view></router-view>
    </div>
    <!--底部-->
    <div class="footers">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import header from "./components/one/header.vue"
  import nav from "./components/one/nav.vue"
  import footer from "./components/one/footer.vue"
  export default {
    components:{
      "app-header":header,
      "nav-list":nav,
      "app-footer":footer,
    },
    created:function () {
//      this.getData();
    },

    methods:{
//      getData(){
//        this.$http.get('http://nxzn.orzc.cn/pc/index.php/Index/index').then(response => {
////          this.$store.state.all_data = response.body;
//          console.log("vuex获取数据成功");
//          console.log(response.body)
//        },response =>{
//          console.log("vuex数据加载失败");
//        })
//      },
    }
  }
</script>

<!--设置总组件（首页）样式-->
<style scoped>
  .contents{
    width: 100%;
    height: 100%;
    float: left;
  }
  .router_content{
    width: 100%;
    min-height: 800px;
    float: left;
  }
  .footers{
    width: 100%;
    float: left;
  }
</style>
