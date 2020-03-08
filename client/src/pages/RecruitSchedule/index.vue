<template>
  <div class="schedule">
    <banner />
    <div class="content">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="全部"
          name="first"
        >
          <schedule-card />
        </el-tab-pane>
        <el-tab-pane
          label="国企/研究所"
          name="second"
        >国企/研究所</el-tab-pane>
        <el-tab-pane
          label="外企"
          name="third"
        >外企</el-tab-pane>
        <el-tab-pane
          label="银行/证券"
          name="fourth"
        >银行/证券</el-tab-pane>
        <el-tab-pane
          label="游戏"
          name="fourth"
        >游戏</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Banner from './Banner'
import ScheduleCard from './ScheduleCard'

export default {
  name: 'RecruitSchedule',
  components: {
    Banner,
    ScheduleCard
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule {
  min-width: 1200px;
  margin: 60px auto 0;

  .content {
    width: 1200px;
    padding: 25px 20px;
    margin: 20px auto;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    background: #fff;
  }
}
</style>
