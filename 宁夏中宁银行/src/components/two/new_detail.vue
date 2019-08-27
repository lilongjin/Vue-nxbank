<template>
  <div class="detail_content">
    <div class="navs_h"></div>
    <div class="title">{{datas.level1}}</div>
    <img class="detail_bg" src="../../../static/img/product_bg.jpg" alt="">
    <div class="content">
      <div class="content_title">
        <span @click="tohome()">首页</span> > <span @click="toprve()">{{datas.level1}}</span> > <span>详情</span>
      </div>
      <div class="content_contents">
        <div class="biaoti">{{datas.article.title}}</div>
        <div class="neirong">
          <div v-html="datas.article.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    "id":String
  },
  data(){
    return{
        datas:{
          article:{
            title:'',
            describe:'',
            content:''
          }
        },
    }
  },
  created:function () {
    this.$http.get('http://www.nxqybank.com/pc/index.php/Index/article/id/'+this.id).then(response => {
      this.datas = response.data;
//      console.log(this.datas)
    },response => {
      console.log("数据加载失败")
    });
  },
  methods:{
    tohome(){
      this.$router.push({path:`/home/`})
    },
    toprve(){
      this.$router.go(-1)
    },
  }

}
</script>
<style lang="less" scoped>
  .border{
    border:1px solid red;
    box-sizing: border-box;
  }
  .navs_h{
    width: 100%;
    height: 4rem;
    float: left;
    background-color: #F6F6F6;
  }
  .detail_content{
    width: 100%;
    float: left;
    position: relative;
    .title{
      width: 100%;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      font-size: 20px;
      font-weight: 600;
      float: left;
      color: #505050;
      border-bottom: 1px solid #DEE2E3;
    }
    .detail_bg{
      position: absolute;
      top: 3rem;
      left: 0;
      width: 100%;
      z-index: -1;
    }
    .content{
      width: 60%;
      float: left;
      margin-left: 20%;
      margin-top: 1%;
      .content_title{
        width: 100%;
        height: 3rem;
        text-indent: 1%;
        line-height: 3rem;
        color: #505050;
        font-size: 16px;
        border: 1px solid #DEE2E3;
        box-sizing: border-box;
        font-weight: 600;
      };
      .content_contents{
        width: 100%;
        float: left;
        height: 90%;
        margin-top: 2%;
        margin-bottom: 5%;
        border: 1px solid #dee2e3;
        padding: 10px;
        .biaoti{
          width: 100%;
          float: left;
          text-align: center;
          color: #505050;
          font-size: 21px;
          font-weight: 600;
          line-height: 4rem;
        }
        .neirong{
          width: 100%;
          float: left;
          img{
            width: 60%;
            float: left;
            margin-left: 20%;
          }
          div{
            width: 100%;
            float: left;
            color: #505050;
            font-size: 16px;
            text-indent: 2%;
            margin-top: 3%;
            margin-bottom: 3%;
          }
        }
      }
    }
  }
</style>
