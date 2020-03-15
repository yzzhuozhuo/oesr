<template>
  <div class="main">
    <div class="main-content">
      <div class="form-content">
        <!-- <div>欢迎登录</div> -->
        <el-form ref="form" :model="loginForm" label-width="60px" class="form-box">
          <el-form-item label="" class="title">
            <div>欢迎登录智能招聘平台</div>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="loginForm.tel" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="密码" v-if="isAccountLogin">
            <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码" class="code" v-if="isMSMLogin">
            <el-input v-model="loginForm.password" class="get-code-inp" placeholder="请输入验证码"></el-input>
            <el-button type="success" plain class="get-code-btn" size="small">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="类型" class="user-type">
            <el-radio v-model="loginForm.userType" label="student">学生</el-radio>
            <el-radio v-model="loginForm.userType" label="company">企业</el-radio>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox v-model="loginForm.automaticLogin">下次自动登录</el-checkbox>
            <el-button type="text" class="forgot-bth" @click="toPasswordBack">忘记密码？</el-button>
          </el-form-item>
          <el-form-item label="" class="login-btn">
            <el-button type="primary" class="btn" @click="login">立即登录</el-button>
          </el-form-item>
          <el-form-item label="">
            <el-button type="text" @click="toMSMLogin" v-if="isAccountLogin">短信验证登录</el-button>
            <el-button type="text" @click="toAccountLogin" v-if="isMSMLogin">账号密码登录</el-button>
            <el-button type="text" class="register-btn" @click="toRegister">注册账号</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  data () {
    return {
      loginForm: {
        tel: '',
        password: '',
        userType: '', // 用户类型分为，学生和企业
        automaticLogin: true
      },
      isMSMLogin: false,
      isAccountLogin: true
    }
  },
  mounted () {
  },
  methods: {
    toMSMLogin () {
      this.isAccountLogin = false
      this.isMSMLogin = true
    },
    toAccountLogin () {
      this.isMSMLogin = false
      this.isAccountLogin = true
    },
    toPasswordBack () {
      this.$router.push({
        path: 'passwordBack'
      })
    },
    toRegister () {
      this.$router.push({
        path: 'registerAccount'
      })
    },
    login () {
      this.$router.push({
        path: '/'
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
    height: 700px;
    background: url('http://static.nowcoder.com/images/res/infoComplete/bg.jpg') no-repeat;
    background-size: 100% 100%;
    .form-content {
      padding: 40px 70px 50px;
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
        margin-left: -20px;
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
        .user-type {
          margin: -10px 0 -8px;
        }
        .forgot-bth {
          padding-left: 76px;
        }
        .login-btn {
          margin-top: -15px;
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
</style>
