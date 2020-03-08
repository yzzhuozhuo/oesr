<template>
  <div class="schedule">
    <top-banner />
    <middle-banner :bannerImg="bannerImg" />
    <div class="content">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="全部"
          name="first"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 20"
            :key="index"
          />
        </el-tab-pane>
        <el-tab-pane
          label="国企/研究所"
          name="second"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 4"
            :key="index"
          />
        </el-tab-pane>
        <el-tab-pane
          label="外企"
          name="third"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 8"
            :key="index"
          />
        </el-tab-pane>
        <el-tab-pane
          label="银行/证券"
          name="fourth"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 7"
            :key="index"
          />
        </el-tab-pane>
        <el-tab-pane
          label="游戏"
          name="fivth"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 9"
            :key="index"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TopBanner from './TopBanner'
import MiddleBanner from './MiddleBanner'
import ScheduleCard from './ScheduleCard'

export default {
  name: 'RecruitSchedule',
  components: {
    TopBanner,
    MiddleBanner,
    ScheduleCard
  },
  data () {
    return {
      activeName: 'first',
      bannerImg:
        'https://static.nowcoder.com/images-nk/img/campusRecruitment/tip-bg.png'
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
    width: 1170px;
    padding: 25px 20px;
    margin: 0px auto;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    background: #fff;
  }

  .pane {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 1165px;
    margin: 0 auto;
  }
}
</style>
