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
          v-for="(item, index) in interestedData"
          :key="index"
          :jobCardData="item"
        />
      </div>
    </div>
    <div class="rec-wrap">
      <card-title titleName="热门企业" />
      <div class="main">
        <job-card
          v-for="(item, index) in campusData"
          :key="index"
          :jobCardData="item"
        />
      </div>
    </div>
    <div class="rec-wrap">
      <card-title titleName="公司主页" />
      <div class="company-wrap">
        <company-card
          v-for="(item, index) in campusData"
          :key="index"
          :companyData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Swiper from '@/components/Swiper'
import JobCard from '@/components/JobCard'
import Selector from '@/components/Selector'
import PostCard from '@/components/PostCard'
import CardTitle from '@/components/CardTitle'
import CompanyCard from '@/components/CompanyCard'
import practice from '@/assets/qz.png'
import schedule from '@/assets/rc.png'
import calendar from '@/assets/bs.png'
import preach from '@/assets/xj1.png'

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
        {
          img: 'http://uploadfiles.nowcoder.com/images/20200314/33317073_1584156674985_CE64A6BFE3EED9F3201EF1390D4ED623',
          url: 'https://www.nowcoder.com/activity/2020hongshan/index'
        },
        {
          img: 'http://uploadfiles.nowcoder.com/images/20200306/339694163_1583500819306_0A14088F8158DFE8F8AD684894FB33B5',
          url: 'https://campus.kuaishou.cn/#/campus/index/'
        },
        {
          img: 'http://uploadfiles.nowcoder.com/images/20200313/90999146_1584103353322_54CE75E1DB7496268EE0E7C5046362B6',
          url: 'https://webank.cheng95.com/positions/intern?channel=2&project_id=5'
        }
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
          title: '求职广场',
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
      campusData: [],
      interestedData: [],
      studentData: []
    }
  },
  computed: {
    ...mapState({
      campusList: state => state.campus.campusList,
      interestedCompany: state => state.campus.interestedCompany,
      studentList: state => state.student.studentList
    })
  },
  watch: {
    campusList () {
      this.campusData = this.campusList
    },
    interestedCompany () {
      this.interestedData = this.interestedCompany
    }
  },
  created () {
  },
  mounted () {
    console.log(1111, this.studentList)
    // 根据学生感兴趣的公司进行推荐，即要拿到学生的信息
    let params = {
      interestedCompany: this.studentList && this.studentList.interestedCompany
      // interestedCompany: ['网易', '携程旅行', '字节跳动', '度小满', '完美世界', '作业帮', '网易互娱', '蘑菇街']
    }
    this.fetchCampusList(params)
  },
  methods: {
    ...mapActions([
      'fetchCampusList'
    ]),
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
    margin-right: 60px;
    .img {
      width: 40px;
      height: 40px;
      padding-right: 15px;
    }
  }
  .menu-card:hover {
    transform: scale(1.1);
  }
}

.menu-card:last-child {
  margin-right: 0;
}
</style>
