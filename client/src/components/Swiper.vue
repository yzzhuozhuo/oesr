<template>
<!--  -->
  <div
    class="banner-wrap"
    :style="{
      height: `${height || 300}px` // 轮播图高度
    }"
  >
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in swiperImgs"
          :key="index"
          class="swiper-slide"
          :style="{
            backgroundImage: `url(${item.img})`
          }"
          @click.stop="jump(item.url)"
        />
      </div>
      <div
        class="swiper-pagination swiper-pagination-white"
        id="swiper-spit"
      ></div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'

export default {
  props: ['swiperImgs', 'height'],
  mounted () {
    // 轮播图 · 初始化设定
    // eslint-disable-next-line
    const swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 取消鼠标操作后的轮播暂停
        stopOnLastSlide: false // 在最后一页停止
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  },
  methods: {
    jump (url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
.banner-wrap {
  margin-top: 61px;
  width: 100%;
  cursor: pointer;
}
.swiper-container {
  min-width: 1200px;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
