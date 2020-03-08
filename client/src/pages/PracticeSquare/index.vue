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
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import CardTitle from '@/components/CardTitle'
import LogoList from '@/components/LogoList'
import Selector from '@/components/Selector'

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
  mounted () {}
}
</script>

<style lang="scss" scoped>
.practice {
  width: 1200px;
  margin: 80px auto;
}

.content {
  width: 100%;
  margin-top: 10px;

  .left {
    width: 888px;
    box-sizing: border-box;
    padding: 15px 0;
    background-color: #fff;

    .post-selector {
      background-color: #f5f5f5;
      padding: 1px;

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
  }
}
</style>
