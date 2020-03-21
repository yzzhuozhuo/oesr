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
      interestedCompany: this.studentList.interestedCompany
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
