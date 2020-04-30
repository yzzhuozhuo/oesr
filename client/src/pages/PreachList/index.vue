<template>
  <div class="main">
    <div class="header">
      <div class="menu-title" v-if="accountType === 'student'">求职首页 / 宣讲会</div>
      <div class="search-title-top" v-if="accountType === 'student'">宣讲会查询系统</div>
      <div class="search-title-top" v-if="accountType === 'company'">宣讲会发布系统</div>
      <div class="search-title-bottom" v-if="accountType === 'student'">第一时间获得宣讲信息</div>
      <div class="search-title-bottom" v-if="accountType === 'company'">第一时间发布宣讲信息</div>
      <div class="input-content">
        <el-input
          clearable
          class="input-p"
          placeholder="请输入宣讲学校/宣讲城市/宣讲公司查询"
          v-model="searchVal">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="hot">
        <img src="@/assets/fire.png" class="hot-img">
        <div class="hot-title">热门院校：</div>
        <div class="hot-school" v-for="(item, index) in hotSchool" :key="index" @click="setInpval(item)">
          {{item}}
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="content">
        <div class="title">
          <div class="point"></div>
          <span class="preach">近期宣讲会</span>
          <span class="totle">共{{this.total}}条信息</span>
          <el-button type="text" class="btn" @click="addMsg" v-if="!hasLogin">+我要添加</el-button>
          <el-button type="text" class="btn" @click="addMsg" v-if="accountType === 'student'">+我要添加</el-button>
          <el-button type="text" class="btn" @click="addMsg" v-if="accountType === 'company'">+我要发布</el-button>
        </div>
        <div class="select">
          <el-select clearable v-model="selectCity" placeholder="请选择宣讲城市">
            <el-option
              v-for="item in cityOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select clearable v-model="selectSchool" placeholder="请选择宣讲学校" class="select-school">
            <el-option
              v-for="item in schoolOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker
            v-model="pickDateVal"
            type="datetimerange"
            value-format="timestamp"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            :default-time="defaultTime">
          </el-date-picker>
        </div>
        <div class="preach-flex">
          <div class="preach-content" v-for="(item, index) in preachData" :key="index">
            <div class="title">
              <div class="left">
                <span class="preach-company">{{item.preachCompany}}</span>
                <el-tag effect="dark" size="small" v-if="new Date(item.preachTime).getMonth() < new Date().getMonth() || (new Date(item.preachTime).getMonth() < new Date().getMonth() && new Date(item.preachTime).getDate() < new Date().getDate())" type="info">已结束</el-tag>
                <el-tag effect="dark" size="small" v-if="new Date(item.preachTime).getMonth() === new Date().getMonth() && new Date(item.preachTime).getDate() === new Date().getDate()" type="success">今日</el-tag>
                <el-tag effect="dark" size="small" v-if="tomorrowStart <= new Date(item.preachTime) && new Date(item.preachTime) <= tomorrowEnd">明日</el-tag>
              </div>
              <div class="right" v-if="accountType === 'company'">
                <el-button type="primary" size="mini" @click="removePreach(item._id)">删除</el-button>
              </div>
            </div>
            <div class="preach-info">
              <div class="city">
                <i class="el-icon-map-location"></i>
                <span>宣讲城市：{{item.preachCity}}</span>
              </div>
              <div class="school">
                <i class="el-icon-school"></i>
                <span>宣讲高校：{{item.preachSchool}}</span>
              </div>
              <div class="time">
                <i class="el-icon-time"></i>
                <span>宣讲时间：{{item.preachTime}}</span>
              </div>
            </div>
          </div>
          <div class="no-data" v-if="this.preachData.length === 0 || !this.preachData">
            <img src="//static.nowcoder.com//images/res/empty/2.png">
            <div>暂无宣讲会信息</div>
          </div>
        </div>
        <div class="pagination" v-if="this.preachData.length !== 0">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size.sync="pageNum"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="dialog-content">
      <el-dialog
        :title="accountType === 'student' ? '添加宣讲会' : '发布宣讲会'"
        :visible.sync="addMesDialogVisible"
        width="40%">
        <div class="form-content">
          <el-form ref="form" :model="addPreachForm" label-width="80px">
            <el-form-item label="宣讲标题">
              <el-input v-model="addPreachForm.preachCompany" placeholder="请输入宣讲会标题"></el-input>
            </el-form-item>
            <el-form-item label="宣讲城市">
              <el-input v-model="addPreachForm.preachCity" placeholder="请输入宣讲会所在城市"></el-input>
            </el-form-item>
            <el-form-item label="宣讲学校">
              <el-input v-model="addPreachForm.preachSchool" placeholder="请输入宣讲会所在学校"></el-input>
            </el-form-item>
            <el-form-item label="宣讲时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="addPreachForm.preachDate" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2" style="text-align: center; color: #DCDFE6">—</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="addPreachForm.preachTime" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addMesDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import _ from 'lodash'
const tomorrowStart = new Date(new Date(new Date().toLocaleDateString()).getTime() + 3600 * 1000 * 24 * 1)
const tomorrowEnd = new Date(new Date(new Date().toLocaleDateString()).getTime() + 3600 * 1000 * 24 * 1 + 24 * 60 * 60 * 1000 - 1)

export default {
  name: 'NewPage',
  data () {
    return {
      searchVal: '',
      selectCity: '',
      selectSchool: '',
      pickDateVal: '',
      currentPage: 1, // 分页
      pageNum: 10,
      total: 0,
      defaultTime: ['00:00:00', '23:59:59'],
      pickerOptions: {
        shortcuts: [{
          text: '今日',
          onClick (picker) {
            const start = new Date(new Date(new Date().toLocaleDateString()).getTime())
            const end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '明日',
          onClick (picker) {
            const start = new Date(new Date(new Date().toLocaleDateString()).getTime() + 3600 * 1000 * 24 * 1)
            const end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 3600 * 1000 * 24 * 1 + 24 * 60 * 60 * 1000 - 1)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            end.setTime(start.getTime() + 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            end.setTime(start.getTime() + 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      cityOptions: [{
        value: '北京',
        label: '北京'
      }, {
        value: '厦门',
        label: '厦门'
      }, {
        value: '深圳',
        label: '深圳'
      }, {
        value: '成都',
        label: '成都'
      }, {
        value: '陕西',
        label: '陕西'
      }],
      schoolOptions: [
        {
          value: '西安科技大学',
          label: '西安科技大学'
        },
        {
          value: '陕西科技大学',
          label: '陕西科技大学'
        },
        {
          value: '西安电子科技大学',
          label: '西安电子科技大学'
        },
        {
          value: '北京大学',
          label: '北京大学'
        }
      ],
      preachData: [],
      hotSchool: ['北京大学', '西安电子科技大学', '西安科技大学'],
      addMesDialogVisible: false,
      addPreachForm: {
        preachCompany: '',
        preachCity: '',
        preachSchool: '',
        preachDate: '',
        preachTime: ''
      },
      tomorrowStart: tomorrowStart,
      tomorrowEnd: tomorrowEnd
    }
  },
  computed: {
    ...mapState({
      companyInfo: state => state.company.companyList,
      account: state => state.account,
      preachList: state => state.preach.preachList || [],
      totalPage: state => state.preach.totalPage || 0,
      pageNumber: state => state.preach.pageNumber || 10,
      page: state => state.preach.page || 1
    }),
    ...mapGetters(['hasLogin', 'accountType']),
    fetchList () {
      return `${this.searchVal}_${this.selectCity}_${this.selectSchool}_${this.pickDateVal}`
    }
  },
  watch: {
    preachList () {
      this.preachData = this.formatPreachTime(this.preachList)
    },
    totalPage () {
      this.total = this.totalPage
    },
    pageNumber () {
      this.pageNum = this.pageNumber
    },
    page () {
      this.currentPage = this.page
    },
    fetchList () {
      this.fetchPreachDataList()
    }
  },
  mounted () {
    setTimeout(() => {
      this.fetchPreachDataList()
    }, 1000)
  },
  methods: {
    ...mapActions([
      'fetchPreachList',
      'updatePreachList',
      'removeCalendarList'
    ]),
    formatPreachTime (preachList) {
      const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
      const data = _.cloneDeep(preachList)
      return data.map(item => {
        item.preachTime = moment(item.preachTime).format(TIME_FORMAT)
        return item
      })
    },
    fetchPreachDataList () {
      let params = {
        accountType: this.accountType,
        companyId: this.companyInfo.companyId,
        preachStartTime: this.pickDateVal ? this.pickDateVal[0] : [],
        preachEndTime: this.pickDateVal ? this.pickDateVal[1] : [],
        searchValue: this.searchVal,
        selectCity: this.selectCity,
        selectSchool: this.selectSchool,
        currentPage: this.currentPage,
        pageNum: this.pageNum
      }
      this.fetchPreachList(params)
    },
    addMsg () {
      if (!this.account.token) {
        this.$message.error('请先登录，才能添加哦~')
        return this.$router.replace({
          path: '/login'
        })
      }
      console.log('增加信息')
      this.addMesDialogVisible = true
      console.log(111, this.preachData)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageNum = val
      this.fetchPreachDataList()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.fetchPreachDataList()
    },
    setInpval (val) {
      console.log(11111111111, val)
      this.searchVal = val
    },
    onSubmit () {
      console.log('submit!')
      const TIME_FORMAT = 'YYYY-MM-DD' // YYYY-MM-DD
      const HOUR_FORMAT = 'HH:mm:ss' // HH:mm:ss
      let formatMonths = moment(this.addPreachForm.preachDate).format(TIME_FORMAT)
      let formatHour = moment(this.addPreachForm.preachTime).format(HOUR_FORMAT)
      let formatTime = moment(new Date(`${formatMonths} ${formatHour}`), 'YYYY-MM-DD HH:mm:ss').valueOf()
      let data = {
        preachCompany: this.addPreachForm.preachCompany,
        preachCity: this.addPreachForm.preachCity,
        preachSchool: this.addPreachForm.preachSchool,
        preachTime: formatTime
      }
      if (this.accountType === 'company') data.companyId = this.companyInfo.companyId
      this.updatePreachList(data).then(() => {
        this.addMesDialogVisible = false
        this.fetchPreachDataList()
        if (this.accountType === 'student') {
          this.$message({
            type: 'success',
            message: '添加宣讲信息成功~'
          })
        } else {
          this.$message({
            type: 'success',
            message: '发布宣讲信息成功~'
          })
        }
      })
    },
    removePreach (id) {
      console.log(888889, id)
      this.removeCalendarList({ preachId: id }).then(() => {
        this.fetchPreachDataList()
        this.$message({
          type: 'success',
          message: '删除宣讲信息成功~'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('http://static.nowcoder.com/images/res/careerTalk/banner.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
      .menu-title {
        position: relative;
        top: 22px;
        left: -500px;
        color: #999;
        font-size: 15px;
      }
      .search-title-top {
        font-size: 42px;
        color: #fff;
        font-weight: 400;
        margin: 35px 0 5px;
      }
      .search-title-bottom {
        font-size: 20px;
        color: #fff;
      }
      .hot {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 14px;
        margin-bottom: 60px;
        .hot-img {
          width: 13px;
          height: 16px;
          margin-right: 5px;
        }
        .hot-school {
          margin-right: 10px;
          cursor: pointer;
        }
      }
    .input-content {
      width: 430px;
      height: 34px;
      margin: 30px 0 15px;
    }
  }
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px;
    .content {
      border: 1px solid #e0e0e0;
      width: 1000px;
      background: #fff;
      padding: 15px;
      display: flex;
      // justify-content: center;
      // align-items: center;
      flex-direction: column;
      .title {
        font-size: 16px;
        line-height: 16px;
        float: left;
        margin-left: 5px;
        .preach {
          font-weight: 700;
        }
        .point {
          background: #ff6547;
          content: "";
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 5px;
          margin-bottom: 2px;
          vertical-align: middle;
        }
        .totle {
          color: #888;
          font-size: 14px;
          padding-left: 10px;
        }
        .btn {
          position: relative;
          right: -730px;
        }
      }
      .select {
        margin: 10px 0 15px 5px;
        .select-school {
          padding: 0 5px;
        }
      }
      .preach-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .preach-content {
          width: 960px;
          border: 1px solid #d4d4d4;
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
          padding: 18px;
          cursor: pointer;
          .title {
            margin-bottom: 14px;
            font-size: 17px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .preach-company {
              padding-right: 10px;
            }
          }
          .preach-info {
            display: flex;
            align-items: center;
            font-size: 14px;
            .school {
              margin: 0 30px;
            }
            .city i {
              color: #909090;
              font-weight: bold;
            }
            .school i {
              color: #909090;
              font-weight: bold;
            }
            .time i {
              color: #909090;
              font-weight: bold;
            }
          }
        }
        .no-data {
          margin: 90px 0;
          text-align: center;
        }
        .no-data img {
          width: 80px;
          height: 80px;
          margin-bottom: 10px;
        }
      }
      .preach-content:hover {
        background: #eeeeee;
        color: #25bb9b;
      }
      .pagination {
        text-align: right;
      }
    }
  }
}

.input-p /deep/ input {
  border-radius: 50px;
  border: 1px solid #fff;
  color: #fff;
}

</style>
