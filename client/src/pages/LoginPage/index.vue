<template>
  <div class="main">
    <div class="main-content">
      <div class="form-content">
        <!-- <div>欢迎登录</div> -->
        <el-form
          ref="loginForm"
          :model="loginForm"
          label-width="70px"
          class="form-box"
        >
          <el-form-item
            label=""
            class="title"
          >
            <div>欢迎登录智能招聘平台</div>
          </el-form-item>
          <el-form-item
            label="手机"
            prop="tel"
            :rules="[
              { required: true, message: '请输入手机号'},
              {
                validator: (rule, value, callback) => { validateTel(rule, value, callback) },
                trigger: ['blur']
              }
            ]"
          >
            <el-input
              v-model="loginForm.tel"
              placeholder="请输入手机号码"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            v-if="isAccountLogin"
            clearable
            label="密码"
            prop="password"
            :rules="[
              { required: true, message: '请输入密码'},
              {
                validator: (rule, value, callback) => { validatePsd(rule, value, callback) },
                trigger: []
              }
            ]"
          >
            <el-input
              v-model="loginForm.password"
              clearable
              placeholder="请输入密码"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="验证码"
            class="code"
            prop="code"
            :rules="[
              { required: true, message: '请输入验证码'},
              {
                validator: validateCode,
                trigger: ['blur']
              }
            ]"
            v-if="isMSMLogin"
          >
            <el-input
              v-model="loginForm.code"
              clearable
              class="get-code-inp"
              placeholder="请输入验证码"
            ></el-input>
            <el-button
              type="success"
              plain
              class="get-code-btn"
              size="small"
              :disabled="codeDisabled"
              @click.stop="getCode"
            >{{codeWord}}{{typeof codeWord === 'number' ? 's' : ''}}</el-button>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox v-model="loginForm.automaticLogin">下次自动登录</el-checkbox>
            <el-button
              type="text"
              class="forgot-bth"
              @click="toPasswordBack"
            >忘记密码？</el-button>
          </el-form-item>
          <el-form-item
            label=""
            class="login-btn"
          >
            <el-button
              type="primary"
              class="btn"
              @click="login"
            >立即登录</el-button>
          </el-form-item>
          <el-form-item label="">
            <el-button
              type="text"
              @click="toMSMLogin"
              v-if="isAccountLogin"
            >短信验证登录</el-button>
            <el-button
              type="text"
              @click="toAccountLogin"
              v-if="isMSMLogin"
            >账号密码登录</el-button>
            <el-button
              type="text"
              class="register-btn"
              @click="toRegister"
            >注册账号</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      loginForm: {
        tel: this.$route.params.tel || '',
        password: '',
        automaticLogin: true,
        code: ''
      },
      isMSMLogin: false,
      isAccountLogin: true,
      codeDisabled: true,
      codeWord: '获取验证码'
    }
  },
  computed: {
    ...mapState({
      account: state => state.account.account,
      token: state => state.account.token
    }),
    ...mapGetters(['accountType'])
  },
  watch: {
    'loginForm.tel' (tel) {
      if (tel.length === 11 && typeof this.codeWord === 'string') {
        this.findTel({ tel }).then(result => {
          if (result.message) this.codeDisabled = false
        })
      } else {
        this.codeDisabled = true
      }
    }
  },
  mounted () {
    const { tel } = this.loginForm
    if (tel.length === 11 && typeof this.codeWord === 'string') {
      this.findTel({ tel }).then(result => {
        if (result.message) this.codeDisabled = false
      })
    } else {
      this.codeDisabled = true
    }
    if (this.accountType === 'student') {
      this.$router.replace({
        path: '/'
      })
    } else if (this.accountType === 'company') {
      this.$router.replace({
        path: '/company/page'
      })
    }
  },
  methods: {
    ...mapActions([
      'findTel',
      'findAccount',
      'fetchStudentList',
      'fetchCompanyList',
      'sendCode',
      'verifyCode'
    ]),
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
      this.$refs['loginForm'].validate(async valid => {
        if (valid) {
          await this.$message({
            message: '登录成功',
            type: 'success'
          })
          if (this.accountType === 'student') {
            this.$router.replace({
              path: '/'
            })
          } else {
            this.$router.replace({
              path: '/company/page'
            })
          }
        } else {
          return false
        }
      })
    },
    async validateTel (rule, value, callback) {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return callback(new Error('手机格式不正确'))
      } else {
        const result = await this.findTel({ tel: value })
        if (!result.message) return callback(new Error('该手机号尚未注册'))
      }
      return callback()
    },
    async validatePsd (rule, value, callback) {
      const result = await this.findAccount({
        tel: this.loginForm.tel,
        password: this.loginForm.password
      })
      if (!result.token) return callback(new Error('密码错误'))
      console.info('登录信息')
      console.info(result)
      this.fetchList(result)
      return callback()
    },
    async validateCode (rule, value, callback) {
      if (!/^\d{6}$/.test(value)) {
        return callback(new Error('请输入六位数字'))
      }
      const result = await this.verifyCode({
        inputCode: value,
        tel: this.loginForm.tel
      })
      if (result.code) {
        return callback(new Error('验证码错误'))
      }
      this.fetchList(result)
      return callback()
    },
    async fetchList (result) {
      if (result.accountType === 'student') {
        await this.fetchStudentList({
          studentId: result.userId
        })
      } else if (result.accountType === 'company') {
        await this.fetchCompanyList({
          companyId: result.userId
        })
      }
      localStorage.clear()
      console.info(this.loginForm.automaticLogin)
      if (this.loginForm.automaticLogin) {
        localStorage.setItem('account', JSON.stringify(result))
      }
    },
    getCode () {
      this.codeDisabled = true
      this.setCodeTime()
      this.sendCode({ tel: this.loginForm.tel })
    },
    setCodeTime () {
      this.codeWord = 60
      const timer = setInterval(() => {
        this.codeWord -= 1
        if (this.codeWord < 1) {
          this.codeDisabled = false
          this.codeWord = '获取验证码'
          clearInterval(timer)
        }
      }, 1000)
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
    background: url('http://static.nowcoder.com/images/res/infoComplete/bg.jpg')
      no-repeat;
    background-size: 100% 100%;
    .form-content {
      padding: 40px 65px 50px 55px;
      width: 420px;
      // height: 300px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.8);
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
            width: 55%;
          }
          .get-code-btn {
            width: 40%;
            margin-left: 6px;
          }
        }
        .user-type {
          margin: -10px 0 0px;

          & >>> .el-form-item__error {
            margin-top: -8px !important;
          }
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
