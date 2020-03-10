<template>
  <div class="text">
    <div
      class="text-content"
      v-html="content"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.text {
  width: 645px;
  padding: 20px;
  background-color: #fff;

  &-content >>> img,
  p,
  span {
    width: 100% !important;
  }
}
</style>
