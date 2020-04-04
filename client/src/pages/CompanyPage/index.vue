<template>
  <div class="main">
    <div class="main-content">
      <el-container>
        <el-header height="100%">
          <div class="header-content" @mouseenter="enter" @mouseleave="leave">
            <el-upload
              class="avatar"
              :action="domain"
              :http-request="handleUpload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                :src="companyInfo.companyImgUrl"
                class="avatar"
              >
              <div class="cover" v-if="coverAvatar">
                <img :src="camera">
              </div>
            </el-upload>
            <div class="info">
              <div class="info-left">
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
              <div class="campus">
                <span class="one">校招官网：</span>
                <span class="two" @click="toCampus">{{companyInfo.companyCampusUrl}}</span>
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
                    <el-menu-item index="company">
                      <i class="el-icon-office-building"></i>
                      <span slot="title">公司信息</span>
                    </el-menu-item>
                    <el-menu-item index="theme">
                      <i class="el-icon-edit"></i>
                      <span slot="title">出题列表</span>
                    </el-menu-item>
                    <el-menu-item index="position">
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
                    <el-form-item label="校招官网">
                      <div v-if="!isEdit">{{companyInfo.companyCampusUrl}}</div>
                      <el-input
                        v-else
                        v-model="newCompanyInfo.companyCampusUrl"
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
                v-if="isTheme"
                class="resume-box"
              >
                <div class="resume-content">
                  <div class="header">
                    <span>发布的题目列表</span>
                    <div>
                      <el-input
                        v-model="searchThemeValue"
                        style="width: 220px"
                        placeholder="请输入题目名称/匹配职位进行筛选"
                        size="mini"
                      ></el-input>
                      <el-button
                        type="primary"
                        size="mini"
                        @click="searchTheme"
                      >查询</el-button>
                    </div>
                  </div>
                  <div class="resume-list">
                    <div
                      v-for="(item, index) in themeData"
                      :key="index"
                      class="resume-item"
                    >
                      <div class="top">
                        <span>题目名称：{{item.themeTitle}}</span>
                        <el-button
                          type="text"
                          @click="viewTheme(item._id)"
                        >查看详情</el-button>
                      </div>
                      <div class="bottom">
                        <span>匹配职位：{{item.post}}</span>
                        <div class="rate">
                          <span>题目难度：</span>
                          <el-rate
                            v-model="item.rate"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                          </el-rate>
                        </div>
                        <span>发布时间：{{item.createdAt}}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pagination"
                    v-if="this.themeData.length !== 0"
                  >
                    <el-pagination
                      @size-change="handleThemeSizeChange"
                      @current-change="handleThemeCurrentChange"
                      :current-page.sync="currentThemePage"
                      :page-sizes="[10, 20, 50, 100]"
                      :page-size.sync="pageThemeNum"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalTheme"
                    >
                    </el-pagination>
                  </div>
                  <div class="no-data" v-if="themeData.length === 0">
                    <img src="@/assets/no-data.png" class="no-data-img">
                    <div class="no-data-title">暂无数据哦~</div>
                  </div>
                </div>
              </div>
              <div
                v-if="isPosition"
                class="resume-box"
              >
                <div class="resume-content">
                  <div class="header">
                    <span>发布的职位列表</span>
                    <div>
                      <el-input
                        v-model="searchPositionValue"
                        style="width: 200px"
                        placeholder="请输入职位名称进行筛选"
                        size="mini"
                      ></el-input>
                      <el-button
                        type="primary"
                        size="mini"
                        @click="searchPosition"
                      >查询</el-button>
                    </div>
                  </div>
                  <div class="resume-list">
                    <div
                      v-for="(item, index) in positionData"
                      :key="index"
                      class="resume-item"
                    >
                      <div class="top">
                        <span>职位名称：{{item.positionTitle}}</span>
                        <el-button
                          type="text"
                          @click="viewPositonResume(item._id)"
                        >所收简历</el-button>
                      </div>
                      <div class="bottom">
                        <span>职位类型：{{item.positionType}}</span>
                        <span>所在城市：{{item.positionCity}}</span>
                        <span>发布时间：{{item.createdAt}}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pagination"
                    v-if="this.positionData.length !== 0"
                  >
                    <el-pagination
                      @size-change="handlePositionSizeChange"
                      @current-change="handlePositionCurrentChange"
                      :current-page.sync="currentPositionPage"
                      :page-sizes="[10, 20, 50, 100]"
                      :page-size.sync="pagePositionNum"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalPosition"
                    >
                    </el-pagination>
                  </div>
                  <div class="no-data" v-if="positionData.length === 0">
                    <img src="@/assets/no-data.png" class="no-data-img">
                    <div class="no-data-title">暂无数据哦~</div>
                  </div>
                </div>
              </div>
              <div
                v-if="isPreach"
                class="resume-box"
              >
                <div class="resume-content">
                  <div class="header">
                    <span>发布的宣讲会列表</span>
                    <div>
                      <el-input
                        v-model="searchPreachValue"
                        style="width: 240px"
                        placeholder="请输入宣讲会名称/地点/城市进行筛选"
                        size="mini"
                      ></el-input>
                      <el-button
                        type="primary"
                        size="mini"
                        @click="searchPreach"
                      >查询</el-button>
                    </div>
                  </div>
                  <div class="resume-list">
                    <div
                      v-for="(item, index) in preachData"
                      :key="index"
                      class="resume-item"
                    >
                      <div class="top" style="margin: 10px 0">
                        <span>宣讲会名称：{{item.preachCompany}}</span>
                        <el-tag effect="dark" size="mini" v-if="new Date(item.preachTime).getDate() < new Date().getDate()" type="info">已结束</el-tag>
                        <el-tag effect="dark" size="mini" v-if="new Date(item.preachTime).getDate() === new Date().getDate()" type="success">今日</el-tag>
                        <el-tag effect="dark" size="mini" v-if="tomorrowStart <= new Date(item.preachTime) && new Date(item.preachTime) <= tomorrowEnd">明日</el-tag>
                      </div>
                      <div class="bottom">
                        <span>宣讲城市：{{item.preachCity}}</span>
                        <span>宣讲城市：{{item.preachSchool}}</span>
                        <span>宣讲时间：{{item.preachTime}}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pagination"
                    v-if="this.preachData.length !== 0"
                  >
                    <el-pagination
                      @size-change="handlePreachSizeChange"
                      @current-change="handlePreachCurrentChange"
                      :current-page.sync="currentPreachPage"
                      :page-sizes="[10, 20, 50, 100]"
                      :page-size.sync="pagePreachNum"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalPreach"
                    >
                    </el-pagination>
                  </div>
                  <div class="no-data" v-if="preachData.length === 0">
                    <img src="@/assets/no-data.png" class="no-data-img">
                    <div class="no-data-title">暂无数据哦~</div>
                  </div>
                </div>
              </div>
              <div
                v-if="isResume"
                class="resume-box"
              >
                <div class="resume-content">
                  <div class="header">
                    <span>收到的简历列表</span>
                    <div>
                      <el-input
                        v-model="searchResumeValue"
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
                      @size-change="handleResumeSizeChange"
                      @current-change="handleResumeCurrentChange"
                      :current-page.sync="currentResumePage"
                      :page-sizes="[10, 20, 50, 100]"
                      :page-size.sync="pageResumeNum"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalResume"
                    >
                    </el-pagination>
                  </div>
                  <div class="no-data" v-if="resumeData.length === 0">
                    <img src="@/assets/no-data.png" class="no-data-img">
                    <div class="no-data-title">暂无数据哦~</div>
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
import camera from '@/assets/camera.png'

const tomorrowStart = new Date(new Date(new Date().toLocaleDateString()).getTime() + 3600 * 1000 * 24 * 1)
const tomorrowEnd = new Date(new Date(new Date().toLocaleDateString()).getTime() + 3600 * 1000 * 24 * 1 + 24 * 60 * 60 * 1000 - 1)

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
      domain: 'https://upload.qiniup.com',
      qiniuaddr: 'q7heq11s7.bkt.clouddn.com',
      camera,
      tomorrowStart: tomorrowStart,
      tomorrowEnd: tomorrowEnd,
      newCompanyInfo: {},
      resumeData: [], // 简历
      currentResumePage: 1, // 分页
      pageResumeNum: 10,
      totalResume: 0,
      searchResumeValue: '',
      positionId: '',
      themeData: [], // 试题
      currentThemePage: 1, // 分页
      pageThemeNum: 10,
      totalTheme: 0,
      searchThemeValue: '',
      positionData: [], // 职位
      currentPositionPage: 1, // 分页
      pagePositionNum: 10,
      totalPosition: 0,
      searchPositionValue: '',
      preachData: [], // 宣讲会
      currentPreachPage: 1, // 分页
      pagePreachNum: 10,
      totalPreach: 0,
      searchPreachValue: '',
      isCompanyInfo: true,
      isEdit: false,
      isSetting: false,
      isResume: false,
      isTheme: false,
      isPosition: false,
      isPreach: false,
      dialogSettingVisible: false,
      coverAvatar: false,
      cacheUrl: '',
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
      resumeList: state => state.resumeList.resumeList, // 简历
      totalResumePage: state => state.resumeList.totalPage || 0,
      pageResumeNumber: state => state.resumeList.pageNumber || 10,
      pageResume: state => state.resumeList.page || 1,
      themeList: state => state.theme.themeList, // 题库
      totalThemePage: state => state.theme.totalPage || 0,
      pageThemeNumber: state => state.theme.pageNumber || 10,
      pageTheme: state => state.theme.page || 1,
      positionList: state => state.position.positionList, // 职位
      totalPositionPage: state => state.position.totalPage || 0,
      pagePositionNumber: state => state.position.pageNumber || 10,
      pagePosition: state => state.position.page || 1,
      preachList: state => state.preach.preachList, // 宣讲会
      totalPreachPage: state => state.preach.totalPage || 0,
      pagePreachNumber: state => state.preach.pageNumber || 10,
      pagePreach: state => state.preach.page || 1
    })
  },
  watch: {
    resumeList () { // 简历
      this.resumeData = this.formatTime(this.resumeList)
    },
    totalResumePage () {
      this.totalResume = this.totalResumePage
    },
    pageResumeNumber () {
      this.pageResumeNum = this.pageResumeNumber
    },
    pageResume () {
      this.currentResumePage = this.pageResume
    },
    themeList () { // 题库
      this.themeData = this.formatTime(this.themeList)
    },
    totalThemePage () {
      this.totalTheme = this.totalThemePage
    },
    pageThemeNumber () {
      this.pageThemeNum = this.pageThemeNumber
    },
    pageTheme () {
      this.currentThemePage = this.pageTheme
    },
    positionList () { // 职位
      this.positionData = this.formatTime(this.positionList)
    },
    totalPositionPage () {
      this.totalPosition = this.totalPositionPage
    },
    pagePositionNumber () {
      this.pagePositionNum = this.pagePositionNumber
    },
    pagePosition () {
      this.currentPositionPage = this.pagePosition
    },
    preachList () { // 宣讲会
      this.preachData = this.formatPreachTime(this.preachList)
    },
    totalPreachPage () {
      this.totalPreach = this.totalPreachPage
    },
    pagePreachNumber () {
      this.pagePreachNum = this.pagePreachNumber
    },
    pagePreach () {
      this.currentPreachPage = this.pagePreach
    }
  },
  created () {
    let positionId = this.$route.query.positionId
    console.log(6666, positionId)
    if (positionId) {
      this.viewPositonResume(positionId)
    }
  },
  mounted () {},
  methods: {
    ...mapActions([
      'updateCompanyList',
      'fetchResumeList',
      'logout',
      'fetchThemeList',
      'fetchPositionList',
      'fetchPreachList',
      'uploadImg'
    ]),
    formatTime (dataList) {
      const TIME_FORMAT = 'YYYY-MM-DD HH:mm'
      const data = _.cloneDeep(dataList)
      return data.map(item => {
        item.createdAt = moment(item.createdAt).format(TIME_FORMAT)
        return item
      })
    },
    formatPreachTime (preachList) {
      const TIME_FORMAT = 'YYYY-MM-DD HH:mm'
      const data = _.cloneDeep(preachList)
      return data.map(item => {
        item.preachTime = moment(item.preachTime).format(TIME_FORMAT)
        return item
      })
    },
    fetchResumeDataList () {
      let params = {
        companyId: this.companyInfo.companyId,
        searchValue: this.searchResumeValue,
        currentPage: this.currentResumePage,
        pageNum: this.pageResumeNum,
        accountType: 'company',
        positionId: this.positionId
      }
      this.fetchResumeList(params)
    },
    fetchThemeDataList () {
      let params = {
        companyId: '123',
        // companyId: this.companyInfo.companyId,
        searchValue: this.searchThemeValue,
        currentPage: this.currentThemePage,
        pageNum: this.pageThemeNum,
        accountType: 'company'
      }
      this.fetchThemeList(params)
    },
    fetchPositionDataList () {
      let params = {
        companyId: this.companyInfo.companyId,
        searchPosition: this.searchPositionValue,
        currentPage: this.currentPositionPage,
        pageNum: this.pagePositionNum,
        accountType: 'company'
      }
      this.fetchPositionList(params)
    },
    fetchPreachDataList () {
      let params = {
        companyId: this.companyInfo.companyId,
        searchValue: this.searchPreachValue,
        currentPage: this.currentPreachPage,
        pageNum: this.pagePreachNum,
        accountType: 'company'
      }
      this.fetchPreachList(params)
    },
    editCompanyInfo () {
      this.newCompanyInfo = _.cloneDeep(this.companyInfo)
      this.isEdit = true
    },
    initPath () {
      this.isCompanyInfo = false
      this.isResume = false
      this.isPosition = false
      this.isTheme = false
      this.isPreach = false
    },
    handleSelect (keyPath) {
      if (keyPath === 'company') {
        this.initPath()
        this.isCompanyInfo = true
      } else if (keyPath === 'resume') {
        this.fetchResumeDataList()
        this.initPath()
        this.isResume = true
      } else if (keyPath === 'theme') {
        this.fetchThemeDataList()
        this.initPath()
        this.isTheme = true
      } else if (keyPath === 'position') {
        this.fetchPositionDataList()
        this.initPath()
        this.isPosition = true
      } else if (keyPath === 'preach') {
        this.fetchPreachDataList()
        this.initPath()
        this.isPreach = true
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
    handleResumeSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageResumeNum = val
      this.fetchResumeDataList()
    },
    handleResumeCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentResumePage = val
      this.fetchResumeDataList()
    },
    handleThemeSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageThemeNum = val
      this.fetchThemeDataList()
    },
    handleThemeCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentThemePage = val
      this.fetchThemeDataList()
    },
    handlePositionSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pagePositionNum = val
      this.fetchPositionDataList()
    },
    handlePositionCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPositionPage = val
      this.fetchPositionDataList()
    },
    handlePreachSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pagePreachNum = val
      this.fetchPreachDataList()
    },
    handlePreachCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPreachPage = val
      this.fetchPreachDataList()
    },
    searchResume () {
      this.fetchResumeDataList()
    },
    searchTheme () {
      this.fetchThemeDataList()
    },
    searchPosition () {
      this.fetchPositionDataList()
    },
    searchPreach () {
      this.fetchPreachDataList()
    },
    viewResume (resumeUrl) {
      window.open(resumeUrl)
    },
    viewTheme (id) {
      this.$router.push({
        path: '/questionList',
        query: {
          themeDetailId: id,
          accountType: 'company'
        }
      })
    },
    viewPositonResume (id) {
      this.isCompanyInfo = false
      this.isPosition = false
      this.isResume = true
      this.positionId = id
      this.fetchResumeDataList()
    },
    viewPreach (id) {
      console.log('查看宣讲会')
    },
    toCampus () {
      window.open(this.companyInfo.companyCampusUrl)
    },
    enter () {
      this.coverAvatar = true
    },
    leave () {
      this.coverAvatar = false
    },
    async handleUpload (req) {
      const result = await this.uploadImg({
        file: req.file,
        domain: this.domain,
        qiniuaddr: this.qiniuaddr
      })
      this.cacheUrl = result
    },
    async handleAvatarSuccess (res, file) {
      this.newCompanyInfo.companyImgUrl = this.cacheUrl
      await this.updatecompanyInfo(this.newCompanyInfo)
    },
    beforeAvatarUpload (file) {
      this.newCompanyInfo = _.cloneDeep(this.companyInfo)
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isPNG) {
        this.$message.error('上传头像图片只能是 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isPNG && isLt2M
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
      position: relative;
      .avatar {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        cursor: pointer;
      }
      .avatar img {
        width: 60px;
        border-radius: 50%;
      }
      .cover {
        position: absolute;
        top: 0;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgba($color: #000000, $alpha: .2);

        img {
          width: 20px;
          height: 20px;
          margin-top: 20px;
        }
      }
      .info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .info-left {
          display: flex;
          flex-direction: column;
          // align-items: center;
        }
        .info-top{
          text-align: left;
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
        .campus {
          cursor: pointer;
          .two {
            color: #42c1a2;
          }
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
        cursor: pointer;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top span {
          user-select: text;
        }
        .bottom {
          color: #999;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .rate {
            display: flex;
            align-items: center;
          }
        }
        .bottom span {
          user-select: text;
        }
      }
    }
    .pagination {
      float: right;
    }
  }
}

.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 160px 0;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  .no-data-img {
    width: 100px;
    margin-bottom: 15px;
  }
  .no-data-title {
    color: #999;
  }
}
</style>
