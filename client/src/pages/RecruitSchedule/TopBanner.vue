<template>
  <div class="top-banner">
    <div class="word">2020 IT名企校招日程</div>
    <div class="word-bottom">一站关注所有公司招聘动态 | 一站获得所有名企内推机会 | 最全笔试面试题库及面经攻略</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.schedule {
  min-width: 1200px;
  margin: 60px auto;

  .top-banner {
    height: 400px;
    background-image: url(https://static.nowcoder.com/images-nk/img/campusRecruitment/banner3.jpg);
    background-repeat: no-repeat;
    background-position: 0 -110px;
    background-size: cover;
    padding-top: 80px;
    box-sizing: border-box;

    .word {
      width: 1050px;
      height: 131px;
      line-height: 131px;
      background-image: url(https://static.nowcoder.com/images-nk/img/campusRecruitment/title-bg2.png);
      background-repeat: no-repeat;
      background-size: cover;
      margin: 20px auto;
      font-size: 74px;
      color: #fff;
      text-align: center;

      &-bottom {
        width: 100%;
        color: #fff;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
}
</style>
