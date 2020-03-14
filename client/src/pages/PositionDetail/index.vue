<template>
  <div class="main">
    <div class="title">
      <!-- <span>职位首页 > {{positionDetailData.companyName}}</span> -->
      <span>职位首页 > 蚂蚁金服</span>
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
                  <span>{{positionDetailData.PositionCity}}</span>
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
                  <div>- {{item}}</div>
                </div>
              </div>
              <div class="duty">
                <div class="duty-title">
                  <img src="@/assets/yaoqiu.png">
                  <span>岗位要求</span>
                </div>
                <div class="item" v-for="(item, index) in positionDetailData.jobRequirements" :key="index">
                  <div>{{index + 1}}、{{item}}</div>
                </div>
              </div>
              <div class="apply">
                <el-button type="success">申请</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-right">
        <div class="card-header">
          <div class="card-img">
            <!-- <img :src="positionDetailData.companyImgUrl"> -->
            <img src="https://uploadfiles.nowcoder.com/files/20170318/1697873_1489806769570_2.jpg">
          </div>
          <!-- <div class="card-company-name">{{positionDetailData.companyName}}</div> -->
          <div class="card-company-name">蚂蚁金服</div>
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
              <span>浙江</span>
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
                <!-- {{positionDetailData.companyProfile}} -->
                浙江蚂蚁小微金融服务集团股份有限公司，简称蚂蚁金服，正式成立于2014年，是专注于服务小微企业与普通消费者的互联网金融服务公司。
                其前身是成立于2000年10月，独立于阿里巴巴集团之外的中国内资公司——浙江阿里巴巴电子商务有限公司。 截至2018年，蚂蚁金服的估值达到1600亿美元，是全球最大的独角兽公司。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PositionDetail',
  data () {
    return {
      positionDetailData: {},
      positionDetailDataOld: {
        companyName: '蚂蚁金服',
        companyImgUrl: 'https://uploadfiles.nowcoder.com/files/20170318/1697873_1489806769570_2.jpg',
        companyProfile: '浙江蚂蚁小微金融服务集团股份有限公司，简称蚂蚁金服，正式成立于2014年，是专注于服务小微企业与普通消费者的互联网金融服务公司。 其前身是成立于2000年10月，独立于阿里巴巴集团之外的中国内资公司——浙江阿里巴巴电子商务有限公司。 截至2018年，蚂蚁金服的估值达到1600亿美元，是全球最大的独角兽公司。',
        positionTitle: '蚂蚁金服-2020-研发岗', // 职位标题
        positionType: '研发', // 职位类型 研发/测试/前端...
        PositionCity: '杭州', // 职位位置
        practiceRequire: '5天/周，3个月以上',
        compensation: '面议',
        becomeOfficial: '是',
        jobResponsibilities: [
          '负责国际事业群业务线开发，包括全球各地钱包',
          '业务实体包括：Alipay HK、Paytm、TNG、MYNT等',
          '将我们的技术输出到全球，创造无限的可能',
          '专注国际业务，致力于通过世界一流的全球化技术惠普全球消费者'
        ],
        jobRequirements: [
          '本科及以上学历，优秀的代码能力。',
          '热爱计算机科学和互联网技术，精通至少一门编程语言，包括但不仅限于：Java、C、C++、PHP、 Python、Go。',
          '掌握扎实的计算机基础知识，深入理解数据结构、算法和操作系统知识。',
          '有优秀的逻辑分析能力，能够对业务逻辑进行合理的抽象和拆分。',
          '有强烈的求知欲，优秀的学习和沟通能力。'
        ]
      }
    }
  },
  created () {
    let positionDetailId = this.$route.query.positionDetailId
    this.fetchPositionDetailList({ positionDetailId: positionDetailId })
  },
  mounted () {
  },
  computed: {
    ...mapState({
      positionDetailList: state => state.position.positionDetailList || {}
    })
  },
  watch: {
    positionDetailList () {
      this.positionDetailData = this.positionDetailList
    }
  },
  methods: {
    ...mapActions([
      'fetchPositionDetailList'
    ])
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
