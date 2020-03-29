<template>
  <div class="wrap">
    <card-title titleName="时间表" />
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in plans"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
    <div
      class="neitui"
      @click="toDiscuss"
    >寻找内部员工内推</div>
    <div
      class="neitui toudi"
      @click="toCampus"
    >官网投递</div>
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'

export default {
  components: {
    CardTitle
  },
  props: ['plans', 'campusUrl', 'companyName'],
  data () {
    return {}
  },
  mounted () {},
  methods: {
    toCampus () {
      window.open(this.campusUrl)
    },
    toDiscuss () {
      this.$router.push({
        path: '/discussPage',
        query: {
          label: 6,
          company: this.companyName
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin-bottom: 10px;
  background: #fff;
  box-sizing: border-box;
  padding: 10px 0;
  position: relative;

  .block {
    margin-top: 40px;
  }

  .neitui {
    position: absolute;
    right: 20px;
    top: 60px;
    width: 125px;
    padding: 9px 0;
    border-radius: 35px;
    font-size: 14px;
    margin-top: 6px;
    margin-left: 10px;
    text-align: center;
    color: #fff;
    background-color: #25bb9b;
    cursor: pointer;

    &:hover {
      background-color: #22ae90;
    }
  }

  .toudi {
    top: 105px;
  }
}
</style>
