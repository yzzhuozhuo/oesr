<template>
  <div
    class="middle-banner"
    :style="{
      backgroundImage: `url(${bannerImg})`
    }"
  >
    <div class="left">
      <div class="top">关注【校招日程汇总】公众号，随时获取校招最新动态，有任何校招问题欢迎加群讨论：272820159</div>
      <div class="bottom">想用一份简历快速网申所有站外互联网公司吗？<span>牛客简历助手</span>了解一下！</div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  props: ['bannerImg'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.middle-banner {
  width: 1210px;
  height: 80px;
  margin: 12px auto 10px;
  padding: 0 30px 0 15px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .left {
    color: #fff;

    .top {
      margin-bottom: 5px;
      font-size: 14px;
    }

    .bottom {
      font-size: 20px;

      span {
        color: #ffd323;
      }
    }
  }

  .right {
    width: 70px;
    height: 70px;
    background-image: url(https://static.nowcoder.com/images/wx-rcode.jpg);
    background-size: cover;
  }
}
</style>
