<template>
  <div class="header">
    <img
      class="img"
      src="https://uploadfiles.nowcoder.com/files/20191129/4107856_1575019666538_60x60-2.png"
    >
    <div class="company">
      <div class="name">字节跳动 2020校招</div>
      <div
        class="home"
        @click.stop="jumpToCompany('company')"
      >
        <img :src="home">
        <span>公司主页</span>
      </div>
      <div class="follow">+ 关注</div>
    </div>
  </div>
</template>

<script>
import home from '@/assets/home.png'

export default {
  props: ['postCardData'],
  data () {
    return {
      home
    }
  },
  methods: {
    jumpToCompany (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 25px;
  margin: 13px 0 10px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: #fff;

  .img {
    width: 60px;
    height: 60px;
    margin-right: 30px;
    cursor: pointer;
  }

  .company {
    display: flex;
    align-items: center;

    .name {
      font-weight: 700;
      font-size: 22px;
      margin-right: 20px;
    }

    .home {
      color: #333333;
      padding: 0 10px;
      border-right: 1px solid #4e4e4e;
      font-size: 14px;
      line-height: 13px;
      display: flex;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        color: #25bb9b;
      }

      img {
        width: 14px;
        height: 14px;
        margin-right: 3px;
      }
    }
  }

  .follow {
    color: #25bb9b;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
