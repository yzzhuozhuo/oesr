<template>
  <div class="campus">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="campus-bread"
    >
      <el-breadcrumb-item :to="{ path: '/recruitSchedule' }">校招日程</el-breadcrumb-item>
      <el-breadcrumb-item>字节跳动</el-breadcrumb-item>
    </el-breadcrumb>
    <card-header />
    <time-table :plans="plans" />
    <!-- <find-post /> -->
  </div>
</template>

<script>
import CardHeader from './CardHeader'
import TimeTable from './TimeTable'
import FindPost from './FindPost'

export default {
  name: 'CampusDate',
  components: {
    CardHeader,
    TimeTable,
    FindPost
  },
  data () {
    return {
      plans: [
        {
          content: '内推',
          timestamp: '2月24日-4月30日',
          color: '#0bbd87'
        },
        {
          content: '网申',
          timestamp: '2月24日-4月30日',
          color: '#0bbd87'
        },
        {
          content: '线上宣讲',
          timestamp: '3月9日-3月13日 每天19:00',
          color: '#0bbd87'
        },
        {
          content: '笔试',
          timestamp: '3月上旬-5月中旬',
          color: '#0bbd87'
        },
        {
          content: '面试',
          timestamp: '3月上旬起',
          color: '#0bbd87'
        },
        {
          content: 'offer',
          timestamp: '3月上旬起',
          color: '#0bbd87'
        }
      ]
    }
  },
  mounted () {},
  methods: {}
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
