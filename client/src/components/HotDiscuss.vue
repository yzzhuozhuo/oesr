<template>
  <div class="hot">
    <div class="top">腾讯后台一面面经</div>
    <div class="bottom">
      <div class="time">发表于 2020-03-07 15:25:41</div>
      <div class="reword">回复（10）</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hotCommentData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.hot {
  width: 260px;
  margin: 0 auto 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  .top {
    color: #333333;

    &:hover {
      color: #4dbfae;
    }
  }

  .bottom {
    color: #999;
    font-size: 12px;
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
  }
}
</style>
