<template>
  <div class="wrap">
    <div class="left">求职互助</div>
    <div class="bottom">
      <firm-card
        v-for="(item, index) in firmCardData"
        :key="index"
        :firmCardData="item"
      />
    </div>
  </div>
</template>

<script>
import FirmCard from '@/components/FirmCard'

export default {
  components: {
    FirmCard
  },
  props: ['tbCardData', 'firmCardData'],
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
