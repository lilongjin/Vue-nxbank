<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_left">
        <div class="logo">
          <img v-bind:src="footers.data.d_logo" alt="">
        </div>
        <div class="tel">
          <p>联系电话</p>
          <p>{{footers.data.tel}}</p>
        </div>
        <div class="address">
          <p>地址：{{footers.data.address}}</p>
          <p>最终解释权归宁夏中宁青银村镇银行所有</p>
          <p>{{footers.data.copyright}}</p>
        </div>
      </div>
      <div class="footer_center">
        <div class="ul" v-for="item in footers.footers">
          <div>{{item.title}}</div>
          <div v-for="x in item.level">
            <a v-bind:href="x.url">{{x.title}}</a>
          </div>
        </div>
      </div>
      <div class="footer_right">
        <div class="ma">
          <img v-bind:src="footers.data.l_code" alt="">
          <p>微信订阅号</p>
        </div>
        <div class="ma">
          <img v-bind:src="footers.data.r_code" alt="">
          <p>APP下载</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        footers:{
          data:{
            tel:'',
            address:'',
            copyright:'',
            l_code: '',
            r_code: '',
            d_logo: ''
          },
          footers:[
            {
              title:'',
              level:[
                {
                  title:'',
                  url:'',
                }
              ]
            }
          ]
        }
      }
    },
    created:function () {
      this.$http.get('http://nxzn.orzc.cn/pc/index.php/Index/foo').then(response => {
        this.footers = response.data;
//      console.log(this.footers)
      },response => {
        console.log("数据加载失败")
      });
    },
  }
</script>
<style lang="less" scoped>
  .border{
    border: 1px solid red;
    box-sizing: border-box;
  }
  .footer{
    width: 100%;
    float: left;
    height: 300px;
    background-color: #535353;
    border-top: 5px solid #4EC9F5;
    .footer_content{
      width: 60%;
      height: 100%;
      float: left;
      margin-left: 20%;
      .footer_left{
        width: 30%;
        height: 100%;
        float: left;
        overflow: hidden;
        .logo{
          width: 60%;
          float: left;
          margin-top: 10%;
          img{
            width: 100%;
          }
        };
        .tel{
          width: 100%;
          float: left;
          margin-top: 10%;
          border-left: 2px solid white;
          p{
            width: 100%;
            display: block;
            float: left;
            color: white;
            text-indent: 2%;
          }
          p:nth-child(1){
            font-size: 12px;
          }
          p:nth-child(2){
            font-size: 16px;
            margin-top: 2%;
          }
        };
        .address{
          width: 90%;
          float: left;
          margin-top: 6%;
          p{
            width: 100%;
            display: block;
            float: left;
            color: white;
            font-size: 12px;
            margin-top: 2%;
          }
        }
      };
      .footer_center{
        width: 50%;
        height: 100%;
        float: left;
        .ul{
          width: 25%;
          float: left;
          margin-top: 8%;
          cursor: pointer;
          div{
            font-size: 14px;
            color: white;
            width: 100%;
            float: left;
            margin-bottom: 10%;
            list-style: none;
            a{
              color: white;
              text-decoration: none;
              cursor: pointer;
            }
          }
          div:nth-child(1){
            font-size: 16px;
            font-weight: 600;
          }
        }
      };
      .footer_right{
        width: 20%;
        height: 100%;
        float: left;
        .ma{
          width: 40%;
          margin-top: 40%;
          float: left;
          img {
            width: 100%;
            display: block;
            float: left;
          }
          p{
            width: 100%;
            color: white;
            text-align: center;
            margin-top: 15%;
            display: block;
            float: left;
            font-size: 12px;
          }
        }
        .ma:nth-child(1){
          margin-right: 20%;
        }
      }
    }
  }
</style>
