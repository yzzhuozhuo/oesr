<template>
  <div class="tb">
    <div
      class="wrap"
      v-for="(tbCard, index) in tbCardData"
      :key="index"
    >
      <div class="left">{{tbCard.listName}}</div>
      <div class="bottom">
        <firm-card
          v-for="(item, index) in tbCard.listCard"
          :key="index"
          :firmCardData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FirmCard from '@/components/FirmCard'

export default {
  components: {
    FirmCard
  },
  props: ['tbCardData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.left {
  margin-top: 20px;
  width: 130px;
}

.bottom {
  width: 950px;
  margin-top: 15px;
}
</style>
