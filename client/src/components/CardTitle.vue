<template>
  <div class="title">
    <div class="red"></div>
    <div class="name">{{titleName}}</div>
  </div>
</template>

<script>
export default {
  props: ['titleName'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style scoped>
.title {
  padding: 0 25px;
  text-align: left;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.red {
  width: 8px;
  height: 8px;
  background-color: red;
  margin-right: 5px;
}
.name {
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
}
</style>
