<template>
  <div class="guanyu_content">
    <div class="navs_h"></div>
    <div class="title">关于我行</div>
    <img class="guanyu_bg" src="../../../static/img/product_bg.jpg" alt="">
    <div class="content">
      <div class="content_title">
        <span @click="tohome()">首页</span> > <span>关于我行</span> >
      </div>
      <div class="content_contents">
        <div class="left">
          <div class="left_list" v-for="(item,index) in left_list" :class="{active:index == nav_eq}" @click="change(index)">
            <p class="el-icon-circle-plus"></p>
            <p>{{item}}</p>
            <p class="el-icon-arrow-right"></p>
          </div>
        </div>
        <div class="right">
          <div class="right_list" v-show="nav_eq ==0">
            <div class="list">
              <div class="title">{{jieshao.title}}</div>
              <div class="contents" v-html="jieshao.content"></div>
            </div>
          </div>
          <div class="right_list" v-show="nav_eq ==1">
            <div class="list">
              <div class="block">
                <el-timeline>
                  <el-timeline-item v-for="item in fazhan" v-bind:timestamp="item.title" placement="top" v-bind:key="item.id">
                    <el-card>
                      <h4>{{item.describe}}</h4>
                      <p>{{item.title}}</p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </div>
          <div class="right_list" v-show="nav_eq ==2">
            <div class="list list_map">
              <div class="maps">
                <div class="map-info">
                  <div class="map_title">联系方式</div>
                  <div class="map_content">
                    <div class="address_list" v-for="item in map_info">
                      <p>{{item.name}}</p>
                      <p>服务热线：{{item.tel}}</p>
                      <p>地址：{{item.address}}</p>
                    </div>
                  </div>
                  <div class="white"></div>
                </div>
                <baidu-map class="map" :center="{lng:105.1194597779, lat:38.0554697575}" :zoom="10">
                  <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>

                  <bm-marker :position="{lng:105.690888, lat:37.500878}" :dragging="true" @click="infoWindowOpen1">
                    <bm-info-window :show="show1" @close="infoWindowClose1" @open="infoWindowOpen1">宁夏中宁县宁安东街北侧杞乡经典B区14#商业楼</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.863283, lat: 37.676189}" :dragging="true" @click="infoWindowOpen2">
                    <bm-info-window :show="show2" @close="infoWindowClose2" @open="infoWindowOpen2">宁夏中宁县渠口农场渠口医院对面向北50米</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.875885, lat: 37.556946}" :dragging="true" @click="infoWindowOpen3">
                    <bm-info-window :show="show3" @close="infoWindowClose3" @open="infoWindowOpen3">宁夏中宁县鸣沙镇政府斜对面</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.682723, lat: 37.548866}" :dragging="true" @click="infoWindowOpen4">
                    <bm-info-window :show="show4" @close="infoWindowClose4" @open="infoWindowOpen4">宁夏中宁县石空镇政府北侧</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.682928, lat: 37.494885}" :dragging="true" @click="infoWindowOpen5">
                    <bm-info-window :show="show5" @close="infoWindowClose5" @open="infoWindowOpen5">宁夏中宁县富康广场南侧</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.691166, lat: 37.486631}" :dragging="true" @click="infoWindowOpen6">
                    <bm-info-window :show="show6" @close="infoWindowClose6" @open="infoWindowOpen6">宁夏中宁县新堡镇煜基金庭雅园1号楼综合楼</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.557044, lat: 37.4093}" :dragging="true" @click="infoWindowOpen7">
                    <bm-info-window :show="show7" @close="infoWindowClose7" @open="infoWindowOpen7">宁夏中宁县大战场镇西街北侧014号</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.823503, lat: 37.673099}" :dragging="true" @click="infoWindowOpen8">
                    <bm-info-window :show="show8" @close="infoWindowClose8" @open="infoWindowOpen8">宁夏中宁县太阳梁乡乡政府旁边</bm-info-window>
                  </bm-marker>

                  <bm-marker :position="{lng: 105.684324, lat: 37.50961}" :dragging="true" @click="infoWindowOpen9">
                    <bm-info-window :show="show9" @close="infoWindowClose9" @open="infoWindowOpen9">宁夏中宁县水木兰亭北门西侧10-1</bm-info-window>
                  </bm-marker>

                </baidu-map>
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
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        nav_eq:0,
        jieshao:{
          title:'',
          content:''
        },
        fazhan:{
          title:'',
          describe:''
        },
        left_list:['公司介绍','发展历程','网点分布'],
        map_info:[
          {name:"宁夏中宁青银村镇银行股份有限公司",tel:"0955-5795512",address:"宁夏中宁县宁安东街北侧杞乡经典B区14#商业楼"},
          {name:"宁夏中宁青银村镇银行股份有限公司渠口支行",tel:"0955-5692085",address:"宁夏中宁县渠口农场渠口医院对面向北50米"},
          {name:"宁夏中宁青银村镇银行股份有限公司鸣沙支行",tel:"0955-5711969",address:"宁夏中宁县鸣沙镇政府斜对面"},
          {name:"宁夏中宁青银村镇银行股份有限公司石空支行",tel:"0955-5635521",address:"宁夏中宁县石空镇政府北侧"},
          {name:"宁夏中宁青银村镇银行股份有限公司富康支行",tel:"0955-5795512",address:"宁夏中宁县富康广场南侧"},
          {name:"宁夏中宁青银村镇银行股份有限公司新堡支行",tel:"0955-5715895",address:"宁夏中宁县新堡镇煜基金庭雅园1号楼综合楼"},
          {name:"宁夏中宁青银村镇银行股份有限公司大战场支行",tel:"0955-7647901",address:"宁夏中宁县大战场镇西街北侧014号"},
          {name:"宁夏中宁青银村镇银行股份有限公司太阳梁支行",tel:"0955-3953369",address:"宁夏中宁县太阳梁乡乡政府旁边"},
          {name:"宁夏中宁青银村镇银行股份有限公司红苑社区支行",tel:"0955-5729898",address:"宁夏中宁县水木兰亭北门西侧10-1"},
        ]
      };
    },
    created:function () {
      this.getData();
    },
    methods: {
      change(eq){
        this.nav_eq = eq;
      },
      infoWindowClose1 () {
        this.show1 = false
      },
      infoWindowOpen1 () {
        this.show1 = true
      },

      infoWindowClose2 () {
        this.show2 = false
      },
      infoWindowOpen2 () {
        this.show2 = true
      },

      infoWindowClose3 () {
        this.show3 = false
      },
      infoWindowOpen3 () {
        this.show3 = true
      },

      infoWindowClose4 () {
        this.show4 = false
      },
      infoWindowOpen4 () {
        this.show4 = true
      },

      infoWindowClose5 () {
        this.show5 = false
      },
      infoWindowOpen5 () {
        this.show5 = true
      },

      infoWindowClose6 () {
        this.show6 = false
      },
      infoWindowOpen6 () {
        this.show6 = true
      },

      infoWindowClose7 () {
        this.show7 = false
      },
      infoWindowOpen7 () {
        this.show7 = true
      },

      infoWindowClose8 () {
        this.show8 = false
      },
      infoWindowOpen8 () {
        this.show8 = true
      },

      infoWindowClose9 () {
        this.show9 = false
      },
      infoWindowOpen9 () {
        this.show9 = true
      },
      tohome(){
        this.$router.push({path:`/home/`})
      },
      getData(){
        this.$http.get('http://www.nxqybank.com/pc/index.php/Index/jiesao').then(response => {
          this.jieshao = response.data.data.article;
//          console.log("获取数据成功");
//          console.log(this.datas);
        },response =>{
          console.log("数据加载失败")
        });
        this.$http.get('http://www.nxqybank.com/pc/index.php/Index/fazhan').then(response => {
          this.fazhan = response.data.data.article;
//          console.log("获取数据成功");
//          console.log(this.datas);
        },response =>{
          console.log("数据加载失败")
        })
      },
    }
  }
</script>
<style>
  .el-timeline-item__tail {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #409EFF;
  }
  .el-timeline-item__node {
    background-color: #409EFF;
  }
  .el-timeline-item {
    margin-left: 1px;
  }
</style>
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
  .active{
    color:#4EC9F5;
  }
  .guanyu_content{
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
    .guanyu_bg{
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
            float: left;
            border: 1px solid #EBEEF5;
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
              width: 95%;
              float: left;
              margin-left: 5%;
              margin-top: 1%;
              .title{
                width: 100%;
                float: left;
                line-height: 50px;
                text-align: center;
                font-size: 18px;
                font-weight: 600;
                border:none;
              }
              .contents{
                width: 100%;
                float: left;
                font-size: 14px;
              }
            };
            .list_map{
              height: 500px;
              .maps{
                width: 100%;
                height: 100%;
                float: left;
                .map-info{
                  width: 30%;
                  height: 100%;
                  float: left;
                  position: relative;
                  .white{
                    width: 18px;
                    position: absolute;
                    right: 0;
                    top: 52px;
                    height: 90%;
                    background-color: white;
                  }
                  .map_title{
                    width: 100%;
                    float: left;
                    line-height: 50px;
                    font-size: 16px;
                    text-align: center;
                    border-bottom: 1px solid #4EC9F5;
                  }
                  .map_content{
                    width: 100%;
                    float: left;
                    height: 90%;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    .address_list{
                      width: 100%;
                      float: left;
                      margin-top: 10px;
                      p{
                        width: 100%;
                        float: left;
                        font-size: 13px;
                        line-height: 20px;
                      };
                      p:nth-child(1){
                        font-size: 15px;
                        font-weight: 600;
                      }
                    }
                  }
                }
                .map{
                  width: 68%;
                  height: 100%;
                  float: left;
                  margin-left: 2%;
                  .bm-view {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          };
        }
      }
    }
  }
</style>
