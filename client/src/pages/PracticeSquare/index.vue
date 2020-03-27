<template>
  <div class="practice">
    <div @click="toCampus">
      <banner
        :bannerImg="bannerImg"
        :height="80"
      />
    </div>
    <div class="content">
      <div class="left">
        <div class="left-header">
          <card-title titleName="职位广场" />
          <el-input
            size="small"
            style="width: 200px"
            clearable
            class="input-p"
            placeholder="请输入公司进行查询"
            v-model="searchVal">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <logo-list
          v-if="accountType === 'student'"
          :path="path"
          @getCompanyName="getCompanyName"/>
        <div class="post-selector">
          <div class="city">
            <span class="location">地点</span>
            <selector :selectList="cityList" @selectedValList="selectedValList"/>
          </div>
          <div class="city">
            <span class="location">类别</span>
            <selector :selectList="typeList" @selectedValList="selectedValList"/>
          </div>
        </div>
        <div class="filter-tab">
          <div v-for="(item, index) in filterTags" :key="index" class="item" :class="activeIndex === index ? 'active' : 'nomal'" >
            <div @click="filterSearch(item.value, index)">{{item.title}}</div>
          </div>
        </div>
        <div
          class="publish-card"
          v-for="(item, index) in positionData"
          :key="index"
        >
          <div class="company" @click="toPositionDetail(item._id)">
            <img :src="item.companyImgUrl">
            <div class="intr">
              <div class="intr-name">{{item.positionTitle}}</div>
              <div class="intr-com">{{item.companyName}}</div>
            </div>
          </div>
          <div class="treat">
            <div class="treat-top">
              <div class="locate">
                <img :src="location">
                <span>{{item.positionCity}}</span>
              </div>
              <div class="salary">
                <img :src="salary">
                <span>薪酬：{{item.compensation}}</span>
              </div>
              <div class="handle" v-if="item.processingSpeed === 'fast'">处理快</div>
            </div>
            <div class="treat-bottom">
              <div class="pub-other">发布时间：{{item.createdAt}} | 简历处理率：{{item.processingRatio}} | 平均处理：{{item.processingTime}}天</div>
            </div>
          </div>
        </div>
        <div class="no-data" v-if="this.positionData.length === 0 || !this.positionData">
          <img src="//static.nowcoder.com//images/res/empty/2.png">
          <div>暂无匹配职位信息</div>
        </div>
        <div class="pagination" v-if="this.positionData.length !== 0">
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
      <div class="right">
        <div class="publish" @click="publishPost" v-if="accountType === 'company'">
          <div class="img"></div>
          <span>发布职位</span>
        </div>
        <div
          class="adver"
          v-for="(item, index) in 3"
          :key="index"
        ></div>
      </div>
      <div class="dialog-content">
        <el-dialog
          title="添加职位信息"
          :visible.sync="addMesDialogVisible"
          width="50%">
          <div class="form-content">
            <el-form ref="form" :model="addPositionForm" label-width="80px">
              <el-form-item label="职位名称">
                <el-input v-model="addPositionForm.positionTitle" placeholder="请输入职位名称，例如：蚂蚁金服-2020春招-前端工程师"></el-input>
              </el-form-item>
              <el-form-item label="职位类型">
                <el-input v-model="addPositionForm.positionType" placeholder="请输入职位类型，例如：研发/前端/测试..."></el-input>
              </el-form-item>
              <el-form-item label="所在城市">
                <el-input v-model="addPositionForm.positionCity" placeholder="请输入职位所在城市，例如杭州"></el-input>
              </el-form-item>
              <el-form-item label="薪酬待遇">
                <el-input v-model="addPositionForm.compensation" placeholder="请输入职位的薪酬待遇，例如面谈/200-300元/天..."></el-input>
              </el-form-item>
              <el-form-item label="简历处理">
                <el-select v-model="addPositionForm.processingTime" placeholder="请选择处理时间" style="width: 150px">
                  <el-option
                    v-for="item in timeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="addPositionForm.processingRatio" placeholder="请选择处理效率" style="width: 150px">
                  <el-option
                    v-for="item in ratioOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="addPositionForm.processingSpeed" placeholder="请选择处理速度" style="width: 150px">
                  <el-option
                    v-for="item in speedOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="实习要求">
                <el-input v-model="addPositionForm.practiceRequire" placeholder="请输入实习要求，例如：5天/周，3个月以上"></el-input>
              </el-form-item>
              <el-form-item label="转正机会">
                <el-radio v-model="addPositionForm.becomeOfficial" label="1">有转正机会</el-radio>
                <el-radio v-model="addPositionForm.becomeOfficial" label="0">无转正机会</el-radio>
              </el-form-item>
              <el-form-item label="岗位职责">
                <el-input v-model="addPositionForm.jobResponsibilities" type="textarea" :autosize="textareaSize" placeholder="请输入岗位职责，多条职责可按回车键换行填写"></el-input>
              </el-form-item>
              <el-form-item label="岗位要求">
                <el-input v-model="addPositionForm.jobRequirements" type="textarea" :autosize="textareaSize" placeholder="请输入岗位要求，多条要求可按回车键换行填写"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="addMesDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit">发布</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import _ from 'lodash'
import moment from 'moment'
import Banner from '@/components/Banner'
import CardTitle from '@/components/CardTitle'
import LogoList from '@/components/LogoList'
import Selector from '@/components/Selector'
import location from '@/assets/location.png'
import salary from '@/assets/salary.png'

export default {
  name: 'PracticeSquare',
  components: {
    Banner,
    CardTitle,
    LogoList,
    Selector
  },
  data () {
    return {
      searchVal: '',
      path: 'positionSquare',
      location,
      salary,
      activeIndex: 0,
      positionData: [],
      currentPage: 1, // 分页
      pageNum: 10,
      total: 0,
      selectCity: '',
      selectType: '',
      selectTab: '',
      filterTags: [
        {
          title: '默认',
          value: ''
        }, {
          title: '最新发布',
          value: 'new'
        }, {
          title: '最快处理',
          value: 'fast'
        }, {
          title: '处理率最高',
          value: 'ratio'
        }
      ],
      addMesDialogVisible: false,
      textareaSize: { minRows: 2, maxRows: 8 },
      bannerImg:
        'https://uploadfiles.nowcoder.com/images/20200207/33317073_1581044632109_870880B6B4BBEBE903A9F026B639A40B',
      disscussList: [
        '全部',
        '站内公告',
        '笔经面经',
        '我要提问',
        '技术交流',
        '产品运营',
        '留学生',
        '职业发展',
        '招聘信息',
        '资源分享',
        '猿生活',
        '工作以后'
      ],
      cityList: [
        {
          label: '全国',
          type: 'city'
        },
        {
          label: '北京',
          type: 'city'
        },
        {
          label: '上海',
          type: 'city'
        },
        {
          label: '深圳',
          type: 'city'
        },
        {
          label: '杭州',
          type: 'city'
        },
        {
          label: '南京',
          type: 'city'
        },
        {
          label: '成都',
          type: 'city'
        },
        {
          label: '南京',
          type: 'city'
        },
        {
          label: '厦门',
          type: 'city'
        },
        {
          label: '武汉',
          type: 'city'
        },
        {
          label: '西安',
          type: 'city'
        },
        {
          label: '长沙',
          type: 'city'
        },
        {
          label: '哈尔滨',
          type: 'city'
        },
        {
          label: '合肥',
          type: 'city'
        }
      ],
      typeList: [
        {
          label: '全部',
          type: 'post'
        },
        {
          label: '研发',
          type: 'post'
        },
        {
          label: '测试',
          type: 'post'
        },
        {
          label: '数据',
          type: 'post'
        },
        {
          label: '算法',
          type: 'post'
        },
        {
          label: '前端',
          type: 'post'
        },
        {
          label: '产品',
          type: 'post'
        },
        {
          label: '运营',
          type: 'post'
        }
      ],
      timeOptions: [
        {
          label: '一天',
          value: 1
        },
        {
          label: '两天',
          value: 2
        },
        {
          label: '三天',
          value: 3
        }
      ],
      ratioOptions: [
        {
          label: '100%',
          value: 1
        },
        {
          label: '90%',
          value: 0.9
        },
        {
          label: '80%',
          value: 0.8
        },
        {
          label: '70%',
          value: 0.7
        }
      ],
      speedOptions: [
        {
          label: '较快',
          value: 'fast'
        },
        {
          label: '中等',
          value: 'medium'
        },
        {
          label: '较慢',
          value: 'slow'
        }
      ],
      addPositionForm: {
        positionTitle: '', // 职位标题
        positionType: '', // 职位类型 研发/测试/前端...
        positionCity: '', // 职位城市
        processingRatio: '', // 简历处理率
        processingTime: '', // 简历处理时间
        processingSpeed: '', // 处理速度 ['fast', 'medium ', 'slow']
        compensation: '', // 薪酬 面议/200-300元/天
        practiceRequired: '',
        becomeOfficial: '', // 是否可以转正 是/否 1/0
        jobResponsibilities: '', // 岗位职责
        jobRequirements: '' // 岗位要求
      }
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      companyInfo: state => state.company.companyList,
      positionList: state => state.position.positionList || [],
      totalPage: state => state.position.totalPage || 0,
      pageNumber: state => state.position.pageNumber || 10,
      page: state => state.position.page || 1
    }),
    ...mapGetters(['accountType']),
    fetchList () {
      return `${this.selectCity}_${this.selectType}_${this.selectTab}_${this.searchVal}`
    }
  },
  watch: {
    positionList () {
      this.positionData = this.formatPositionData(this.positionList)
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
      this.fetchPositionDataList()
    }
  },
  mounted () {
    // this.fetchPositionDataList()
    setTimeout(() => {
      this.fetchPositionDataList()
    }, 1000)
  },
  methods: {
    ...mapActions([
      'fetchPositionList',
      'updatePositionList'
    ]),
    getCompanyName (companyName) {
      this.searchVal = companyName
    },
    formatPositionData (positionList) {
      const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
      const data = _.cloneDeep(positionList)
      return data.map(item => {
        item.createdAt = moment(item.createdAt).format(TIME_FORMAT)
        item.processingRatio = `${item.processingRatio * 100}%`
        return item
      })
    },
    toPositionDetail (id) {
      this.$router.push({
        path: 'PositionDetail',
        query: {
          positionDetailId: id
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageNum = val
      this.fetchPositionDataList()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.fetchPositionDataList()
    },
    filterSearch (type, index) {
      this.activeIndex = index
      this.selectTab = type
    },
    selectedValList (item) {
      if (item.type === 'city') {
        item.label === '全国' ? this.selectCity = '' : this.selectCity = item.label
      } else {
        item.label === '全部' ? this.selectType = '' : this.selectType = item.label
      }
    },
    onSubmit () {
      let data = _.cloneDeep(this.addPositionForm)
      data.jobResponsibilities = data.jobResponsibilities.split(/[\s\n]/)
      data.jobRequirements = data.jobRequirements.split(/[\s\n]/)
      data.companyId = this.companyInfo.companyId
      data.companyName = this.companyInfo.companyName
      data.companyImgUrl = this.companyInfo.companyImgUrl
      data.companyProfile = this.companyInfo.companyProfile
      console.log(666, data)
      this.updatePositionList(data).then(() => {
        this.addMesDialogVisible = false
        this.fetchPositionDataList()
        this.$message({
          type: 'success',
          message: '发表职位成功~'
        })
      })
    },
    publishPost () {
      // TODO发布职位
      if (!this.account.token) {
        this.$message.error('请先登录，才能发布职位哦~')
        return this.$router.replace({
          path: '/login'
        })
      }
      this.addMesDialogVisible = true
    },
    fetchPositionDataList () {
      let params = {
        searchVal: this.searchVal,
        accountType: this.accountType,
        companyId: this.accountType === 'company' ? this.companyInfo.companyId : '',
        selectCity: this.selectCity,
        selectType: this.selectType,
        selectTab: this.selectTab,
        currentPage: this.currentPage,
        pageNum: this.pageNum
      }
      this.fetchPositionList(params)
    },
    toCampus () {
      window.open('https://job.bytedance.com/campus/position?_tracking=214035798')
    }
  }
}
</script>

<style lang="scss" scoped>
.practice {
  width: 1200px;
  margin: 75px auto 30px;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .left {
    width: 888px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #d6d6d6;
    padding: 15px 0;
    background-color: #fff;

    .left-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 15px 2px 0;
      .input-p {
        margin-bottom: 15px;
      }
    }

    .no-data {
      text-align: center;
      margin: 100px;
    }

    .no-data img {
      padding-bottom: 10px;
    }

    .pagination {
      width: 400px;
      margin: 30px auto 10px;
    }

    .post-selector {
      background-color: #f5f5f5;
      padding: 1px;
      margin-bottom: 10px;

      .city {
        text-align: left;
        display: flex;
        color: #333;
        margin: 20px;

        .location {
          height: 28px;
          line-height: 26px;
          margin-right: 20px;
        }
      }
    }
    .filter-tab {
      display: flex;
      padding-left: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #d6d6d6;
      cursor: pointer;
      font-size: 14px;
      .item {
        margin-right: 10px;
        display: flex;
        align-items: center;
        border-right: 1px solid #d6d6d6;
        padding-right: 10px;
      }
      .item:nth-child(4) {
        border: none;
      }
    }

    .publish-card {
      width: 848px;
      height: 95px;
      margin: 0 auto;
      padding: 20px 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      display: flex;

      .company {
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          cursor: pointer;
        }
        .intr {
          width: 270px;
          height: 54px;
          border-right: 1px solid #ddd;

          &-name {
            font-weight: bold;
            margin-bottom: 5px;

            &:hover {
              color: #22ae90;
            }
          }
        }
      }

      .treat {
        width: 495px;
        height: 54px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        &-top,
        &-bottom {
          display: flex;
        }

        &-top {
          margin-bottom: 10px;
          font-size: 14px;
          color: #888;

          span {
            vertical-align: middle;
          }

          .salary {
            margin-left: 40px;
            flex: 1;

            img {
              width: 15px;
              height: 15px;
              vertical-align: middle;
            }
          }

          .handle {
            color: #fff;
            font-size: 12px;
            border-radius: 10px;
            padding: 2px 8px;
            background-color: #00bc9b;
          }

          .locate {
            img {
              width: 14px;
              height: 16px;
              vertical-align: middle;
            }
          }
        }

        &-bottom {
          font-size: 12px;
          color: #aaa;

          .pub-name {
            color: #418ac3;
            margin-right: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .right {
    width: 300px;
    box-sizing: border-box;

    .publish {
      border: 1px solid #d6d6d6;
      border-radius: 4px;
      background: #fff;
      font-size: 16px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      padding: 15px;
      cursor: pointer;

      .img {
        width: 21px;
        height: 20px;
        background-image: url(https://static.nowcoder.com/images/img/recommand/manage-icon.png);
        margin-right: 10px;
      }

      span {
        &:hover {
          color: #22ae90;
        }
      }
    }

    .adver {
      height: 100px;
      border-radius: 4px;
      background-image: url(https://uploadfiles.nowcoder.com/images/20190424/9398821_1556092713999_6E6D5B1038EFE5E277403B19791E7EA8);
      margin-bottom: 10px;
    }
  }
}

.nomal {
  color: #888;
}

.active {
  color: #25bb9b;
}

</style>
