<template>
  <div class="main">
    <div class="main-content">
      <el-container>
        <el-header height="100%">
          <div class="header-content" v-for="(item, index) in userInfo" :key="index">
            <div class="avatar">
              <img :src="item.avatar">
            </div>
            <div class="info">
              <div class="info-top">
                <div class="username">{{item.username}}</div>
                <i v-if="item.sex === 'male'" class="el-icon-male" style="color: blue"></i>
                <i v-else class="el-icon-female" style="color: red"></i>
                <div class="introduction">{{item.introduction}}</div>
              </div>
              <div class="info-bottom">
                <div>
                  <i class="el-icon-location"></i>
                  <span>{{item.address}}</span>
                </div>
                <div class="center-item">
                  <i class="el-icon-suitcase"></i>
                  <span>{{item.loveCompany}}</span>
                </div>
                <div>
                  <i class="el-icon-school"></i>
                  <span>{{item.school}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <div class="aside-content">
              <el-row class="tac">
                <el-col :span="12">
                  <el-menu
                    class="el-menu-vertical-demo"
                    @select="handleSelect">
                    <el-menu-item index="edit">
                      <i class="el-icon-edit"></i>
                      <span slot="title">编辑信息</span>
                    </el-menu-item>
                    <el-menu-item index="upload">
                      <i class="el-icon-upload"></i>
                      <span slot="title">上传简历</span>
                    </el-menu-item>
                    <el-menu-item index="setting">
                      <i class="el-icon-setting"></i>
                      <span slot="title">账号设置</span>
                    </el-menu-item>
                    <el-menu-item index="logout">
                      <i class="el-icon-switch-button"></i>
                      <span slot="title">退出登录</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
            </div>
          </el-aside>
          <el-main>
            <div class="user-info">
              <div v-for="(item, index) in userInfo" :key="index" class="user-info-content">
                <div class="head">
                  <span>基本信息</span>
                  <div class="btn" v-if="isEdit">
                    <el-button @click="updateUserInfo" size="mini" type="primary">保存</el-button>
                    <el-button @click="cancelUpdateUserInfo" size="mini">取消</el-button>
                  </div>
                </div>
                <div class="base-info">
                  <el-form label-position="right" label-width="100px" :model="newUserInfo">
                    <el-form-item label="我的昵称">
                      <div v-if="!isEdit">{{item.username}}</div>
                      <el-input v-else v-model="newUserInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item label="我的性别">
                      <div v-if="!isEdit">
                        <i v-if="item.sex === 'male'" class="el-icon-male" style="color: blue"></i>
                        <i v-else class="el-icon-female" style="color: red"></i>
                      </div>
                      <div v-else>
                        <el-radio v-model="newUserInfo.sex" label="male">男</el-radio>
                        <el-radio v-model="newUserInfo.sex" label="female">女</el-radio>
                      </div>
                    </el-form-item>
                    <el-form-item label="我的简介">
                      <div v-if="!isEdit">{{item.introduction}}</div>
                      <el-input v-else v-model="newUserInfo.introduction" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="我居住地">
                      <div v-if="!isEdit">{{item.address}}</div>
                      <el-input v-else v-model="newUserInfo.address"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业年份">
                      <div v-if="!isEdit">{{item.graduateTime}}</div>
                      <el-input v-else v-model="newUserInfo.graduateTime"></el-input>
                    </el-form-item>
                    <el-form-item label="我的学历">
                      <div v-if="!isEdit">{{item.education}}</div>
                      <el-input v-else v-model="newUserInfo.education"></el-input>
                    </el-form-item>
                    <el-form-item label="我的学校">
                      <div v-if="!isEdit">{{item.school}}</div>
                      <el-input v-else v-model="newUserInfo.school"></el-input>
                    </el-form-item>
                    <el-form-item label="我想去的公司">
                      <div v-if="!isEdit">{{item.loveCompany}}</div>
                      <el-input v-else v-model="newUserInfo.loveCompany"></el-input>
                    </el-form-item>
                    <el-form-item label="感兴趣的工作">
                      <div v-if="!isEdit">{{item.interestedClassify === 'soft' ? '技术（软件）/信息技术类' : '技术（硬件）/电子技术类'}}—{{item.interestedPost}}</div>
                      <div v-else>
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
                  <div class="footer-btn" v-if="isEdit">
                    <el-button @click="updateUserInfo" type="primary">保存</el-button>
                    <el-button @click="cancelUpdateUserInfo">取消</el-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="setting-content">
              <el-dialog
                title="修改密码"
                :visible.sync="dialogSettingVisible"
                width="30%">
                <div class="form-content">
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="原密码" prop="prePass">
                      <el-input type="password" v-model.number="ruleForm.prePass"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-form>
                  <div class="form-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </div>
                </div>
              </el-dialog>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'UserPage',
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      userInfo: [
        {
          username: '前端小菜猪~',
          avatar: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_200,w_200',
          sex: 'female',
          introduction: '我热爱前端，想要找个可以学习的平台',
          address: '陕西西安',
          graduateTime: '2020',
          education: '本科',
          school: '西安科技大学',
          loveCompany: '网易',
          interestedClassify: 'software',
          interestedPost: '前端工程师'
        }
      ],
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
      isEdit: false,
      isSetting: false,
      dialogSettingVisible: false,
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
      ],
      ruleForm: {
        prePass: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        prePass: [
          { required: true, message: '请输入正确的原密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.newUserInfo = _.cloneDeep(this.userInfo[0])
  },
  methods: {
    handleSelect (keyPath) {
      console.log(234, keyPath)
      if (keyPath === 'edit') {
        this.isEdit = true
        console.log(this.isEdit)
      } else if (keyPath === 'setting') {
        this.isSetting = true
        this.dialogSettingVisible = true
        console.log(123, keyPath)
      }
    },
    updateUserInfo () {
      console.log(this.newUserInfo)
      this.isEdit = false
    },
    cancelUpdateUserInfo () {
      this.isEdit = false
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(666, this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
}

.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  margin: 10px 0;
  padding: 16px;
}

.el-aside {
  background: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  margin-right: 10px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
}

.el-col-12 {
  width: 200px;
}

.el-menu {
  border-right: none;
}

.el-form-item {
  margin-bottom: 10px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  .main-content {
    width: 65%;
    margin-bottom: 20px;
    .header-content {
      display: flex;
      align-items: center;
      .avatar {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }
      .avatar img {
        width: 100%;
        border-radius: 50%;
      }
      .info {
        .info-top, .info-bottom {
          display: flex;
          align-content: center;
          align-items: center;
        }
        .info-top {
          margin-bottom: 10px;
        }
        .info-top i {
          margin: 0 20px 0 5px;
        }
        .info-top .introduction {
          background: #ebebeb;
          padding: 5px;
          font-size: 14px;
        }
        .info-top .username {
          color: #42c1a2;
        }
        .info-bottom {
          font-size: 14px;
        }
        .info-bottom .center-item {
          margin: 0 10px;
        }
      }
    }
  }
}

.aside-content {
  display: flex;
  align-items: center;
}

.user-info {
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

.setting-content {
  .form-content {
    margin-left: -22px;
    .form-btn {
      display: flex;
      justify-content: center;
    }
    .el-form {
      .el-form-item {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
