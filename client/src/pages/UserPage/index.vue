<template>
  <div class="main">
    <div class="main-content">
      <el-container>
        <el-header height="100%">
          <div class="header-content">
            <div class="avatar">
              <img :src="userInfo.studentImgUrl">
            </div>
            <div class="info">
              <div class="info-top">
                <div class="username">{{userInfo.studentName}}</div>
                <i v-if="userInfo.sex === 'male'" class="el-icon-male" style="color: blue"></i>
                <i v-else class="el-icon-female" style="color: red"></i>
                <div class="introduction">{{userInfo.introduction}}</div>
              </div>
              <div class="info-bottom">
                <div>
                  <i class="el-icon-location"></i>
                  <span>{{userInfo.address}}</span>
                </div>
                <div class="center-item">
                  <i class="el-icon-suitcase"></i>
                  <div v-for="(item, index) in userInfo.interestedCompany" :key="index" class="interested-company">
                    <span>{{item}}</span>
                  </div>
                </div>
                <div>
                  <i class="el-icon-school"></i>
                  <span>{{userInfo.school}}</span>
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
              <div class="user-info-content">
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
                      <div v-if="!isEdit">{{userInfo.studentName}}</div>
                      <el-input v-else v-model="newUserInfo.studentName"></el-input>
                    </el-form-item>
                    <el-form-item label="我的性别">
                      <div v-if="!isEdit">
                        <i v-if="userInfo.sex === 'male'" class="el-icon-male" style="color: blue"></i>
                        <i v-else class="el-icon-female" style="color: red"></i>
                      </div>
                      <div v-else>
                        <el-radio v-model="newUserInfo.sex" label="male">男</el-radio>
                        <el-radio v-model="newUserInfo.sex" label="female">女</el-radio>
                      </div>
                    </el-form-item>
                    <el-form-item label="我的简介">
                      <div v-if="!isEdit">{{userInfo.introduction}}</div>
                      <el-input v-else v-model="newUserInfo.introduction" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="我居住地">
                      <div v-if="!isEdit">{{userInfo.address}}</div>
                      <el-input v-else v-model="newUserInfo.address"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业年份">
                      <div v-if="!isEdit">{{userInfo.graduateTime}}</div>
                      <el-input v-else v-model="newUserInfo.graduateTime"></el-input>
                    </el-form-item>
                    <el-form-item label="我的学历">
                      <div v-if="!isEdit">{{userInfo.education}}</div>
                      <el-input v-else v-model="newUserInfo.education"></el-input>
                    </el-form-item>
                    <el-form-item label="我的学校">
                      <div v-if="!isEdit">{{userInfo.school}}</div>
                      <el-input v-else v-model="newUserInfo.school"></el-input>
                    </el-form-item>
                    <el-form-item label="感兴趣的公司">
                      <div v-if="!isEdit" class="interested">
                        <div v-for="(item, index) in userInfo.interestedCompany" :key="index" class="interested-company">
                          <span>{{item}}</span>
                        </div>
                      </div>
                      <el-select v-else v-model="newUserInfo.interestedCompany" multiple placeholder="请选择感兴趣的公司" style="width: 436px">
                        <el-option
                          v-for="item in companyOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="感兴趣的工作">
                      <div v-if="!isEdit" class="interested">
                        <span>{{userInfo.interestedClassify === 'soft' ? '技术（软件）/信息技术类' : '技术（硬件）/电子技术类'}}—</span>
                        <div v-for="(item, index) in userInfo.interestedPost" :key="index" class="interested-company">
                          <span>{{item}}</span>
                        </div>
                        </div>
                      <div v-else>
                        <el-select v-model="newUserInfo.interestedClassify" placeholder="请选择方向">
                          <el-option
                            v-for="item in classifyOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        <el-select v-model="newUserInfo.interestedPost" multiple placeholder="请选择职位">
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
import { mapState, mapActions } from 'vuex'

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
      userInfo: {},
      newUserInfo: {},
      isEdit: false,
      isSetting: false,
      dialogSettingVisible: false,
      companyOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '字节跳动',
          value: '字节跳动'
        },
        {
          label: '腾讯',
          value: '腾讯'
        },
        {
          label: '百度',
          value: '百度'
        },
        {
          label: '阿里巴巴',
          value: '阿里巴巴'
        },
        {
          label: '滴滴',
          value: '滴滴'
        },
        {
          label: '美团',
          value: '美团'
        },
        {
          label: '唯品会',
          value: '唯品会'
        },
        {
          label: '携程旅行',
          value: '携程旅行'
        },
        {
          label: 'Shopee',
          value: 'Shopee'
        },
        {
          label: '网易',
          value: '网易'
        },
        {
          label: '深信服',
          value: '深信服'
        }
      ],
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
          label: '全部',
          value: ''
        },
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
  computed: {
    ...mapState({
      studentList: state => state.student.studentList
    })
  },
  watch: {
    studentList () {
      this.userInfo = this.studentList
    }
  },
  created () {
    this.fetchStudentList({studentId: '123'})
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'fetchStudentList',
      'updateStudentList'
    ]),
    handleSelect (keyPath) {
      console.log(234, keyPath)
      if (keyPath === 'edit') {
        this.isEdit = true
        console.log(this.isEdit)
        this.newUserInfo = _.cloneDeep(this.userInfo)
      } else if (keyPath === 'setting') {
        this.isSetting = true
        this.dialogSettingVisible = true
        console.log(123, keyPath)
      }
    },
    updateUserInfo () {
      console.log(this.newUserInfo)
      this.updateStudentList(this.newUserInfo).then(() => {
        this.fetchStudentList({studentId: '123'}).then(() => {
          this.isEdit = false
        })
      })
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
        .center-item {
          display: flex;
          align-items: center;
        }
        .center-item i {
          padding-right: 5px;
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

.interested {
  display: flex;
  align-items: center;
}

.interested-company {
  // display: flex;
  margin-right: 5px;
}
</style>
