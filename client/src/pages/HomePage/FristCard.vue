<template>
  <div class="wrap">
    <div class="title-name">职业能力评测</div>
    <div class="test-card">
      <profession-card
        v-for="(item, index) in professionData"
        :key="index"
        :professionData="item"
      />
    </div>
    <div class="title-name">名企真题</div>
    <logo-list />
    <around-card :practiceCardData="practiceCardData" />
  </div>
</template>

<script>
import ProfessionCard from '@/components/ProfessionCard'
import LogoList from '@/components/LogoList'
import AroundCard from './AroundCard'

export default {
  components: {
    ProfessionCard,
    LogoList,
    AroundCard
  },
  props: ['practiceCardData', 'professionData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.title-name {
  margin-top: 20px;
  color: #333333;
}

.test-card {
  width: 960px;
  margin-top: 15px;
}
</style>
