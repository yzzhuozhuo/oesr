<template>
  <div class="main">
    <div class="main-content">
      <div class="form-content" v-if="!hasRegister">
        <!-- <div>欢迎登录</div> -->
        <el-form ref="form" :model="loginForm" label-width="80px" class="form-box">
          <el-form-item label="" class="title">
            <div>注册账号</div>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="loginForm.tel" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="验证码" class="code">
            <el-input v-model="loginForm.password" class="get-code-inp" placeholder="请输入验证码"></el-input>
            <el-button type="success" plain class="get-code-btn" size="small">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="重输密码">
            <el-input v-model="loginForm.password" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="" class="login-btn">
            <el-button type="primary" class="btn" @click="register">立即注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-info" v-if="hasRegister">
        <div class="user-info-content">
          <div class="head">
            <span>基本信息填写</span>
            <div class="btn">
              <el-button @click="updateUserInfo" type="primary">保存</el-button>
            </div>
          </div>
          <div class="base-info">
            <el-form label-position="right" label-width="100px" :model="newUserInfo">
              <el-form-item label="我的昵称">
                <el-input v-model="newUserInfo.username" placeholder="请输入昵称"></el-input>
              </el-form-item>
              <el-form-item label="我的性别">
                <div>
                  <el-radio v-model="newUserInfo.sex" label="male">男</el-radio>
                  <el-radio v-model="newUserInfo.sex" label="female">女</el-radio>
                </div>
              </el-form-item>
              <el-form-item label="我的简介">
                <el-input v-model="newUserInfo.introduction" type="textarea" placeholder="请输入个人简介"></el-input>
              </el-form-item>
              <el-form-item label="我居住地">
                <el-input v-model="newUserInfo.address" placeholder="请输入居住地"></el-input>
              </el-form-item>
              <el-form-item label="毕业年份">
                <el-input v-model="newUserInfo.graduateTime" placeholder="请输入毕业年份"></el-input>
              </el-form-item>
              <el-form-item label="我的学历">
                <el-input v-model="newUserInfo.education" placeholder="请输入学历"></el-input>
              </el-form-item>
              <el-form-item label="我的学校">
                <el-input v-model="newUserInfo.school" placeholder="请输入学校"></el-input>
              </el-form-item>
              <el-form-item label="我想去的公司">
                <el-input v-model="newUserInfo.loveCompany" placeholder="请输入想去的公司"></el-input>
              </el-form-item>
              <el-form-item label="感兴趣的工作">
                <div>
                  <el-select v-model="newUserInfo.interestedClassify" placeholder="请选择方向">
                    <el-option
                      v-for="item in classifyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="newUserInfo.interestedPost" placeholder="请选择职位">
                    <el-option
                      v-for="item in postOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegisterAccount',
  data () {
    return {
      loginForm: {
        tel: '',
        password: '',
        automaticLogin: true
      },
      hasRegister: false,
      newUserInfo: {
        username: '',
        avatar: '',
        sex: '',
        introduction: '',
        address: '',
        graduateTime: '',
        education: '',
        school: '',
        loveCompany: '',
        interestedClassify: '',
        interestedPost: ''
      },
      classifyOptions: [
        {
          label: '技术（软件）/信息技术类',
          value: 'software'
        },
        {
          label: '技术（硬件）/电子技术类',
          value: 'hardware'
        }
      ],
      postOptions: [
        {
          label: '前端工程师',
          value: '前端工程师'
        },
        {
          label: 'Java工程师',
          value: 'Java工程师'
        },
        {
          label: 'C++工程师',
          value: 'C++工程师'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    register () {
      // 立即注册之后，要填写个人信息，将数据保存数据库，用户主页的个人信息的数据就来源此
      this.hasRegister = true
    },
    updateUserInfo () {
      console.log(123, this.newUserInfo)
      this.$router.replace({
        path: 'login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  .main-content {
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 730px;
    background: url('http://static.nowcoder.com/images/res/infoComplete/bg.jpg') no-repeat;
    background-size: 100% 100%;
    .form-content {
      padding: 30px 80px 70px;
      width: 400px;
      // height: 300px;
      border-radius: 4px;
      background: rgba(255,255,255,.8);
      margin: 60px auto 0;
      border: 1px solid #eee;
      height: 320px;
      display: flex;
      justify-content: center;
      // flex-direction: column;
      align-content: center;
      .form-box {
        margin-left: -40px;
        width: 80%;
        .title {
          text-align: center;
        }
        .title div {
          margin-left: -20px;
          font-size: 20px;
          // color: #909090;
        }
        .code {
          .get-code-inp {
            width: 54%;
          }
          .get-code-btn {
            width: 40%;
            margin-left: 6px;
          }
        }
        .forgot-bth {
          padding-left: 76px;
        }
        .login-btn {
          margin-top: 15px;
          margin-bottom: 0;
          .btn {
            width: 100%;
          }
        }
        .register-btn {
          padding-left: 94px;
        }
      }
    }
  }
}

.user-info {
  background: #fff;
  padding: 20px 30px 60px 30px;
  margin: 20px 0 20px 0;
  .user-info-content {
    .head {
      border-bottom: 1px solid #d4d4d4;
      padding-bottom: 10px;
      font-weight: bold;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
    }
    .base-info {
      padding-left: 30px;
      .el-form-item div {
        color: #999;
      }
      .el-input {
        width: 50%;
      }
      .footer-btn {
        display: flex;
        justify-content: center;
        padding: 15px 0;
      }
    }
  }
}

</style>
