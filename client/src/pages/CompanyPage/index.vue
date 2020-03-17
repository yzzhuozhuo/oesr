<template>
  <div class="main">
    <div class="main-content">
      <el-container>
        <el-header height="100%">
          <div class="header-content">
            <div class="avatar">
              <img :src="companyInfo.companyImgUrl">
            </div>
            <div class="info">
              <div class="info-top">
                <div class="company-name">{{companyInfo.companyName}}</div>
              </div>
              <div class="info-bottom">
                <div class="info-location">
                  <i class="el-icon-location"></i>
                  <div>
                    <span>{{companyInfo.companyAddress}}</span>
                  </div>
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
                    <el-menu-item index="setting">
                      <i class="el-icon-setting"></i>
                      <span slot="title">出题列表</span>
                    </el-menu-item>
                    <el-menu-item index="setting">
                      <i class="el-icon-setting"></i>
                      <span slot="title">职位列表</span>
                    </el-menu-item>
                     <el-menu-item index="upload">
                      <i class="el-icon-upload"></i>
                      <span slot="title">宣讲列表</span>
                    </el-menu-item>
                    <el-menu-item index="upload">
                      <i class="el-icon-upload"></i>
                      <span slot="title">简历列表</span>
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
                  <span>公司简介</span>
                  <div class="btn" v-if="isEdit">
                    <el-button @click="updatecompanyInfo" size="mini" type="primary">保存</el-button>
                    <el-button @click="cancelUpdatecompanyInfo" size="mini">取消</el-button>
                  </div>
                </div>
                <div class="base-info">
                  <el-form label-position="right" label-width="100px" :model="newCompanyInfo">
                    <el-form-item label="公司名称">
                      <div v-if="!isEdit">{{companyInfo.companyName}}</div>
                      <el-input v-else v-model="newCompanyInfo.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="所在城市">
                      <div v-if="!isEdit">{{companyInfo.companyAddress}}</div>
                      <el-input v-else v-model="newCompanyInfo.companyAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="公司简介">
                      <div v-if="!isEdit">{{companyInfo.companyProfile}}</div>
                      <el-input v-else v-model="newCompanyInfo.companyProfile" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="薪酬项目">
                      <div v-if="!isEdit">{{companyInfo.companyWelfare}}</div>
                      <el-input v-else v-model="newCompanyInfo.companyWelfare" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="业务体系">
                      <div v-if="!isEdit">{{companyInfo.companyBusiness}}</div>
                      <el-input v-else v-model="newCompanyInfo.companyBusiness" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="需招职位">
                      <div v-if="!isEdit">{{companyInfo.recuritPosts}}</div>
                      <el-input v-else v-model="newCompanyInfo.recuritPosts"></el-input>
                    </el-form-item>
                  </el-form>
                  <div class="footer-btn" v-if="isEdit">
                    <el-button @click="updatecompanyInfo" type="primary">保存</el-button>
                    <el-button @click="cancelUpdatecompanyInfo">取消</el-button>
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
      companyInfo1: {
        companyName: '网易',
        companyImgUrl: 'https://images.nowcoder.com/images/20180718/921290_1531896583092_901BA20B5E086190E85C74B8628FA8D2?x-oss-process=image/resize,m_mfit,h_200,w_200',
        companyProfile: '网易(NASDAQ: NTES)，1997年由丁磊先生在广州创办、2000年在美国NASDAQ股票交易所挂牌上市，是中国领先的互联网技术公司，在开发互联网应用、服务等方面始终保持中国业界领先地位。本着对中国互联网发展强烈的使命感，缔造美好生活的愿景，网易利用最先进的互联网技术，加强人与人之间信息的交流和共享，为海量用户提供优质的产品和服务，始终秉持着"以匠心、致创新"的理念，通过科技创新改变生活。',
        companyWelfare: '公司每年参与行业薪酬调研并据此为员工提供行业内有竞争力的薪酬待遇，同时每年根据业务情况及绩效表现对员工薪酬进行复核调整',
        companyAddress: '北京 杭州 上海',
        companyBusiness: '网易游戏 网易严选 网易云音乐 有道',
        recuritPosts: 'Java工程师 C++工程师 前端工程师'
      },
      newCompanyInfo1: {
        companyName: '',
        companyImgUrl: '',
        companyProfile: '',
        companyWelfare: '',
        companyAddress: '',
        companyBusiness: '',
        recuritPosts: ''
      },
      companyInfo: {},
      newCompanyInfo: {},
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
  computed: {
    ...mapState({
      companyList: state => state.company.companyList
    })
  },
  watch: {
    companyList () {
      this.companyInfo = this.companyList
    }
  },
  created () {
    this.fetchCompanyList({ companyId: '123' })
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'fetchCompanyList',
      'updateCompanyList'
    ]),
    handleSelect (keyPath) {
      console.log(234, keyPath)
      if (keyPath === 'edit') {
        this.newCompanyInfo = _.cloneDeep(this.companyInfo)
        this.isEdit = true
        console.log(this.isEdit)
      } else if (keyPath === 'setting') {
        this.isSetting = true
        this.dialogSettingVisible = true
        console.log(123, keyPath)
      }
    },
    updatecompanyInfo () {
      console.log(this.newCompanyInfo)
      this.updateCompanyList(this.newCompanyInfo).then(() => {
        this.fetchCompanyList({ companyId: '123' }).then(() => {
          this.isEdit = false
        })
      })
    },
    cancelUpdatecompanyInfo () {
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
        .info-top .company-name {
          color: #42c1a2;
        }
        .info-bottom {
          font-size: 14px;
          .info-location {
            display: flex;
            align-items: center;
            .el-icon-location {
              padding-right: 8px;
            }
          }
          .info-location div {
            margin-right: 10px;
          }
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
    //   padding-left: 30px;
      margin-left: -26px;
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
