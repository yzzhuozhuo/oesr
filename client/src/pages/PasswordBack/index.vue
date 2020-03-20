<template>
  <div class="main">
    <div class="main-content">
      <div class="form-content">
        <!-- <div>欢迎登录</div> -->
        <el-form
          ref="form"
          :model="loginForm"
          label-width="65px"
          class="form-box"
          :rules="rules"
        >
          <el-form-item
            label=""
            class="title"
          >
            <div v-if="!isVerificationPass">密码找回</div>
            <div v-else>密码重置</div>
          </el-form-item>
          <el-form-item
            label="手机"
            v-if="!isVerificationPass"
            prop="tel"
          >
            <el-input
              v-model="loginForm.tel"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="验证码"
            class="code"
            v-if="!isVerificationPass"
            prop="code"
          >
            <el-input
              v-model="loginForm.code"
              class="get-code-inp"
              placeholder="请输入验证码"
            ></el-input>
            <el-button
              type="success"
              plain
              class="get-code-btn"
              size="small"
            >获取验证码</el-button>
          </el-form-item>
          <el-form-item
            label=""
            v-if="isVerificationPass"
            prop="password"
          >
            <el-input
              v-model="loginForm.password"
              placeholder="请输入新密码"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item
            label=""
            v-if="isVerificationPass"
            prop="newPassword"
          >
            <el-input
              v-model="loginForm.newPassword"
              placeholder="请确认新密码"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item
            label=""
            class="login-btn"
          >
            <el-button
              type="primary"
              class="btn"
              v-if="!isVerificationPass"
              @click.stop="VerificationTel"
            >确定</el-button>
            <el-button
              type="primary"
              class="btn"
              v-else
              @click.stop="reset"
            >重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PasswordBack',
  data () {
    return {
      loginForm: {
        tel: '',
        password: '',
        newPassword: '',
        automaticLogin: true
      },
      isVerificationPass: false,
      rules: {
        tel: [
          { required: true, message: '请输入手机号' },
          {
            validator: this.validateTel,
            trigger: ['blur']
          }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        newPassword: [
          {
            required: true,
            message: '请再次输入新密码',
            trigger: 'blur'
          },
          {
            validator: this.validatePsd,
            trigger: []
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['findTel', 'updatePsd']),
    toMSMLogin () {
      this.isAccountLogin = false
      this.isMSMLogin = true
    },
    toAccountLogin () {
      this.isMSMLogin = false
      this.isAccountLogin = true
    },
    VerificationTel () {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          this.isVerificationPass = true
        } else {
          return false
        }
      })
    },
    // 验证手机号
    async validateTel (rule, value, callback) {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return callback(new Error('手机格式不正确'))
      } else {
        const result = await this.findTel({ tel: value })
        if (!result.message) return callback(new Error('该手机号尚未注册'))
      }
      return callback()
    },
    reset () {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const result = await this.updatePsd({
            tel: this.loginForm.tel,
            newPassword: this.loginForm.newPassword
          })
          console.info(result)
          if (!result.code) {
            await this.$message({
              message: '密码已重置',
              type: 'success'
            })
            this.$router.replace({
              name: 'login',
              params: {
                tel: this.loginForm.tel
              }
            })
          }
        } else {
          return false
        }
      })
    },
    validatePsd (rule, value, callback) {
      if (this.loginForm.password !== value) {
        return callback(new Error('两次密码不一致'))
      }
      return callback()
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
      padding: 40px 70px 50px;
      width: 400px;
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
          //   color: #909090;
        }
        .code {
          .get-code-inp {
            width: 56%;
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
          margin-top: 30px;
          //   margin-bottom: 0;
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
