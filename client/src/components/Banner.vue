<template>
  <img
    class="banner"
    :src="bannerImg.img"
    :style="{
      height: `${height || 80}px`
    }"
    @click.stop="jump(bannerImg.url)"
  />
</template>

<script>
export default {
  props: ['bannerImg', 'height'],
  methods: {
    jump (url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  cursor: pointer;
}
</style>
