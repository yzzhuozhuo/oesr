<template>
  <div
    class="practice"
    @click.stop="jump(practiceCardData.url)"
  >
    <div class="name">{{practiceCardData.name}}</div>
    <div class="type">{{practiceCardData.intro}}</div>
  </div>
</template>

<script>
export default {
  props: ['practiceCardData'],
  data () {
    return {}
  },
  methods: {
    jump (url) {
      window.location.href = url
    }
  }
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
  vertical-align: middle;

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
