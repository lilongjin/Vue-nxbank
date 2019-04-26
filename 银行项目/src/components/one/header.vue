<template>
    <div class="header">
      <img class="header_bg" :src="header.data.jieqi_img" alt="">
      <div class="header_content">
        <div class="header_content_left">
          <img :src="header.data.logo" alt="img">
        </div>
        <div class="header_content_center">
          <form>
            <input type="text" v-model="search_data" id="dian" onfocus="if(this.value=='请输入搜索内容'){this.value=''}" onblur="if(this.value==''){this.value='请输入搜索内容'}" >
            <button @click="search()">
              <span class="el-icon-search"></span>
            </button>
          </form>
        </div>
        <div class="header_content_right">
          <div>节气：{{header.data.jieqi}}</div>
          <div>{{header.data.time}}</div>
          <!--<div>{{text.time_hour}}</div>-->
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        isRouterAlive: true,
        search_data:'请输入搜索内容',
        header:{
          data:{
            logo:'',
            jieqi:'',
            jieqi_img:'',
            time:''
          }
        }
      }
    },
    created:function () {
      this.$http.get('http://nxzn.orzc.cn/pc/index.php/Index/heads').then(response => {
        this.header = response.data;
//      console.log(this.header);
      },response => {
        console.log("数据加载失败")
      });
    },
    methods:{
      search:function () {
//        console.log("搜索结果:"+this.search_data);
        if(this.search_data==''||this.search_data=='请输入搜索内容'){
          alert('请输入搜索内容')
        }else{
          this.$router.push({path:`/search_list/${this.search_data}`});
//              this.$router.push({path:`/search_list/${1}`});
//              setTimeout(() =>{
//                this.$router.push({path:`/search_list/${this.search_data}`});
//              },10);
        }
      },
    }
  }
</script>
<style lang="less" scoped>
  @border:1px solid #FE9600;
  @color:#FE9600;
  @color1:#005BB9;
  @size:14px;
  .header {
    width: 100%;
    height: 10rem;
    float: left;
    position: relative;
    .header_bg{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .header_content{
      width: 70%;
      height: 100%;
      float: left;
      margin-left: 15%;
      .img{
        width: 100%;
        height: 100%;
      }
      .height{
        height: 100%;
      }
      .header_content_left{
        width:35%;
        .height;
        float: left;
        img{
          height: 6rem;
          margin-top: 1rem;
          float: left;
        }
      }
      .header_content_center{
        width:45%;
        .height;
        float: left;
        form{
          width: 60%;
          height: 3rem;
          line-height: 3rem;
          float: left;
          margin-left: 20%;
          margin-top: 3.5rem;
          border: @border;
          border-radius: 20px;
          input{
            background-color: rgba(255,255,255,0);
            outline: none;
            display: block;
            float: left;
            width: 80%;
            height: 100%;
            outline: none;
            margin-left: 5%;
            color: white;
            border: none;
            font-size: 12px;
          }
          button{
            display: block;
            float: left;
            width: 10%;
            height: 100%;
            border: none;
            color: white;
            background-color: rgba(255,255,255,0);
            outline: none;
          }
        }
      }
      .header_content_right{
        width: 13%;
        height: 4rem;
        margin-top: 3rem;
        float: left;
        margin-left: 7%;
        div{
          width: 100%;
          height:2rem;
          float: left;
          text-align: center;
          line-height: 2rem;
          color:@color;
          font-size: 16px;
        }
      }
    }
  }
</style>
