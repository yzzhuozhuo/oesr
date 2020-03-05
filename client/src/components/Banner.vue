<template>
  <img
    class="banner"
    :src="bannerImg"
    :style="{
      height: `${height || 80}px`
    }"
  />
</template>

<script>
export default {
  props: ['bannerImg', 'height']
}
</script>

<style scoped>
.banner {
  width: 100%;
  cursor: pointer;
}
</style>
