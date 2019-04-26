<template>
  <div class="wenhua_content">
    <div class="navs_h"></div>
    <div class="title">{{datas.data_name}}</div>
    <img class="wenhua_bg" src="../../../static/img/product_bg.jpg" alt="">
    <div class="content">
      <div class="content_title">
        <span @click="tohome()">首页</span> > <span>文化建设</span> >
      </div>
      <div class="content_contents">
        <div class="left">
          <div class="left_list" v-for="(item,index) in datas.data" :class="{active:index == nav_eq}" @click="change(index,item)">
            <p class="el-icon-circle-plus"></p>
            <p>{{item.title}}</p>
            <p class="el-icon-arrow-right"></p>
          </div>
        </div>
        <div class="right" v-for="(item,index) in datas.data" :class="{none:index != nav_eq}">
          <div class="right_list" v-show="nav_eq == index">
            <div class="list">
              <div class="list_content" v-for="x in pageTableData" @click="toDetail(x.id)">
                <div class="num">
                  <div></div>
                </div>
                <p>{{x.title}}</p>
                <p>{{x.time}}</p>
              </div>
              <div class="pagination">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  layout="total,prev,pager,next,jumper"
                  :page-size="10"
                  background
                  :total="pageNum">
                </el-pagination>
              </div>
            </div>
          </div>
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
        nav_eq:0,
        datas:{},
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
      tohome(){
        this.$router.push({path:`/home/`})
      },
      change(eq,item){
        this.nav_eq = eq;
        this.article = item.article
//        console.log(this.article);
        this.pageNum=this.article.length;
      },
      getData(){
        this.$http.get('http://nxzn.orzc.cn/pc/index.php/Index/wenhua').then(response => {
          this.datas = response.data;
//          console.log("获取数据成功");
//          console.log(this.datas);
          var arr = this.datas.data
          this.article = arr[0].article
          this.pageNum=this.article.length;
        },response =>{
          console.log("数据加载失败")
        })
      },
      toDetail(id){
        this.$router.push({path:`/new_detail/${id}`})
      }
    },
    computed:{
      pageTableData(){
        let pages=Math.ceil(this.article.length/10);//每页设置数量
        let newList=[];
        for(let i=0;i<pages;i++){
          let sonList=[];
          sonList=this.article.slice(i*10,i*10+10);//每页设置数量
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
  .none{
    display: none;
  }
  .active{
    color:#4EC9F5;
  }
  .navs_h{
    width: 100%;
    height: 4rem;
    float: left;
    background-color: #F6F6F6;
  }
  .wenhua_content{
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
    .wenhua_bg{
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
        .left{
          width: 30%;
          height: 100%;
          float: left;
          color: #777;
          .left_list{
            width: 100%;
            height: 48px;
            cursor: pointer;
            font-size: 15px;
            border: 1px solid #EBEEF5;
            float: left;
            &:hover{
              color:#4EC9F5;
            }
            p{
              display: block;
              float: left;
            };
            p:nth-child(1){
              margin-right: 5%;
              margin-top: 16px;
            };
            p:nth-child(2){
              width: 70%;
              font-weight: 500;
              line-height: 48px;
              font-weight: 600;
            };
            p:nth-child(3){
              float: right;
              margin-right: 5%;
              margin-top: 16px;
            };
          }
        };
        .right{
          width: 70%;
          height: 100%;
          float: left;
          .right_list{
            width: 100%;
            height: 100%;
            float: left;
            .list{
              width: 90%;
              float: left;
              margin-left: 5%;
              margin-top: 1%;
              .list_content{
                width: 100%;
                float: left;
                margin-top: 2%;
                cursor: pointer;
                &:hover{
                  p{
                    color: #FE9600;
                  }
                }
                .num{
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  float: left;
                  border: 1px solid #FE9600;
                  box-sizing: content-box;
                  margin-top: 3px;
                  div{
                    width: 8px;
                    height: 8px;
                    float: left;
                    background-color: #FE9600;
                    margin-top: 2px;
                    margin-left: 2px;
                    border-radius: 50%;
                  }
                };
                p{
                  float: left;
                  color: #707070;
                  font-size: 12px;
                };
                p:nth-child(2){
                  margin-left: 1%;
                  width: 80%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 14px;
                  letter-spacing: 2px;
                };
                p:nth-child(3){
                  float: right;
                }
              };
              .pagination{
                width: 90%;
                float: left;
                margin-left: 5%;
                margin-top: 30%;
              }
            }
          }
        }
      }
    }
  }
</style>
