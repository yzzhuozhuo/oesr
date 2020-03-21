<template>
  <div
    class="hot"
    @click="jump(hotCommentData)"
  >
    <div class="top">{{hotCommentData.title}}</div>
    <div class="bottom">
      <div class="time">发表于 {{hotCommentData.createAt}}</div>
      <div class="reword">精</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hotCommentData'],
  data () {
    return {}
  },
  mounted () {},
  methods: {
    jump (hotCommentData) {
      this.$router.push({
        path: 'discussDetail',
        query: {
          id: hotCommentData._id
        }
      })
    }
  }
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

    .reword {
      color: #f1777d;
    }
  }
}
</style>
