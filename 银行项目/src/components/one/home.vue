<template>
  <div class="home_content">
    <!--轮播图-->
    <div class="banner">
      <el-carousel height="600px" loop>
        <el-carousel-item v-for="item in home_data.loops" v-bind:key="item.id">
          <img class="banner_img" v-bind:src="item.img"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--网银登录-->
    <div class="bank_login">
      <div class="bank_login_contents">
        <div class="bank_login_content">
          <div class="bank_login_list">
            <span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;
            <a :href="home_data.denglu1.url">{{home_data.denglu1.title}}</a>
          </div>
          <div class="bank_login_list">
            <span class="glyphicon glyphicon-equalizer"></span>&nbsp;&nbsp;
            <a :href="home_data.denglu2.url">{{home_data.denglu2.title}}</a>
          </div>
          <div class="bank_login_list">
            <span class="glyphicon glyphicon-download"></span>&nbsp;&nbsp;
            <a :href="home_data.denglu3.url">{{home_data.denglu3.title}}</a>
          </div>
        </div>
      </div>
    </div>
    <!--产品展示-->
    <div class="product_show">
      <div class="product_title">产品展示</div>
      <div class="product_list" v-for="item in home_data.chanpin" v-bind:key="item.id" @click="toDetail_c(item.id)">
        <img v-bind:src="item.img">
        <div>{{item.title}}</div>
      </div>
    </div>
    <!--文化建设-->
    <div class="culture">
      <div class="culture_title">{{home_data.jianshe_name}}</div>
      <div class="culture_content">
        <div class="culture_content_left">
          <div class="left_top" @click="toDetail(home_data.jianshe_xinwen.id)">
            <div class="top_title">{{home_data.jianshe_xinwen.title}}</div>
            <div class="top_content">{{home_data.jianshe_xinwen.describe}}</div>
            <div class="more">[ 详情 ]</div>
          </div>
          <div class="left_bottom">
            <div class="bottom_nav">
              <div class="nav_list" v-for="(item,index) in home_data.jianshe" :class="{active:index == num}"@click="nav_list(index)">
                  {{item.title}}
              </div>
            </div>

            <div class="bottom_content" v-for="(item,index) in home_data.jianshe" :class="{none:index != num}">
              <div class="nav_content" v-show="num == index">
                <div class="content_list" v-for="x in item.article" @click="toDetail(x.id)">
                  <div class="content_num">
                    <div></div>
                  </div>
                  <div class="content_content">
                    {{x.title}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="culture_content_right">
          <img v-bind:src="home_data.jianshe_img" alt="">
        </div>
      </div>
    </div>
    <!--媒体报道-->
    <div class="media">
      <div class="media_title">媒体&报道</div>
      <div class="media_content">
        <div class="media_list" v-for="item in home_data.hezuo.article" @click="toDetail(item.id)">
          <img v-bind:src="item.img">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.describe}}</div>
          <div class="more">更多 >></div>
        </div>
      </div>
    </div>
    <!--服务与休闲-->
    <div class="serve">
      <div class="serve_title">服务&休闲</div>
      <div class="serve_content">
        <div class="content_list">
          <div class="list" v-for="item in home_data.bianming">
            <div class="title">{{item.title}}</div>
            <div class="content">
              <div v-for="x in item.level_2" @click="tobm()">
                <img v-bind:src="x.img" alt="">
                <p>{{x.title}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content_list">
          <div class="list">
            <div v-for="item in home_data.bianming_data1" @click="toDetail(item.id)">
              <span class="el-icon-caret-right"></span>
              {{item.title}}
            </div>
          </div>
          <div class="list">
            <div v-for="item in home_data.bianming_data2" @click="toDetail(item.id)">
              <span class="el-icon-caret-right"></span>
              {{item.title}}
            </div>
          </div>
          <div class="list">
            <div v-for="item in home_data.bianming_data3" @click="toDetail(item.id)">
              <span class="el-icon-caret-right"></span>
              {{item.title}}
            </div>
          </div>
        </div>
        <div class="content_list">
          <div class="title">休闲专区</div>
          <div class="xiuxian">
            <div class="xiuxian_content">
              <div class="xiuxian_nav">
                <div class="nav_list"  v-for="(item,index) in home_data.xiuxian" :class="{active:index == num1}" @click="serve_nav_list(index)">
                  {{item.title}}
                </div>
              </div>
              <div class="xiuxian_bottom" v-for="(item,index) in home_data.xiuxian" :class="{none:index != num1}">
                <div class="nav_content" v-show="num1 == index">
                  <img v-bind:src="item.img" alt="">
                  <div class="list" v-for="x in item.article" @click="toDetail(x.id)">
                    <span class="el-icon-caret-right"></span>
                    {{x.title}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--关于我行-->
    <div class="about">
    <div class="about_title">关于我行</div>
    <div class="about_content">
      <div class="about_nav">
        <div class="nav_list"  v-for="(item,index) in guanyu_list" :class="{active:index == num2}" @click="about_nav_list(index)">
          {{item}}
        </div>
      </div>
      <div class="about_bg"></div>
      <div class="content_list">
        <div class="nav_content" v-show="num2 ==0">
          <div class="honor_list" v-for="item in home_data.qiye.article" @click="toDetail(item.id)">
            <img v-bind:src="item.img" alt="">
            <p>{{item.title}}</p>
          </div>
        </div>
        <div class="nav_content" v-show="num2 ==1">
          <div class="jieshao">
            <div class="biaoti">{{home_data.jiesao.article.title}}</div>
            <div class="neirong">
              <div v-html="home_data.jiesao.article.content"></div>
            </div>
          </div>
        </div>
        <div class="nav_content" v-show="num2 ==2">
          <div class="block">
            <el-timeline>
              <el-timeline-item v-for="item in home_data.fazhan.article" v-bind:timestamp="item.title" placement="top" v-bind:key="item.id">
                <el-card>
                  <h4>{{item.describe}}</h4>
                  <p>{{item.title}}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
        <div class="nav_content" v-show="num2 ==3">
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
        <div class="nav_content" v-show="num2 ==4">
          <div class="forms">
            <div class="tips">投诉建议：请填写下列内容进行投诉</div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="提交类型">
                <el-select v-model="form.region" placeholder="请选择类型">
                  <el-option label="投诉" value="tousu"></el-option>
                  <el-option label="建议" value="jianyi"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="提交标题">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="提交内容">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.tel"></el-input>
              </el-form-item>
              <el-form-item label="上传文件" :label-width="formLabelWidth">
                <el-upload
                  ref="upload"
                  action="http://nxzn.orzc.cn/pc/index.php/Index/imgs"
                  :limit=limitNum
                  :auto-upload="false"
                  :before-upload="handleBeforeUpload">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">请上传png、gif、jpg、jpeg、txt、docx、doc格式文件，且文件大小不能超过2MB</div>
                </el-upload>
              </el-form-item>
            </el-form>
            <button class="btn" @click="onSubmit()">提交信息</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!--飘窗-->
    <div id="float" class="float-window" v-show="float">
      <div class="float-close" @click="closefloat()">关闭</div>
      <a target="_blank" :href="home_data.piaochuang.url">
        <img :src="home_data.piaochuang.img" alt="">
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        float:false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        num:0,
        num1:0,
        num2:0,
        form: {
          region: '',
          name: '',
          desc: '',
          tel:'',
        },
        formLabelWidth: '80px',
        limitNum: 1,
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
        ],
        home_data:{
          loop:[],
          chanpin:[],
          jianshe_name:'',
          jianshe_img:'',
          jianshe_xinwen:{
            id:'',
            title:'',
            img:'',
            describe:'',
          },
          jianshe:[
            {
              article:[]
            }
          ],
          hezuo:{
            article:[]
          },
          bianming_name:'',
          bianming:[
            {
              level_2:[]
            }
          ],
          xiuxian_name:'',
          xiuxian:[
            {
              img:'',
              article:[]
            }
          ],
          qiye:{
            article:[
              {
                title:'',
                img:''
              }
            ]
          },
          jiesao:{
            article:[
              {
                title:'',
                content:''
              }
            ]
          },
          fazhan:{
            article:[
              {
                id:'',
                title:'',
                describe:''
              }
            ]
          },
          piaochuang:{
            img:'',
            url:'',
            types:''
          },
          denglu1: {
            title: "",
            url: ""
          },
          denglu2: {
            title: "",
            url: ""
          },
          denglu3: {
            title: "",
            url: ""
          },
        },
        guanyu_list:["企业荣誉","公司介绍","发展历程","网点分布","投诉建议"],
      }
    },
    created:function () {
      this.getData();
    },
    methods:{
      //百度地图
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
      // 上传文件之前的钩子
      handleBeforeUpload(file){
//        console.log('before')
        let size = file.size / 1024 / 1024 / 2
        if(size > 2) {
          this.$notify.warning({
            title: '警告',
            message: '文件大小必须小于2M'
          })
        }
      },
      // 文件列表移除文件时的钩子
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      onSubmit() {
        this.$refs.upload.submit();
        $.ajax({
          url: 'http://nxzn.orzc.cn/pc/index.php/Index/ajax',
          type: 'post',
          data:{
            data:this.form,
          },
          success: function (res) {
            console.log(res);
            setTimeout(() =>{
              window.location.reload()
            },2000);
          }
        })
      },
      nav_list(index) {
        this.num = index;
      },
      closefloat(){
        this.float=false;
      },
      serve_nav_list(index) {
        this.num1 = index;
      },
      about_nav_list(index) {
        this.num2 = index;
      },
      getData(){
        this.$http.get('http://nxzn.orzc.cn/pc/index.php/Index/index').then(response => {
          this.home_data = response.data;
//          console.log("home获取数据成功");
//          console.log(this.home_data);
          if(this.home_data.types == 1){
            setTimeout(() =>{
              this.float=true;
            },3000);
//            console.log(this.home_data.types)
          }else{
//            console.log(this.home_data.types)
            return
          }
        },response =>{
          console.log("数据加载失败");
        })

      },
      toDetail(id){
        this.$router.push({path:`/new_detail/${id}`})
      },
      toDetail_c(id){
        this.$router.push({path:`/zs_detail/${id}`})
      },
      tobm(){
        this.$router.push({path:`/bianming`})
      },
    },
  }
</script>
<style>
  .el-carousel__indicators {
    bottom: 4rem;
  }
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
  input[type="file"] {
    display: none;
  }
  #float{
    width: 20%;
    position: fixed;
    z-index: 999;
    animation: 25s float infinite linear;
  }
  #float:hover{
    animation-play-state:paused;
  }
  #float a img{
    width: 100%;
  }
  .float-close{
    width: 20%;
    text-align: center;
    position: relative;
    /*top: -10%;*/
    left:80%;
    color: black;
    cursor: pointer;
  }
  @-webkit-keyframes float{
    0%{
      position: fixed;
      left: 0;
      top: 200px;
    }
    10%{
      position: fixed;
      left: 25%;
      top: 320px;
    }
    20%{
      position: fixed;
      left: 45%;
      top: 230px;
    }
    30%{
      position: fixed;
      left: 65%;
      top: 360px;
    }
    40%{
      position: fixed;
      left: 80%;
      top: 270px;
    }
    50%{
      position: fixed;
      left: 70%;
      top: 210px;
    }
    60%{
      position: fixed;
      left: 55%;
      top: 310px;
    }
    70%{
      position: fixed;
      left: 40%;
      top: 220px;
    }
    80%{
      position: fixed;
      left: 25%;
      top: 340px;
    }
    90%{
      position: fixed;
      left: 10%;
      top: 260px;
    }
    100%{
      position: fixed;
      left: 0;
      top: 200px;
    }
  }
</style>
<style lang="less" scoped>
  @color:#FE9600;
  @color1:#005BB9;
  .border{
    border: 1px solid;
    box-sizing: border-box;
  }
  .none{
    display: none;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home_content{
    width: 100%;
    float: left;
    .banner{
      width: 100%;
      height: 600px;
      float: left;
      .banner_img{
        width: 100%;
        height: 100%;
      }
    }
    .bank_login{
      width: 100%;
      position: relative;
      float: left;
      margin-top: -4rem;
      z-index: 3;
      color: white;
      .bank_login_contents{
        width: 100%;
        background: rgba(155, 155, 155, 0.6);
        height: 4rem;
        float: left;
        .bank_login_content{
          width: 60%;
          margin-left: 20%;
          float: left;
          .bank_login_list{
            width: 33.33%;
            float: left;
            text-align: center;
            line-height: 4rem;
            color: white;
            font-size: 16px;
            cursor: pointer;
            a{
              text-decoration: none;
              color: white;
            }
          }
          .bank_login_list:hover{
            border-bottom: 2px solid @color;
            color: white;
            background-color: rgba(78,201,245,0.8);
          }
        }

      }
    }
    .product_show{
      width: 100%;
      height: 420px;
      float: left;
      .product_title{
        width: 100%;
        height: 95px;
        float: left;
        text-align: center;
        line-height: 95px;
        font-size: 24px;
        font-weight: 600;
        background-image: url("../../../static/img/product_bg.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: @color;
      }
      .product_list{
        width: 30%;
        height: 280px;
        float: left;
        margin-left: 2.5%;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          border-radius:5px;
        }
        div{
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          font-size: 20px;
          background-color: rgba(0,0,0,0.5);
          text-align: center;
          line-height: 280px;
          color: white;
          border-radius: 5px;
          display: none;
        }
        &:hover div{
          display: block;
        }
      }
    }
    .culture{
      width: 100%;
      height: 440px;
      float: left;
      background-color: #DEE2E3;
      .culture_title{
        width: 100%;
        height: 95px;
        float: left;
        text-align: center;
        line-height: 95px;
        font-size: 24px;
        font-weight: 600;
        color: @color;
      }
      .culture_content{
        width: 60%;
        height: 300px;
        margin-left: 20%;
        float: left;
        .culture_content_left{
          width: 45%;
          height: 100%;
          float: left;
          .left_top{
            width: 100%;
            height: 40%;
            float: left;
            cursor: pointer;
            .top_title{
              width: 100%;
              height: 20%;
              float: left;
              font-size: 16px;
              font-weight: 600;
              color:#343434;
              letter-spacing: 2px;
            }
            .top_content{
              width: 100%;
              height: 50%;
              float: left;
              font-size: 14px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              color: #848384;
              letter-spacing: 2px;
            };
            .more{
              float: left;
              padding: 1px;
              font-size: 14px;
              /* border: 1px solid #FE9600; */
              color: #FE9600;
              margin-top: 1%;
            }
          }
          .left_bottom{
            width: 100%;
            height: 60%;
            float: left;
            .bottom_nav{
              width: 100%;
              height: 15%;
              float: left;
              color: #848384;
              .nav_list{
                width: 20%;
                height: 25px;
                float: left;
                font-size: 16px;
                text-align: center;
                cursor: pointer;
              }
              .active {
                color: @color;
                border-bottom: 2px solid @color;
              }
            }
            .bottom_content{
              width: 100%;
              height: 85%;
              margin-top: 2%;
              float: left;
              .nav_content{
                width: 100%;
                height: 100%;
                color: #848384;
                font-size: 14px;
                font-weight: 600;
                .content_list{
                  width: 100%;
                  float: left;
                  margin-top: 5px;
                  cursor: pointer;
                  letter-spacing: 2px;
                  .content_num{
                    width: 10px;
                    height: 10px;
                    border-radius:50%;
                    float: left;
                    border: 1px solid @color;
                    box-sizing: content-box;
                    margin-top: 3px;
                    div{
                      width: 6px;
                      height: 6px;
                      float: left;
                      background-color: @color;
                      margin-top: 2px;
                      margin-left: 2px;
                      border-radius:50%;
                    }
                  }
                  .content_content{
                    width: 80%;
                    float: left;
                    margin-left: 2%;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    &:hover{
                      color: @color;
                    }
                  }
                }
              }
            }
          }
        }
        .culture_content_right{
          width: 52%;
          height: 100%;
          float: left;
          margin-left: 3%;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .media{
      width: 100%;
      height: 595px;
      float: left;
      .media_title{
        width: 100%;
        height: 95px;
        float: left;
        text-align: center;
        line-height: 95px;
        font-size: 24px;
        font-weight: 600;
        color: @color;
      }
      .media_content{
        width: 60%;
        height: 450px;
        margin-left: 20%;
        float: left;
        .media_list{
          width: 32%;
          height: 100%;
          float: left;
          padding: 5px;
          border: 2px solid #bfbcbf;
          cursor: pointer;
          &:hover{
            border: 2px solid @color;
          }
          img{
            width: 100%;
          }
          .title{
            width: 100%;
            float: left;
            margin-top: 5%;
            font-size: 16px;
            font-weight: 600;
            color: #343434;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            letter-spacing: 2px;
            &:hover{
              color: @color;
            }
          }
          .content{
            width: 100%;
            float: left;
            margin-top: 2%;
            font-size: 13px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            color: #848384;
            letter-spacing: 2px;
          }
          .more{
            float: left;
            padding: 1px;
            font-size: 12px;
            border: 1px solid @color;
            color: @color;
            margin-top: 7%;
          }
        }
        .media_list:nth-child(2){
          margin-left:2%;
          margin-right: 2%;
        }
      }
    }
    .serve{
      width: 100%;
      height: 540px;
      float: left;
      background-image: url("../../../static/img/004.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .serve_title{
        width: 100%;
        height: 95px;
        float: left;
        text-align: center;
        line-height: 95px;
        font-size: 24px;
        font-weight: 600;
        color: @color;
      }
      .serve_content{
        width: 60%;
        height: 425px;
        float: left;
        margin-left: 20%;
        .content_list{
          width: 32%;
          height: 100%;
          float: left;
          cursor: pointer;
        }
        .content_list:nth-child(1){
          .list{
            width: 100%;
            height: 33%;
            float: left;
            .title{
              width: 100%;
              float: left;
              font-size: 15px;
              font-weight: 600;
            }
            .content{
              width:100%;
              float: left;
              margin-top: 3%;
              div{
                width: 33.33%;
                float: left;
                &:hover{
                  color: @color;
                };
                img{
                  display: block;
                  width: 50%;
                  float: left;
                  margin-left: 25%;
                  transition: 0.2s;
                  &:hover{
                    transform: scale(1.1,1.1);
                    transition: 0.2s;
                  }
                }
                p{
                  width: 100%;
                  margin-top: 12%;
                  text-align: center;
                  float: left;
                  font-size: 15px;
                }
              }
            }
          }
        }
        .content_list:nth-child(2){
          margin-left: 2%;
          margin-right: 2%;
          margin-top: 1%;
          .list{
            width: 100%;
            height: 33.33%;
            float: left;
            div{
              width: 100%;
              color:#848384;
              float: left;
              margin-top: 5%;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              letter-spacing: 2px;
              &:hover{
                color: @color;
              }
              span{
                color: @color;
              }
            }
          }
        }
        .content_list:nth-child(3){
          .title{
            width: 100%;
            float: left;
            font-size: 15px;
            font-weight: 600;
          }
          .xiuxian{
            width: 98%;
            height: 93%;
            margin-top: 2%;
            float: left;
            border: 3px solid white;
            .xiuxian_content{
              width: 96%;
              height: 96%;
              float: left;
              margin-left: 2%;
              margin-top: 2%;
              .active{
                color: #FE9600;
                border-bottom: 2px solid #FE9600;
              }
              .xiuxian_nav{
                width: 100%;
                height: 10%;
                float: left;
                .nav_list{
                  width: 33.33%;
                  height: 70%;
                  float: left;
                  font-size: 14px;
                  text-align: center;
                  cursor: pointer;
                }
              }
              .xiuxian_bottom{
                width: 100%;
                height: 90%;
                float: left;
                .nav_content{
                  width: 100%;
                  height: 100%;
                  img{
                    width: 100%;
                    height: 60%;
                    display: block;
                    float: left;
                  }
                  .list{
                    width: 100%;
                    float: left;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color:#848384;
                    margin-top: 2%;
                    letter-spacing: 2px;
                    &:hover{
                      color: @color;
                    }
                    span{
                      color: @color;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .about{
      width: 100%;
      height: 820px;
      float: left;
      .about_title{
        width: 100%;
        height: 95px;
        float: left;
        text-align: center;
        line-height: 95px;
        font-size: 24px;
        font-weight: 600;
        color: @color;
      }
      .about_content{
        width: 100%;
        height: 725px;
        float: left;
        position: relative;
        .about_nav{
          width: 50%;
          height: 55px;
          margin-left: 25%;
          float: left;
          .nav_list{
            width: 15%;
            float: left;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
            color: #848384;
            margin-left: 6.25%;
            border-bottom: 2px solid #848384;
            cursor: pointer;
          }
          .active{
            color: #FE9600;
            border-bottom: 2px solid #FE9600;
          }
          .nav_list:nth-child(1){
            margin-left: 0;
          }
        }
        .content_list{
          width: 60%;
          height: 670px;
          float: left;
          margin-left: 20%;
          overflow-x: hidden;
          .nav_content{
            width: 100%;
            height: 100%;
            float: left;
            overflow-x: hidden;
            .jieshao{
              margin-top: 5%;
              float: left;
              width: 100%;
              height: 90%;
              overflow-x: hidden;
              overflow-y: scroll;
              margin-left: 18px;
            }
            .honor_list{
              width: 30%;
              height:47%;
              float: left;
              &:hover{
                p{
                  color: @color;
                }
                img{
                  transform: scale(1.03,1.03);
                  transition: 0.2s;
                }
              };
              img{
                width: 100%;
                float: left;
                transition: 0.2s;
              };
              p{
                width:100%;
                text-align: center;
                float: left;
                margin-top: 2%;
                letter-spacing: 2px;
                color: #848384;
              }
            }
            .honor_list:nth-child(1){
              margin-top: 20px;
            };
            .honor_list:nth-child(2){
              margin-top: 20px;
            };
            .honor_list:nth-child(3){
              margin-top: 20px;
            };
            .honor_list:nth-child(2){
              margin-left: 5%;
              margin-right: 5%;
            };
            .honor_list:nth-child(5){
              margin-left: 5%;
              margin-right: 5%;
            };
            .biaoti{
              width: 100%;
              float: left;
              text-align: center;
              color: #505050;
              font-size: 16px;
              font-weight: 600;
              line-height: 4rem;
            };
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
                margin-bottom: 3%;
              }
            };
            .block{
              margin-top: 5%;
              float: left;
              width: 100%;
              height: 90%;
              overflow-x: hidden;
              overflow-y: scroll;
              margin-left: 18px;
            }
            .forms{
              width: 60%;
              float: left;
              margin-left: 20%;
              margin-top: 5%;
              .tips{
                width: 100%;
                font-size: 16px;
                text-align: center;
                line-height: 30px;
                float: left;
                margin-bottom: 80px;
              };
              .btn{
                width: 20%;
                height: 35px;
                border-radius: 5px;
                color: white;
                background-color: #409EFF;
                border: none;
                outline: none;
                float: left;
                margin-left: 40%;

              }
            };
            .maps{
              width: 100%;
              height: 100%;
              float: left;
              .map-info{
                width: 30%;
                height: 100%;
                float: left;
                overflow: hidden;
                .map_title{
                  width: 100%;
                  float: left;
                  line-height: 50px;
                  font-size: 16px;
                  text-align: center;
                  margin-left: 18px;
                  border-bottom: 1px solid #4EC9F5;
                }
                .map_content{
                  width: 100%;
                  float: left;
                  height: 90%;
                  margin-left: 18px;
                  overflow-y: scroll;
                  .address_list{
                    width: 100%;
                    float: left;
                    margin-top: 10px;
                    p{
                      display: block;
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
                height: 90%;
                float: left;
                margin-left: 2%;
                margin-top: 5%;
                .bm-view {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          };
          .nav_content:nth-child(2){
            overflow-y: auto;
            margin-left: 18px;
          }
          .nav_content:nth-child(3){
            overflow-y: auto;
            margin-left: 18px;
          }
        }
        .about_bg{
          position: absolute;
          width: 100%;
          height: 670px;
          left: 0;
          top: 55px;
          background-image: url("../../../static/img/003.jpg");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          z-index: -1;
        }
      }
    }
  }
</style>
