<template>
  <div class="wrap">
    <card-title titleName="求职攻略" />
    <div class="mianjing">
      <StrategyCard v-for="(item, index) in 4" :key="index" />
    </div>
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'
import StrategyCard from './StrategyCard'

export default {
  components: {
    CardTitle,
    StrategyCard
  },
  props: ['plans'],
  data () {
    return {}
  },
  mounted () {}
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

  .mianjing {
    width: 952px;
    margin: 0 auto;
  }
}
</style>
