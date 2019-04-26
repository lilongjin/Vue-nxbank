<template>
  <div class="search_content">
    <div class="navs_h"></div>
    <div class="title">搜索结果</div>
    <img class="search_bg" src="../../../static/img/product_bg.jpg" alt="">
    <div class="content">
      <div class="content_title">
        <span @click="tohome()">首页</span> > <span>搜索结果</span> >
      </div>
      <div class="content_contents">
        <div class="search_list"  v-for="(item) in pageTableData" @click="toDetail(item.id)">
          <div class="biaoti">{{item.title}}</div>
          <div class="neirong">
            <div>{{item.describe}}<span>【详情】</span></div>
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
</template>
<script>
export default {
  props:{
    "search":String
  },
  data(){
    return{
      currentPage: 1,//分页
      pageNum:1,//分页总条数
      datas:[
          {
            id:'',
            title:'',
            describe:''
          }
        ],
    }
  },
  created:function (){
    this.getData();
  },
  watch: {
    search(newV) {
      // do something
//      console.log(newV)
      this.getData();
    }
  },
  methods:{
    handleCurrentChange(val) {
//        console.log(`当前页: ${val}`);
    },
    getData(){
      this.$http.get('http://nxzn.orzc.cn/pc/index.php/Index/lookup/title/'+this.search).then(response => {
        this.datas = response.data;
//      console.log(this.datas)
//        console.log(this.search)
        this.pageNum=this.datas.length;
      },response => {
        console.log("数据加载失败")
      });
    },
    tohome(){
      this.$router.push({path:`/home/`})
    },
    toDetail(id){
      this.$router.push({path:`/new_detail/${id}`})
    },
  },
  computed:{
    pageTableData(){
      let pages=Math.ceil(this.datas.length/8);//每页设置数量
      let newList=[];
      for(let i=0;i<pages;i++){
        let sonList=[];
        sonList=this.datas.slice(i*8,i*8+8);//每页设置数量
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
  .search_content{
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
    .search_bg{
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
        .search_list{
          width: 100%;
          float: left;
          margin-bottom: 2%;
          background-color: #f6f6f6;
          cursor: pointer;
          .biaoti{
            width: 100%;
            float: left;
            text-indent: 1%;
            color: #505050;
            font-size: 16px;
            font-weight: 600;
            line-height: 3rem;
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
              font-size: 14px;
              text-indent: 1%;
              margin-bottom: 1%;
              span{
                color:#FE9600
              }
            }
          }
        }
      };
      .pagination{
        width: 50%;
        float: left;
        margin-left: 25%;
      }
    }
  }
</style>
