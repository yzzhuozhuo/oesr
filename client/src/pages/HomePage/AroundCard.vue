<template>
  <div class="around">
    <div
      class="list"
      v-for="(aroundCard, index) in aroundCardData"
      :key="index"
    >
      <div class="left">{{aroundCard.listName}}</div>
      <div class="right">
        <practice-card
          v-for="(item, index) in aroundCard.listCard"
          :key="index"
          :practiceCardData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PracticeCard from '@/components/PracticeCard'

export default {
  components: {
    PracticeCard
  },
  props: ['aroundCardData'],
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
    width: 800px;
  }
}
</style>
