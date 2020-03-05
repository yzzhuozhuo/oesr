<template>
  <div class="main">
    <div class="header-title">首页 > 题库 > 奇安信2019校招笔试题</div>
    <div class="main-content">
      <div class="content-card" v-for="(item, index) in questionData" :key="index">
        <img src="../../assets/question-head.png" class="head-image">
        <img :src="item.companyUrl" class="company-logo">
        <div class="content-card-body">
          <div class="title">{{item.companyName}}{{item.time}}校招笔试题</div>
          <div class="post">匹配职位：{{item.post}}</div>
          <el-table
            class="table"
            :data="tableData"
            border
            stripe
            style="width: 60%">
            <el-table-column
              align="center"
              prop="type"
              label="题型">
            </el-table-column>
            <el-table-column
              align="center"
              prop="select"
              label="单选">
            </el-table-column>
            <el-table-column
              align="center"
              prop="fill"
              label="填空">
            </el-table-column>
            <el-table-column
              align="center"
              prop="judge"
              label="判断">
            </el-table-column>
          </el-table>
          <el-button type="primary" class="btn" @click="toAnswerList">开始答题</el-button>
          <el-divider content-position="center" class="explain">答题说明</el-divider>
          <div class="explain-content">
            <div>1、本套题满分100分，请认真作答。</div>
            <div class="explain-content-two">2、系统将会根据您所选/所选答案进行正确的判断，并计算您的得分情况。</div>
            <div>3、答题时间为100分钟，请合理把控答题时间。</div>
            <div class="explain-content-four">4、点击"开始答题"按钮，即表示你同意 <span style="color: #25bb9b">《用户隐私政策》</span>，系统会视你和企业适配程度，向企业主动推荐你。</div>
          </div>
        </div>
      </div>
      <div class="message">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <i class="el-icon-s-custom"></i>
            <span>排行榜</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="fetchUserLists">
              <i class="el-icon-refresh-left"></i>
            </el-button>
          </div>
          <div v-for="(item, index) in userData" :key="index" class="box-card-item">
            <div class="rank-index">{{index + 1}}</div>
            <div>
              <img :src="item.userImageUrl" class="userImage">
            </div>
            <div>
              <div class="user-name">{{item.userName}}</div>
              <div class="user-score">{{item.userScore}} 分</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QuestionList',
  data () {
    return {
      questionData: [
        {
          category: 'software',
          companyName: '奇安信',
          companyUrl: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png',
          post: 'Java工程师',
          time: '2020',
          tagType: 'danger',
          totalScore: 100,
          questionLists: {
            select: [{}],
            fill: [{}],
            judge: [{}]
          }
        }
      ],
      tableData: [{
        type: '数量',
        select: '30',
        fill: '10',
        judge: '20'
      }],
      userData: [
        {
          userName: 'yangzhuo',
          userImageUrl: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_100,w_100',
          userScore: 100
        },
        {
          userName: 'yangzhuo',
          userImageUrl: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_100,w_100',
          userScore: 100
        },
        {
          userName: 'yangzhuo',
          userImageUrl: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_100,w_100',
          userScore: 100
        },
        {
          userName: 'yangzhuo',
          userImageUrl: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_100,w_100',
          userScore: 100
        },
        {
          userName: 'yangzhuo',
          userImageUrl: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_100,w_100',
          userScore: 100
        },
        {
          userName: 'yangzhuo',
          userImageUrl: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_100,w_100',
          userScore: 100
        }
      ]
    }
  },
  methods: {
    fetchUserLists () {
      console.log('请求用户数据')
    },
    toAnswerList () {
      this.$router.push({
        path: 'answerList'
      })
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 61px;
  padding: 10px 249px;
}
.main-content {
  display: flex;
}
.header-title {
  margin-bottom: 5px;
  font-size: 15px;
}
.content-card {
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.head-image {
  width: 100%;
  height: 120px;
}
.company-logo {
  /* width: 690px; */
  width: 80px;
  height: 80px;
  position: absolute;
  top: 170px;
}
.content-card-body {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  font-size: 20px;
  margin: 80px 0 30px 0;
}
.post {
  font-size: 15px;
  margin-bottom: 30px;
}
.btn {
 margin: 30px 0 10px 0;
}
.message {
  width: 300px;
  height: 200px;
  background: #fff;
  margin-left: 10px;
}
.explain {
  width: 80%;
}
.explain-content {
  background: #f3f3f3;
  font-size: 12px;
  width: 76%;
  padding: 20px;
  margin-bottom: 20px;
  color: #888;
  line-height: 20px;
}
.explain-content-two {
  margin: 5px 0;
}
.explain-content-four {
  margin-top: 5px;
}
.box-card-item {
  font-size: 14px;
  margin-bottom: 18px;
  border-bottom:1px dashed #eee;
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}
.box-card-item:last-child {
  border: none;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 100%;
}
.el-icon-s-custom {
  color: cornflowerblue;
}
.userImage {
  width: 50px;
  height: 50px;
  margin: 0 15px;
  border-radius: 50%;
}
.user-name {
  margin-bottom: 10px;
  color: #10b4d2;
}
.user-score {
  color: #999;
}
.rank-index {
  width: 15px;
  height: 15px;
  text-align: center;
  color: #fff;
  background: #ff6745;
}
</style>
