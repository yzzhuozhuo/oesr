<template>
  <div class="mark">{{markData}}</div>
</template>

<script>
export default {
  props: ['markData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.mark {
  border-radius: 11px;
  border: 1px solid #ddd;
  display: inline-block;
  padding: 3px 11px;
  color: #333;
  font-size: 12px;
  margin-right: 8px;
  background: #fff;
  margin-bottom: 5px;
  line-height: 16px;

  &:hover {
    border-color: #1abc9c;
    color: #25bb9b;
  }
}
</style>
