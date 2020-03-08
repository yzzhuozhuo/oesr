<template>
  <div class="job-card" @click="toCompanyPage(jobCardData.href)">
    <img
      class="job-img"
      :src="jobCardData.src"
      alt="">
    <div class="job-name">{{jobCardData.title}}</div>
  </div>
</template>

<script>
export default {
  props: ['jobCardData'],
  data () {
    return {}
  },
  mounted () {},
  methods: {
    toCompanyPage (href) {
      // window.location.href = href
      window.open(href)
    }
  }
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
  color: #162522;
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
