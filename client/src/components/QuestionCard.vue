<template>
  <div class="contant-card-box">
    <div v-for="(item, index) in questionCardData" :key="index" class="no-margin">
      <el-card class="box-card" v-if="questionCardData">
        <div class="box-card-main">
          <span>{{ item.title }}</span>
          <img :src="item.url">
          <div class="hot">热度指数: {{ item.hot }}</div>
          <div class="job">匹配职位: {{ item.job }}</div>
          <el-button type="primary" size="mini">查看详情</el-button>
        </div>
      </el-card>
      <div class="rate-content">
        <span>难度系数</span>
        <el-rate
          v-model="item.rate"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
    </div>
    <div class="no-card-data" v-if="questionCardData.length === 0 || !questionCardData">
      <img src="../assets/question.png">
      <div>当前职位类别无你要的试卷</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questionCardData'],
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.box-card-main {
  font-size: 14px;
  padding: 10px 0;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.box-card-main img {
  padding: 10px 0;
  width: 80px;
  height: 80px;
}
.box-card {
  width: 220px;
  /* margin-right: 15px; */
  margin-bottom: 10px;
}
.contant-card-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between; */
}
.contant-card-box div {
  margin-right: 5px;
}
.no-margin:nth-child(5n) {
  margin-right: 0;
  /* background: red; */
}
.hot {
  font-size: 16px;
  padding: 5px 0 10px 0;
}
.job {
  padding-bottom: 15px;
}
.rate-content {
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0 10px 0;
}
.no-card-data {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.no-card-data img {
  width: 50px;
  height: 50px;
  padding-bottom: 20px
}
</style> /* eslint-disable */
