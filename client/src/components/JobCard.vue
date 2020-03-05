<template>
  <div class="job-card">
    <img
      class="job-img"
      src="https://uploadfiles.nowcoder.com/images/20200302/339694163_1583161657092_19A58D529E0790FFEF450BDB70348390"
      alt=""
    >
    <div class="job-name">携程旅行2020校园招聘</div>
  </div>
</template>

<script>
export default {
  props: ['jobCardData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style scoped>
.job-card {
  width: 215px;
  height: 200px;
  display: inline-block;
  font-size: 14px;
  margin: 0 8px 15px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  cursor: pointer;
  border-radius: 2px;
}

.job-card:hover {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  color: #25bb9b;
}

.job-img {
  width: 215px;
  height: 145px;
}

.job-name {
  height: 55px;
  line-height: 55px;
  text-align: center;
}
</style>
