<template>
    <div class="header">
      <div class="header_content">
        <div class="header_content_left">
          <img :src="header.data.logo" alt="img">
        </div>
        <div class="header_content_center">
          <div>{{header.data.time}}</div>
          <form>
            <input type="text" v-model="search_data" id="dian" onfocus="if(this.value=='请输入搜索内容'){this.value=''}" onblur="if(this.value==''){this.value='请输入搜索内容'}" >
            <button @click="search()">
              <span class="el-icon-search"></span>
            </button>
          </form>
        </div>
        <div class="header_content_right">
          <img :src="header.data.jieqi_img" alt="">
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
      this.$http.get('http://www.nxqybank.com/pc/index.php/Index/heads').then(response => {
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
        width:33%;
        .height;
        float: left;
        img{
          width: 100%;
          height: 8rem;
          margin-top: 1.5rem;
          float: left;
        }
      }
      .header_content_center{
        width:30%;
        .height;
        float: left;
        margin-left: 2%;
        margin-right: 2%;
        div{
          width: 100%;
          height: 2rem;
          float: left;
          text-align: center;
          line-height: 2rem;
          color: #FE9600;
          font-size: 16px;
          margin-top: 2rem;
        };
        form{
          width: 100%;
          height: 3rem;
          line-height: 3rem;
          float: left;
          margin-top: 1.5rem;
          border: 1px solid #FE9600;
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
            color: #979797;
            border: none;
            font-size: 12px;
          }
          button{
            display: block;
            float: left;
            width: 10%;
            height: 100%;
            border: none;
            color: #979797;
            background-color: rgba(255, 255, 255, 0);
            outline: none;
            margin-left: 5%;
          }
        }
      }
      .header_content_right{
        width: 33%;
        height: 100%;
        float: left;
        img{
          width: 100%;
          height: 8rem;
          margin-top: 1.5rem;
          float: right;
        }
      }
    }
  }
</style>
