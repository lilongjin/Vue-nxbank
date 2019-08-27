<template>
  <div class="hangye_content">
    <div class="navs_h"></div>
    <div class="title">行业新闻</div>
    <img class="hangye_bg" src="../../../static/img/product_bg.jpg" alt="">
    <div class="content">
      <div class="content_title">
        <span @click="tohome()">首页</span> > <span>行业新闻</span> >
      </div>
      <div class="content_contents">
        <div class="news">
          <div class="news_list" v-for="(item) in pageTableData" @click="toDetail(item.id)">
            <img v-bind:src="item.img" alt="">
            <div>{{item.title}}</div>
            <div>{{item.describe}}</div>
            <div>
              <p>详情</p>
              <p>{{item.time}}</p>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  layout="total,prev,pager,next,jumper"
                  :page-size="8"
                  background
                  :total="pageNum">
                </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentPage: 1,//分页
        pageNum:1,//分页总条数
        datas:[],
        article:''
      };
    },
    created:function () {
      this.getData();
    },
    methods: {
      handleCurrentChange(val) {
//        console.log(`当前页: ${val}`);
      },
      getData(){
        this.$http.get('http://www.nxqybank.com/pc/index.php/Index/xinwen').then(response => {
          this.datas = response.data.data;
          this.article = this.datas.article
          this.pageNum=this.article.length;
//       console.log("获取数据成功");
//       console.log(this.datas);
        },response =>{
          console.log("数据加载失败")
        })
      },
      tohome(){
        this.$router.push({path:`/home/`})
      },
      toDetail(id){
        this.$router.push({path:`/new_detail/${id}`})
      }
    },
    computed:{
      pageTableData(){
        let pages=Math.ceil(this.article.length/8);//每页设置数量
        let newList=[];
        for(let i=0;i<pages;i++){
          let sonList=[];
          sonList=this.article.slice(i*8,i*8+8);//每页设置数量
          newList.push(sonList)
        }
        return newList[this.currentPage-1]
      }
    },
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
  .hangye_content{
    width: 100%;
    float: left;
    position: relative;
    .title{
      width: 100%;
      height: 6rem;
      text-align: center;
      line-height: 6rem;
      font-size: 26px;
      font-weight: 600;
      float: left;
      color: #505050;
      border-bottom: 1px solid #DEE2E3;
    }
    .hangye_bg{
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
        .news{
          width: 100%;
          float: left;
          .news_list{
            width:23%;
            height: 340px;
            float: left;
            margin-right: 2.66%;
            margin-bottom: 5%;
            border: 2px solid #bfbcbf;
            box-sizing: border-box;
            position: relative;
            cursor: pointer;
            &:hover{
              border: 2px solid #FE9600;
            }
            img{
              width: 100%;
              max-height: 165px;
            }
            div{
              width: 95%;
              margin-left: 5px;
            };
            div:nth-child(2){
              float: left;
              font-size: 16px;
              font-weight: 600;
              color: #343434;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              letter-spacing: 2px;
              margin-top: 2%;
              &:hover{
              color:#FE9600;
            }
            }
            div:nth-child(3){
              max-height: 55px;
              float: left;
              margin-top: 2%;
              font-size: 13px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp:3;
              overflow: hidden;
              color: #848384;
              letter-spacing: 2px;
            }
            div:nth-child(4){
              position: absolute;
              bottom: 5px;
              font-size: 14px;
              p:nth-child(1){
                float: left;
                padding: 3px;
                font-size: 12px;
                border: 1px solid #FE9600;
                color: #FE9600;
                margin-top: 2%;
              };
              p:nth-child(2){
                float: right;
                padding: 3px;
                font-size: 12px;
              }
            }
          };
          .news_list:nth-child(4n){
            margin-right: 0;
          }
        };
        .pagination{
          width: 40%;
          float: left;
          margin-left: 30%;
        }
      }
    }
  }
</style>
