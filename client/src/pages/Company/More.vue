<template>
  <div class="more">查看全部</div>
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
.more {
  display: block;
  background: #eee;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  color: #666;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #42c1a2;
    color: #fff;
  }
}
</style>
