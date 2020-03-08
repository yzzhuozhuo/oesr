<template>
  <div class="job">
    <swiper
      :swiperImgs="swiperImgs"
      :height="200"
    />
    <div class="header-menu">
      <div
        class="menu-card"
        v-for="(item, index) in menuCardData"
        :key="index"
        @click="toNewPage(item.routerPath)"
      >
        <img
          :src="item.src"
          class="img"
        >
        <div class="title">{{item.title}}</div>
      </div>
    </div>
    <div class="rec-wrap">
      <card-title titleName="推荐" />
      <div class="main">
        <job-card
          v-for="(item, index) in jobCardData"
          :key="index"
          :jobCardData="item"
        />
      </div>
    </div>
    <div class="rec-wrap">
      <card-title titleName="热门企业" />
      <div class="main">
        <job-card
          v-for="(item, index) in jobCardData"
          :key="index"
          :jobCardData="item"
        />
      </div>
    </div>
    <div class="rec-wrap">
      <card-title titleName="实习职位" />
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
      <div class="post-list">
        <post-card
          v-for="(item, index) in 32"
          :key="index"
          :postCardData="item"
        />
      </div>
    </div>
    <div class="rec-wrap">
      <card-title titleName="公司主页" />
      <div class="company-wrap">
        <company-card
          v-for="(item, index) in companyData"
          :key="index"
          :companyData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import JobCard from '@/components/JobCard'
import Selector from '@/components/Selector'
import PostCard from '@/components/PostCard'
import CardTitle from '@/components/CardTitle'
import CompanyCard from '@/components/CompanyCard'
import practice from '@/assets/practice.png'
import schedule from '@/assets/schedule.png'
import calendar from '@/assets/calendar.png'
import preach from '@/assets/preach.png'

export default {
  name: 'JobPage',
  components: {
    Swiper,
    JobCard,
    Selector,
    PostCard,
    CardTitle,
    CompanyCard
  },
  data () {
    return {
      swiperImgs: [
        'https://uploadfiles.nowcoder.com/images/20200227/339694163_1582804471958_AD8B368EA1D50F999423FF2A5F2DC6C2',
        'https://uploadfiles.nowcoder.com/images/20200217/3985294_1581947783711_181D2EA526633BFB154F4A4C9A5F5FE2'
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
      ],
      menuCardData: [
        {
          src: practice,
          title: '实习广场',
          routerPath: 'practiceSquare'
        },
        {
          src: schedule,
          title: '校招日程',
          routerPath: 'recruitSchedule'
        },
        {
          src: calendar,
          title: '笔试日历',
          routerPath: 'writeCalendar'
        },
        {
          src: preach,
          title: '宣讲信息',
          routerPath: 'preachList'
        }
      ],
      jobCardData: [
        {
          title: '唯品会2020春季招校招',
          href: 'https://campus.vip.com/',
          src:
            'https://uploadfiles.nowcoder.com/images/20200225/90999146_1582599556818_067B1F7C4AEBB85803DEFF04BA349A0B'
        },
        {
          title: '乐元素2020春季校园招聘',
          href: 'https://app.mokahr.com/campus_apply/leyuansu/2357#/?_k=jv1ipu',
          src:
            'https://uploadfiles.nowcoder.com/images/20200302/188581226_1583118953461_F02C212CE153E65CC6814AAA6A84D49C'
        },
        {
          title: '平安科技2020线上春季校园招聘',
          href: 'http://campus.pingan.com/tech',
          src:
            'https://uploadfiles.nowcoder.com/images/20200225/339694163_1582632117921_34B88BDFDAA601E0097BC3368B92D20D'
        },
        {
          title: '携程旅行2020校园招聘',
          href: 'http://campus.ctrip.com/#/',
          src:
            'https://uploadfiles.nowcoder.com/images/20200302/339694163_1583161657092_19A58D529E0790FFEF450BDB70348390'
        },
        {
          title: '斗鱼2020届&2021届校园招聘',
          href: 'https://www.douyu.com/topic/zhaopin',
          src:
            'https://uploadfiles.nowcoder.com/images/20200304/90999146_1583323557988_831A61D8E5CFD20220A2893E330A7C36'
        },
        {
          title: '竞技世界2020春季校招',
          href: 'https://campus.jj.cn/#/index',
          src:
            'https://uploadfiles.nowcoder.com/images/20200303/90999146_1583215346902_5920543AACC6261AA622BB8C304BD4CF'
        },
        {
          title: 'Shopee 深圳研发中心2020春招',
          href:
            'https://app.mokahr.com/campus_apply/shopee/2962?sourceToken=becca2b8581b993a0b40a51d93a6f82e#/?_k=s6fu80',
          src:
            'https://uploadfiles.nowcoder.com/images/20200205/3985294_1580870233570_4C61068DB0BB39682AB72BB7C654F62F'
        },
        {
          title: '米哈游2020春季校园招聘',
          href: 'https://join.mihoyo.com/#/?_k=bu0m1e',
          src:
            'https://uploadfiles.nowcoder.com/images/20200206/339694163_1580990103037_586DA3958484DA9C56C84E854BD21EDD'
        },
        {
          title: '多益网络2020春季校园招聘',
          href: 'https://xz.duoyi.com/',
          src:
            'https://uploadfiles.nowcoder.com/images/20200207/188581226_1581065512465_C893F8E7BB7855B8F8259755E2581EB5'
        },
        {
          title: '陌陌暑期实习生',
          href: 'https://campus.immomo.com/#/?_k=4dq1a6',
          src:
            'https://uploadfiles.nowcoder.com/images/20200220/90999146_1582186105255_F457C6D723F060706D5358DE719FDA17'
        },
        {
          title: '招行信用卡中心2021春季校招',
          href: 'https://zhaopin.ccc.cmbchina.com/applicant/#/campus',
          src:
            'https://uploadfiles.nowcoder.com/images/20200221/90999146_1582253473745_E962FC435748ECE7D4A7F5308C150A0A'
        },
        {
          title: '蘑菇街2020&2021届校园招聘',
          href: 'https://job.mogu.com/#/?_k=v1r03l',
          src:
            'https://uploadfiles.nowcoder.com/images/20200226/90999146_1582727012812_C4B69CF2AAFB85E7B8EAA6F95E20EF2F'
        },
        {
          title: '网易互娱2021暑期实习生招聘',
          href: 'http://game.campus.163.com/',
          src:
            'https://uploadfiles.nowcoder.com/images/20200227/90999146_1582777832951_76DC274567553FB056CE3DFBC025D7DD'
        },
        {
          title: '字节跳动2020春季实习生招聘',
          href: 'https://job.bytedance.com/campus/position?_tracking=690243518',
          src:
            'https://uploadfiles.nowcoder.com/images/20200207/33317073_1581044164439_3D302EF008DDD4BD9A03D8E2B3CBD259'
        },
        {
          title: '平安产险总部2020校园招聘',
          href: 'http://campus.pingan.com/pacx/template3',
          src:
            'https://uploadfiles.nowcoder.com/images/20200208/339694163_1581144131691_5B3B52C688EFB79083EB650DDD4C64F8'
        },
        {
          title: '深信服2020校园招聘',
          href: 'https://app.mokahr.com/campus_apply/sangfor/5368#/?_k=z5zi63',
          src:
            'https://uploadfiles.nowcoder.com/images/20200215/3985294_1581754114570_08E24D23C57E8458D8A89AFB7C45CC26'
        },
        {
          title: '三七互娱2020春季校园招聘',
          href: 'https://zhaopin.37.com/index.php?m=Home&c=campus&a=index',
          src:
            'https://uploadfiles.nowcoder.com/images/20200218/339694163_1582012256241_409AEE95F860B7AFCA992F77A7F7150A'
        },
        {
          title: '4399游戏2020校园招聘',
          href: 'http://web.4399.com/campus/',
          src:
            'https://uploadfiles.nowcoder.com/images/20200217/90999146_1581938509690_C3E4BDECA1A0241CE29060E001250B75'
        }
      ],
      companyData: [
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        },
        {
          name: '滴滴',
          img:
            'https://uploadfiles.nowcoder.com/images/20180917/4107856_1537181213012_6A26EF59C4E0E6CB623831801FDB15F0',
          url: 'http://campus.didiglobal.com/campus'
        }
      ]
    }
  },
  mounted () {},
  methods: {
    toNewPage (routerPath) {
      this.$router.push({
        path: routerPath
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.rec-wrap {
  width: 1200px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px 0;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 3px;

  .main {
    width: 1166px;
    margin: 0 auto;
  }

  .company-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1150px;
    margin: 0 auto;
  }
}

.post-selector {
  background-color: #f5f5f5;
  padding: 1px;
}
.city {
  text-align: left;
  display: flex;
  color: #333;
  margin: 20px;
}

.location {
  height: 28px;
  line-height: 26px;
  margin-right: 20px;
}

.post-list {
  width: 1172px;
  margin: 20px auto 0;
}

.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 15px;
  .menu-card {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 50px;
    .img {
      width: 40px;
      height: 40px;
      padding-right: 10px;
    }
  }
  .menu-card:hover {
    transform: scale(1.1);
  }
}
</style>
