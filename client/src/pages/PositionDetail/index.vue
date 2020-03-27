<template>
  <div class="main">
    <div class="title">
      <i class="el-icon-arrow-left"></i>
      <!-- <span>职位首页 > {{positionDetailData.companyName}}</span> -->
      <span @click="goBack">返回职位列表</span>
    </div>
    <div class="card-content">
      <div class="card-left">
        <div class="position-title">
          <div class="point"></div>
          <span>职位详情</span>
        </div>
        <div class="content">
          <div class="introduce">
            <div class="header">
              <div class="introduce-title">
                <span>{{positionDetailData.positionTitle}}</span>
              </div>
              <div class="icon">
                <div class="post">
                  <i class="el-icon-suitcase-1"></i>
                  <span>{{positionDetailData.positionType}}</span>
                </div>
                <div class="location">
                  <i class="el-icon-map-location"></i>
                  <span>{{positionDetailData.positionCity}}</span>
                </div>
              </div>
              <div class="info">薪酬：{{positionDetailData.compensation}}  |  实习要求：{{positionDetailData.practiceRequire}}  |  转正机会：{{positionDetailData.becomeOfficial === '1' ? '有' : '无'}}</div>
            </div>
            <div class="section">
              <div class="duty">
                <div class="duty-title">
                  <img src="@/assets/zhize.png">
                  <span>岗位职责</span>
                </div>
                <div class="item" v-for="(item, index) in positionDetailData.jobResponsibilities" :key="index">
                  <div>{{item}}</div>
                </div>
              </div>
              <div class="duty">
                <div class="duty-title">
                  <img src="@/assets/yaoqiu.png">
                  <span>岗位要求</span>
                </div>
                <div class="item" v-for="(item, index) in positionDetailData.jobRequirements" :key="index">
                  <div>{{item}}</div>
                </div>
              </div>
              <div class="apply">
                <el-button
                  v-if="accountType === 'student'"
                  type="success"
                  @click="applyPositon"
                  :disabled="isDisabled"
                  :loading="isLoading">申请</el-button>
                <el-button
                  v-if="accountType === 'company'"
                  type="success"
                  @click="viewApplyPositon">查看申请</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-right">
        <div class="card-header">
          <div class="card-img">
            <img :src="positionDetailData.companyImgUrl">
          </div>
          <div class="card-company-name">{{positionDetailData.companyName}}</div>
        </div>
        <div class="info">
          <div class="info-content">
            <div class="item">
              <i class="el-icon-s-home"></i>
              <span>电商</span>
            </div>
            <div class="item">
              <i class="el-icon-s-data"></i>
              <span>暂无</span>
            </div>
            <div class="item">
              <i class="el-icon-location"></i>
              <span>{{positionDetailData.positionCity}}</span>
            </div>
          </div>
        </div>
        <div class="intro-flex">
          <div class="intor-content">
            <div class="intor-content-title">
              <i class="el-icon-set-up"></i>
              <span>公司简介</span>
            </div>
            <div class="content">
              <span>
                {{positionDetailData.companyProfile}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'PositionDetail',
  data () {
    return {
      positionDetailData: {},
      isDisabled: false,
      isLoading: false
    }
  },
  created () {
    let positionDetailId = this.$route.query.positionDetailId
    this.fetchPositionDetailList({ positionDetailId: positionDetailId })
    if (this.hasLogin) {
      this.fetchResumeList({ positionId: positionDetailId, studentId: this.studentInfo.studentId })
    }
  },
  mounted () {
  },
  computed: {
    ...mapState({
      account: state => state.account,
      companyInfo: state => state.company.companyList,
      studentInfo: state => state.student.studentList,
      positionDetailList: state => state.position.positionDetailList || {},
      resumeList: state => state.resumeList.resumeList || [],
      studentList: state => state.student.studentList
    }),
    ...mapGetters(['hasLogin', 'accountType'])
  },
  watch: {
    positionDetailList () {
      this.positionDetailData = this.positionDetailList
    },
    resumeList () {
      !this.resumeList.length ? this.isDisabled = false : this.isDisabled = true
    }
  },
  methods: {
    ...mapActions([
      'fetchPositionDetailList',
      'addResumeList',
      'fetchResumeList'
    ]),
    applyPositon () {
      if (!this.account.token) {
        this.$message.error('请先登录，才能申请职位哦~')
        return this.$router.replace({
          path: '/login'
        })
      }
      if (!this.studentList.resume.url) {
        this.$message.error('请先在个人主页上传简历，才能申请职位哦~')
        return
      }
      console.log(555, this.positionDetailData)
      let data = {
        studentId: this.studentList.studentId,
        studentName: this.studentList.studentName,
        companyId: this.positionDetailData.companyId,
        positionId: this.positionDetailData._id,
        positionTitle: this.positionDetailData.positionTitle,
        resumeTitle: this.studentList.resume.name,
        resumeUrl: this.studentList.resume.url
      }
      console.log(666, data)
      this.isLoading = true
      this.addResumeList(data).then(data => {
        this.isLoading = false
        this.isDisabled = true
        this.$message({
          type: 'success',
          message: '申请成功~'
        })
      })
    },
    goBack () {
      this.$router.push({
        path: '/practiceSquare'
      })
    },
    viewApplyPositon () {
      console.log(111111, this.positionDetailData._id)
      this.$router.push({
        path: '/company/page',
        query: {
          positionId: this.positionDetailData._id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  display: flex;
  flex-flow: column;
  padding: 15px 0;

  .title {
    margin: 0 170px 10px;
    font-size: 15px;
    color: #999;
    cursor: pointer;
  }

  .card-content {
    display: flex;
    justify-content: center;

    .card-left {
      background: #fff;
      border: 1px solid #e0e0e0;
      width: 668px;
      margin-right: 10px;
      padding: 15px;

      .position-title {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: bold;

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
      }

      .content {
        display: flex;
        justify-content: center;

        .introduce {
          border: 1px solid #e0e0e0;
          width: 648px;
          padding: 20px;

          .header {
            padding-bottom: 26px;
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 20px;

            .introduce-title {
              font-size: 18px;
              font-weight: bold;
            }

            .icon {
              margin: 15px 0;
              font-size: 15px;
              color: #9a9a9a;
              display: flex;

              .post {
                margin-right: 10px;
              }
            }

            .info {
              font-size: 14px;
            }
          }
          .section {
            .duty {
              margin-bottom: 20px;
              .duty-title {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
              }
              .duty-title span {
                font-weight: bold;
              }
              .item {
                font-size: 15px;
                margin-bottom: 15px;
              }
            }
            .duty img {
              width: 25px;
              height: 25px;
              padding-right: 10px;
            }
            .apply {
              text-align: center;
              .el-button--success {
                width: 100px;
              }
            }
          }
        }
      }
    }
    .card-right {
      // height: 380px;
      background: #fff;
      border: 1px solid #e0e0e0;
      width: 298px;
      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        padding-top: 10px;
        .card-company-name {
          font-size: 18px;
          font-weight: bold;
          margin: 10px 0;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .info-content {
          width: 90%;
          border-bottom: 1px dashed #eee;
          border-top: 1px dashed #eee;
          padding-top: 20px;
          color: #999;
          .item {
             margin-bottom: 20px;
          }
        }
      }
    }
    .intro-flex {
      display: flex;
      justify-content: center;
      padding: 20px 0;
      .intor-content {
        width: 90%;
        .intor-content-title {
          margin-bottom: 10px;
        }
        .content {
          color: #999;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
