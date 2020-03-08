<template>
  <div class="right-wrap">
    <div class="title">面试备战</div>
    <div class="question-wrap">
      <div class="list">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rightCardData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.right-wrap {
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;

  .title {
    color: #4dbfae;
    font-size: 18px;
    margin-top: 20px;
  }

  .question-wrap {
    color: #333333;
    margin-top: 10px;

    .list {
      display: flex;
    }
  }
}
</style>
