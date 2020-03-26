<template>
  <div class="campus">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="campus-bread"
    >
      <el-breadcrumb-item :to="{ path: '/recruitSchedule' }">校招日程</el-breadcrumb-item>
      <el-breadcrumb-item>{{campusDate.companyName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <card-header
      :companyName="campusDate.companyName"
      :companyImgUrl="campusDate.companyImgUrl"
      :campusUrl="campusDate.campusUrl"/>
    <time-table :plans="plans" :campusUrl="campusDate.campusUrl"/>
    <!-- <find-post /> -->
  </div>
</template>

<script>
import CardHeader from './CardHeader'
import TimeTable from './TimeTable'
import FindPost from './FindPost'
import { mapActions } from 'vuex'

export default {
  name: 'CampusDate',
  components: {
    CardHeader,
    TimeTable,
    FindPost
  },
  data () {
    return {
      campusDate: {}
    }
  },
  computed: {
    plans () {
      return [
        {
          content: '内推',
          timestamp: this.campusDate.timeTable && this.campusDate.timeTable.neitui,
          color: '#0bbd87'
        },
        {
          content: '网申',
          timestamp: this.campusDate.timeTable && this.campusDate.timeTable.wangshen,
          color: '#0bbd87'
        },
        {
          content: '线上宣讲',
          timestamp: this.campusDate.timeTable && this.campusDate.timeTable.neitui,
          color: '#0bbd87'
        },
        {
          content: '笔试',
          timestamp: this.campusDate.timeTable && this.campusDate.timeTable.bishi,
          color: '#0bbd87'
        },
        {
          content: '面试',
          timestamp: this.campusDate.timeTable && this.campusDate.timeTable.mianshi,
          color: '#0bbd87'
        },
        {
          content: 'offer',
          timestamp: this.campusDate.timeTable && this.campusDate.timeTable.offer,
          color: '#0bbd87'
        }
      ]
    }
  },
  mounted () {
    this.getCampusDate()
  },
  methods: {
    ...mapActions(['getCampusDateById']),
    async getCampusDate () {
      const { id } = this.$route.query
      const campusDate = await this.getCampusDateById(id)
      console.info(campusDate)
      this.campusDate = campusDate
    }
  }
}
</script>

<style lang="scss" scoped>
.campus {
  width: 1000px;
  margin: 0 auto;
  color: #333;

  &-bread {
    margin: 81px 0 0;
    line-height: 1.1;
  }
}
</style>
