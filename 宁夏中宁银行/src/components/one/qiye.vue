<template>
  <div class="qiye_content">
    <div class="navs_h"></div>
    <div class="title">企业荣誉</div>
    <img class="qiye_bg" src="../../../static/img/product_bg.jpg" alt="">
    <div class="content">
      <div class="content_title">
        <span @click="tohome()">首页</span> > <span>企业荣誉</span> >
      </div>
      <div class="content_contents">
        <div class="news">
          <div class="news_list" v-for="(item) in pageTableData"  @click="toDetail(item.id)">
            <img v-bind:src="item.img" alt="">
            <div>{{item.title}}</div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="total,prev,pager,next,jumper"
            :page-size="6"
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
        this.$http.get('http://www.nxqybank.com/pc/index.php/Index/qiye').then(response => {
          this.datas = response.data.data;
          this.article = this.datas.article
          this.pageNum=this.article.length;
//          console.log("获取数据成功");
//          console.log(this.datas);
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
        let pages=Math.ceil(this.article.length/6);//每页设置数量
        let newList=[];
        for(let i=0;i<pages;i++){
          let sonList=[];
          sonList=this.article.slice(i*6,i*6+6);//每页设置数量
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
  .qiye_content{
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
    .qiye_bg{
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
            width:30%;
            float: left;
            margin-right: 5%;
            margin-bottom: 5%;
            position: relative;
            cursor: pointer;
            &:hover{
              div{
                color: #FE9600;
              }
              img{
                transform: scale(1.03,1.03);
                transition: 0.2s;
              }
            }
            img{
              width: 100%;
              float: left;
              max-height: 230px;
              transition: 0.2s;
            }
            div{
              width: 100%;
              float: left;
              text-align: center;
              letter-spacing: 2px;
            };
          };
          .news_list:nth-child(3n){
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
