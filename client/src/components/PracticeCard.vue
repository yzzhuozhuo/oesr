<template>
  <div class="practice">
    <div class="name">{{cardData.name}}</div>
    <div class="type">{{cardData.intr}}</div>
  </div>
</template>

<script>
export default {
  props: ['cardData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.practice {
  width: 160px;
  height: 120px;
  cursor: pointer;
  padding: 20px;
  box-sizing: border-box;
  display: inline-block;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    color: #25bb9b;
  }

  .type {
    color: #acacac;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 40px;
    font-size: 14px;
    margin-top: 14px;
  }
}
</style>
