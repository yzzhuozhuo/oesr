<template>
  <div class="list">
    <div class="left">专项练习</div>
    <div class="right">
      <practice-card
        v-for="(item, index) in practiceCardData"
        :key="index"
        :cardData="item"
      />
    </div>
  </div>
</template>

<script>
import PracticeCard from '@/components/PracticeCard'

export default {
  components: {
    PracticeCard
  },
  props: ['aroundCardData', 'practiceCardData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  color: #333333;
  margin-top: 10px;

  .left {
    margin-top: 20px;
    width: 130px;
  }

  .right {
    width: 780px;
  }
}
</style>
