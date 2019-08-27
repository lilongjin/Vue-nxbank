<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_left">
        <div class="logo">
          <img v-bind:src="footers.data.d_logo" alt="">
        </div>

      </div>
      <div class="footer_right">
        <div class="ul" v-for="item in footers.footers">
          <div>{{item.title}}</div>
          <div v-for="x in item.level">
            <a v-bind:href="x.url" target="_blank">{{x.title}}</a>
          </div>
        </div>
      </div>
      <div class="footer_center">
        <div class="footer_right_ma">
        <div class="ma">
        <img v-bind:src="footers.data.l_code" alt="">
        <!--<p>微信订阅号</p>-->
        </div>
        <div class="ma">
        <img v-bind:src="footers.data.r_code" alt="">
        <!--<p>APP下载</p>-->
        </div>
        <div class="ma">
        <img v-bind:src="footers.data.k_code" alt="">
        <!--<p>微信订阅号</p>-->
        </div>
        <div class="ma">
        <img v-bind:src="footers.data.d_code" alt="">
        <!--<p>APP下载</p>-->
        </div>
        </div>
      </div>
      <div class="footer_bottom">
        最终解释权归宁夏青银村镇银行所有&nbsp;&nbsp;&nbsp;
        {{footers.data.copyright}}&nbsp;&nbsp;&nbsp;
        联系电话:&nbsp;&nbsp;&nbsp;{{footers.data.tel}}&nbsp;&nbsp;&nbsp;
        地址:&nbsp;&nbsp;&nbsp;{{footers.data.address}}
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
      this.$http.get('http://www.nxqybank.com/pc/index.php/Index/foo').then(response => {
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
    background-color: #797979;
    border-top: 5px solid #4EC9F5;
    .footer_content{
      width: 70%;
      height: 100%;
      float: left;
      margin-left: 15%;
      .footer_left{
        width: 320px;
        height: 30%;
        float: left;
        margin-left: 130px;
        .logo{
          width: 90%;
          float: left;
          margin-top: 10%;
          img{
            width: 100%;
          }
        };

      };
      .footer_right{
        width: 600px;
        height: 30%;
        float: left;
        .ul{
          width: 100%;
          height: 7rem;
          float: left;
          margin-top: 5%;
          cursor: pointer;
          div{
            font-size: 14px;
            color: white;
            float: left;
            list-style: none;
            margin-right: 2rem;
            a{
              color: white;
              text-decoration: none;
              cursor: pointer;
            }
          }
          div:nth-child(1){
            font-size: 16px;
            font-weight: 600;
            margin-top: 0;
          }
        };

      };
      .footer_center{
        width: 100%;
        float: left;
        .footer_right_ma{
          width: 1120px;
          float: left;
          overflow: hidden;
          .ma{
            width: 150px;
            height: 150px;
            float: left;
            margin-left: 130px;
            img {
              width: 100%;
              height: 100%;
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
        }
      }
      .footer_bottom{
        width: 1280px;
        float: left;
        height: 10%;
        margin-top: 2%;
        font-size: 13px;
        text-align: center;
        color: white;
        text-align: center;
        overflow: hidden;
      }
    }
  }
</style>
