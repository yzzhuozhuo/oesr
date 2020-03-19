<template>
  <div class="main">
    <div class="title" @click="toMainPage">
      <i class="el-icon-arrow-left"></i>
      <span>返回首页</span>
    </div>
    <div class="main-content">
      <div class="score-content">
        <div class="theme">
          <div class="one">{{scoreDetailData.themeTitle}}</div>
          <div class="two">(总分：100分，限时100分钟)</div>
          <div class="three">考生：{{scoreDetailData.studentName}}</div>
        </div>
        <div class="score">
          <div class="score-title">
            <span>本次答题成绩</span>
            <el-button type="text" class="btn" @click="toCheckResult">查看答案解析</el-button>
          </div>
          <div class="score-item">
            <div class="score-result">
              <div class="total">
                <div class="one">{{scoreDetailData.totalScore}}</div>
                <div class="two">分数</div>
              </div>
            </div>
            <div class="score-time">
              <div class="start">
                <span class="time">开始时间</span>
                <span>{{scoreDetailData.startTime}}</span>
              </div>
              <div class="end">
                <span class="time">结束时间</span>
                <span>{{scoreDetailData.endTime}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnswerResult',
  data () {
    return {
      scoreDetailData: {}
    }
  },
  created () {
    this.scoreDetailData = this.$route.query.data
  },
  mounted () {
  },
  methods: {
    toMainPage () {
      this.$router.replace({
        path: '/'
      })
    },
    toCheckResult () {
      this.$router.replace({
        path: 'answerList',
        query: {
          themeDetailId: this.scoreDetailData.themeId,
          isCheck: true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // align-items: center;
  .title {
    color: #888;
    padding: 10px 0 0 300px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .main-content {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .score-content {
      width: 1000px;
      // background: #ffff;
      // height: 500px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      .theme {
        padding: 20px;
        text-align: center;
        .one {
          font-size: 20px;
        }
        .two {
          font-size: 14px;
          color: #999;
          margin: 5px 0;
        }
        .three {
          font-size: 14px;
          color: #999;
        }
      }
      .score {
        border: 1px solid #eee;
        border-radius: 5px;
        width: 75%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        .score-title {
          width: 96%;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
        }
        .score-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 60px 0;
          .score-result {
            width: 100px;
            height: 100px;
            border: 6px solid #36aafd!important;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
            .total {
              text-align: center;
              .one {
                font-size: 20px;
                font-weight: bold;
              }
            }
          }
          .score-time {
            .start {
              background: #fcf8e3;
              padding: 4px 80px;
              font-size: 15px;
              margin-bottom: 16px;
            }
            .end {
              background: #e9f5e9;
              padding: 4px 80px;
              font-size: 15px;
              margin-bottom: 10px;
            }
            .tiem {
              padding-right: 120px;
            }
          }
        }
      }
    }
  }
}

</style>
