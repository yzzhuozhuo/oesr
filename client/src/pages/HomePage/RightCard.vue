<template>
  <div class="right-wrap">
    <div class="title">{{title}}</div>
    <div class="question-wrap">
      <div class="list">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rightCardData', 'title'],
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

  &:last-child {
    border: 0;
  }

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
