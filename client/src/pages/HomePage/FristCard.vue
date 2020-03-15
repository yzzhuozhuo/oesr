<template>
  <div class="wrap">
    <div class="title-name">{{professionData.listName}}</div>
    <div class="test-card">
      <profession-card
        v-for="(item, index) in professionData.listCard"
        :key="index"
        :professionCardData="item"
      />
    </div>
    <div class="title-name">{{famousQuestion.listName}}</div>
    <logo-list />
    <around-card :aroundCardData="aroundCardData" />
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
  props: ['firstCardData'],
  data () {
    return {}
  },
  computed: {
    professionData () {
      return this.firstCardData[0]
    },
    famousQuestion () {
      return this.firstCardData[1]
    },
    aroundCardData () {
      return this.firstCardData.slice(2)
    }
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
