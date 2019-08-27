<template>
  <div class="tousu_content">
    <div class="navs_h"></div>
    <div class="title">投诉建议</div>
    <img class="tousu_bg" src="../../../static/img/product_bg.jpg" alt="">
    <div class="content">
      <div class="content_title">
        <span @click="tohome()">首页</span> > <span>投诉建议</span> >
      </div>
      <div class="content_contents">
        <div class="forms">
          <!--<div class="tips">投诉建议：请填写下列内容进行投诉</div>-->
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
            <el-form-item label="联系人">
              <el-input v-model="form.user"></el-input>
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
</template>
<script>
  export default {
    data() {
      return {
        form: {
          region: '',
          name: '',
          desc: '',
          tel:'',
          user:''
        },
        formLabelWidth: '80px',
        limitNum: 1,
      };
    },
    methods: {
      tohome(){
        this.$router.push({path:`/home/`})
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
          url: 'http://www.nxqybank.com/pc/index.php/Index/ajax',
          type: 'post',
          data:{
            data:this.form,
          },
          success: function (res) {
            console.log(res);
            alert('提交成功')
            setTimeout(() =>{
              window.location.reload()
            },1000);

          }
        })
      }
    }
  }
</script>
<style>
  .upload-demo{
    margin-left: 2%;
  }
  input[type="file"] {
    display: none;
  }
  .el-upload-list{
    width: 200px;
  }
  .el-select {
    width: 135px;
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
  .tousu_content{
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
    .tousu_bg{
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
        margin-top: 2%;
        margin-bottom: 5%;
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
        }
      }
    }
  }
</style>
