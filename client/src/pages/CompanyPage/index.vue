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
                    @select="handleSelect"
                  >
                    <el-menu-item index="edit">
                      <i class="el-icon-edit"></i>
                      <span slot="title">编辑信息</span>
                    </el-menu-item>
                    <el-menu-item index="company">
                      <i class="el-icon-office-building"></i>
                      <span slot="title">公司信息</span>
                    </el-menu-item>
                    <el-menu-item index="theme">
                      <i class="el-icon-edit"></i>
                      <span slot="title">出题列表</span>
                    </el-menu-item>
                    <el-menu-item index="positon">
                      <i class="el-icon-user"></i>
                      <span slot="title">职位列表</span>
                    </el-menu-item>
                    <el-menu-item index="preach">
                      <i class="el-icon-tickets"></i>
                      <span slot="title">宣讲列表</span>
                    </el-menu-item>
                    <el-menu-item index="resume">
                      <i class="el-icon-document-checked"></i>
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
              <div
                class="user-info-content"
                v-if="isCompanyInfo"
              >
                <div class="head">
                  <span>公司简介</span>
                  <div
                    class="btn"
                    v-if="isEdit"
                  >
                    <el-button
                      @click="updatecompanyInfo"
                      size="mini"
                      type="primary"
                    >保存</el-button>
                    <el-button
                      @click="cancelUpdatecompanyInfo"
                      size="mini"
                    >取消</el-button>
                  </div>
                  <div
                    v-else
                    class="btn"
                  >
                    <el-button
                      @click="editCompanyInfo"
                      size="mini"
                      type="primary"
                    >编辑信息</el-button>
                  </div>
                </div>
                <div class="base-info">
                  <el-form
                    label-position="right"
                    label-width="100px"
                    :model="newCompanyInfo"
                  >
                    <el-form-item label="公司名称">
                      <div v-if="!isEdit">{{companyInfo.companyName}}</div>
                      <el-input
                        v-else
                        v-model="newCompanyInfo.companyName"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="所在城市">
                      <div v-if="!isEdit">{{companyInfo.companyAddress}}</div>
                      <el-input
                        v-else
                        v-model="newCompanyInfo.companyAddress"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="公司简介">
                      <div v-if="!isEdit">{{companyInfo.companyProfile}}</div>
                      <el-input
                        v-else
                        v-model="newCompanyInfo.companyProfile"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="薪酬项目">
                      <div v-if="!isEdit">{{companyInfo.companyWelfare}}</div>
                      <el-input
                        v-else
                        v-model="newCompanyInfo.companyWelfare"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="业务体系">
                      <div v-if="!isEdit">{{companyInfo.companyBusiness}}</div>
                      <el-input
                        v-else
                        v-model="newCompanyInfo.companyBusiness"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="需招职位">
                      <div v-if="!isEdit">{{companyInfo.recuritPosts}}</div>
                      <el-input
                        v-else
                        v-model="newCompanyInfo.recuritPosts"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div
                    class="footer-btn"
                    v-if="isEdit"
                  >
                    <el-button
                      @click="updatecompanyInfo"
                      type="primary"
                    >保存</el-button>
                    <el-button @click="cancelUpdatecompanyInfo">取消</el-button>
                  </div>
                </div>
              </div>
              <div
                v-if="isResume"
                class="resume-box"
              >
                <div class="resume-content">
                  <div class="header">
                    <span>收到的简历</span>
                    <div>
                      <el-input
                        v-model="searchValue"
                        style="width: 200px"
                        placeholder="请输入职位名称进行筛选"
                        size="mini"
                      ></el-input>
                      <el-button
                        type="primary"
                        size="mini"
                        @click="searchResume"
                      >查询</el-button>
                    </div>
                  </div>
                  <div class="resume-list">
                    <div
                      v-for="(item, index) in resumeData"
                      :key="index"
                      class="resume-item"
                    >
                      <div class="top">
                        <span>职位：{{item.positionTitle}}</span>
                        <el-button
                          type="text"
                          @click="viewResume(item.resumeUrl)"
                        >查看简历</el-button>
                      </div>
                      <div class="bottom">
                        <span>投递人：{{item.studentName}}</span>
                        <span>简历名称：{{item.resumeTitle}}</span>
                        <span>投递时间：{{item.createdAt}}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pagination"
                    v-if="this.resumeData.length !== 0"
                  >
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage"
                      :page-sizes="[10, 20, 50, 100]"
                      :page-size.sync="pageNum"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="total"
                    >
                    </el-pagination>
                  </div>
                </div>
              </div>
            </div>
            <div class="setting-content">
              <el-dialog
                title="修改密码"
                :visible.sync="dialogSettingVisible"
                width="30%"
              >
                <div class="form-content">
                  <el-form
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                  >
                    <el-form-item
                      label="原密码"
                      prop="prePass"
                    >
                      <el-input
                        type="password"
                        v-model.number="ruleForm.prePass"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="密码"
                      prop="pass"
                    >
                      <el-input
                        type="password"
                        v-model="ruleForm.pass"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="确认密码"
                      prop="checkPass"
                    >
                      <el-input
                        type="password"
                        v-model="ruleForm.checkPass"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div class="form-btn">
                    <el-button
                      type="primary"
                      @click="submitForm('ruleForm')"
                    >提交</el-button>
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
import { mapState, mapActions } from 'vuex'
import _ from 'lodash'
import moment from 'moment'

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
      newCompanyInfo: {},
      resumeData: [],
      currentPage: 1, // 分页
      pageNum: 10,
      total: 0,
      searchValue: '',
      isCompanyInfo: true,
      isEdit: false,
      isSetting: false,
      isResume: false,
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
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
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
      companyInfo: state => state.company.companyList,
      account: state => state.account,
      resumeList: state => state.resumeList.resumeList,
      totalPage: state => state.resumeList.totalPage || 0,
      pageNumber: state => state.resumeList.pageNumber || 10,
      page: state => state.resumeList.page || 1
    })
  },
  watch: {
    resumeList () {
      this.resumeData = this.formatTime(this.resumeList)
    },
    totalPage () {
      this.total = this.totalPage
    },
    pageNumber () {
      this.pageNum = this.pageNumber
    },
    page () {
      this.currentPage = this.page
    }
  },
  created () {
    this.fetchResumeDataList()
  },
  mounted () {},
  methods: {
    ...mapActions([
      'updateCompanyList',
      'fetchResumeList',
      'logout'
    ]),
    formatTime (resumeList) {
      const TIME_FORMAT = 'YYYY-MM-DD HH:mm'
      const data = _.cloneDeep(resumeList)
      return data.map(item => {
        item.createdAt = moment(item.createdAt).format(TIME_FORMAT)
        return item
      })
    },
    fetchResumeDataList () {
      let params = {
        companyId: '123',
        searchValue: this.searchValue,
        currentPage: this.currentPage,
        pageNum: this.pageNum
      }
      this.fetchResumeList(params)
    },
    editCompanyInfo () {
      this.newCompanyInfo = _.cloneDeep(this.companyInfo)
      this.isEdit = true
    },
    handleSelect (keyPath) {
      console.log(234, keyPath)
      if (keyPath === 'company') {
        this.isCompanyInfo = true
        this.isResume = false
        console.log(this.isEdit)
      } else if (keyPath === 'setting') {
        this.isSetting = true
        this.dialogSettingVisible = true
        console.log(123, keyPath)
      } else if (keyPath === 'resume') {
        this.isResume = true
        this.isCompanyInfo = false
      } else if (keyPath === 'logout') {
        this.logout()
        this.$router.replace({
          path: '/'
        })
      }
    },
    async updatecompanyInfo () {
      const result = await this.updateCompanyList(this.newCompanyInfo)
      console.info('---修改成功---')
      console.info(result)
      if (result && result._id) {
        this.isEdit = false
        await this.$message({
          message: '修改成功',
          type: 'success'
        })
      } else {
        await this.$message.error('修改失败，请重试')
      }
    },
    cancelUpdatecompanyInfo () {
      this.isEdit = false
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
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
    },
    viewResume (resumeUrl) {
      window.open(resumeUrl)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageNum = val
      this.fetchResumeDataList()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.fetchResumeDataList()
    },
    searchResume () {
      this.fetchResumeDataList()
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
        .info-top,
        .info-bottom {
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

.resume-box {
  min-height: 500px;
  .resume-content {
    .header {
      padding-bottom: 10px;
      font-weight: bold;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .resume-list {
      .resume-item {
        border: 1px solid #d4d4d4;
        padding: 6px 15px 15px;
        border-radius: 5px;
        margin-bottom: 10px;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bottom {
          color: #999;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
    .pagination {
      float: right;
    }
  }
}
</style>
