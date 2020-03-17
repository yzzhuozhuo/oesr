<template>
  <div class="contant-card-box">
    <div v-for="(item, index) in questionCardData" :key="index" class="no-margin">
      <el-card class="box-card" v-if="questionCardData">
        <div class="box-card-main">
          <span>{{ item.themeTitle }}</span>
          <div class="image">
            <img :src="item.themeImageUrl">
          </div>
          <div class="hot">发布时间: {{ item.createdAt }}</div>
          <div class="job">匹配职位: {{ item.post }}</div>
          <el-button type="primary" size="mini" @click="toQuestionList(item._id)">查看详情</el-button>
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
    toQuestionList (id) {
      this.$router.push({
        path: 'questionList',
        query: {
          themeDetailId: id
        }
      })
    }
  }
}
</script>

<style scoped>
.box-card-main {
  font-size: 14px;
  padding: 5px 0;
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
  width: 216px;
  /* margin-right: 15px; */
  margin-bottom: 10px;
  /* margin-right: 19px; */
  margin: 0 7px;
  /* text-align: center; */
  cursor: pointer;
}
.box-card:hover {
  background: #eeeeee;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); */
  /* transform: scale(1.1); */
  /* border: 2px solid #eee; */
  /* background-position: -1430px -650px; */
}
.contant-card-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  /* padding-left: 5px; */
  width: 1160px;
  /* padding-left: 10px; */
  /* justify-content: space-between; */
}

.hot {
  font-size: 14px;
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
/* .image {
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
}
.image img {
  width: 100%;
  border-radius: 50%;
} */
</style>
