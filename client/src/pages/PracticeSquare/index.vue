<template>
  <div class="practice">
    <banner
      :bannerImg="bannerImg"
      :height="80"
    />
    <div class="content">
      <div class="left">
        <card-title titleName="实习广场" />
        <logo-list />
        <div class="post-selector">
          <div class="city">
            <span class="location">地点</span>
            <selector :selectList="cityList" />
          </div>
          <div class="city">
            <span class="location">类别</span>
            <selector :selectList="typeList" />
          </div>
        </div>
        <div
          class="publish-card"
          v-for="(item, index) in 10"
          :key="index"
        >
          <div class="company" @click="positionDetail">
            <img src="https://uploadfiles.nowcoder.com/files/20190715/9398821_1563179722928_120.png">
            <div class="intr">
              <div class="intr-name">IMWeb前端开发实习生可转正</div>
              <div class="intr-com">腾讯</div>
            </div>
          </div>
          <div class="treat">
            <div class="treat-top">
              <div class="locate">
                <img :src="location">
                <span>深圳</span>
              </div>
              <div class="salary">
                <img :src="salary">
                <span>薪酬面议</span>
              </div>
              <div class="handle">处理快</div>
            </div>
            <div class="treat-bottom">
              <div class="pub-name">牛客843988600号</div>
              <div class="pub-other">39天前 | 简历处理率：100% | 平均处理：2天</div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
      <div class="right">
        <div class="publish">
          <div class="img"></div>
          <span>发布职位</span>
        </div>
        <div
          class="adver"
          v-for="(item, index) in 3"
          :key="index"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
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
      location,
      salary,
      bannerImg:
        'https://uploadfiles.nowcoder.com/images/20200227/999991356_1582788882962_3D701BDF90492AB964C923896E32F192',
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
        '全国',
        '北京',
        '上海',
        '广州',
        '深圳',
        '杭州',
        '南京',
        '成都',
        '厦门',
        '武汉',
        '西安',
        '长沙',
        '哈尔滨',
        '合肥',
        '其他'
      ],
      typeList: [
        '全部',
        '研发',
        '测试',
        '数据',
        '算法',
        '前端',
        '产品',
        '运营',
        '其他'
      ]
    }
  },
  mounted () {},
  methods: {
    positionDetail () {
      this.$router.push({
        path: 'PositionDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.practice {
  width: 1200px;
  margin: 80px auto;
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
</style>
