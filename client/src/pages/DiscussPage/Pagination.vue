<template>
  <div class="wrap">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageNum"
      @current-change="changePagination"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['currentPage', 'pageNum', 'total', 'changePagination'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  margin: 20px auto 0;
  text-align: center;
}
</style>
