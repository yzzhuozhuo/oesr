<!--考生答题界面-->
<template>
  <div id="answer">
    <!--顶部信息栏-->
     <div class="top">
       <div class="item">
         <div><i class="el-icon-s-fold" ref="toggle" @click="slider_flag = !slider_flag"></i></div>
         <div>{{this.themeDetailList.themeTitle}}</div>
       </div>
     </div>
     <div class="flexarea">
        <!--左边题目编号区-->
        <transition name="slider-fade">
          <div class="left" v-if="slider_flag">
            <ul class="l-top">
              <li>
                <a href="javascript:;"></a>
                <span>当前</span>
              </li>
              <li>
                <a href="javascript:;"></a>
                <span>未答</span>
              </li>
              <li>
                <a href="javascript:;"></a>
                <span>已答</span>
              </li>
              <li>
                <a href="javascript:;"></a>
                <span>标记</span>
              </li>
            </ul>
            <div class="l-bottom">
              <div class="item">
                <p>一、选择题部分 (共{{topicCount[0]}}题)</p>
                <ul>
                  <li v-for="(list, index1) in topic['chooseLists']" :key="index1">
                    <a href="javascript:;"
                      @click="change(index1)"
                      :class="{'border': index === index1 && currentType === 1,'bg': bg_flag && topic['chooseLists'][index1].isClick === true}">
                      <span :class="{'mark': topic['chooseLists'][index1].isMark === true}"></span>
                      {{index1+1}}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item">
                <p>二、填空题部分 (共{{topicCount[1]}}题)</p>
                <ul>
                  <li v-for="(list, index2) in topic['fillLists']" :key="index2">
                    <a href="javascript:;" @click="fill(index2)" :class="{'border': index === index2 && currentType === 2,'bg': fillAnswer[index2][3] === true}"><span :class="{'mark': topic['fillLists'][index2].isMark === true}"></span>{{topicCount[0]+index2+1}}</a>
                  </li>
                </ul>
              </div>
              <div class="item">
                <p>三、判断题部分 (共{{topicCount[2]}}题)</p>
                <ul>
                  <li v-for="(list, index3) in topic['judgeLists']" :key="index3">
                    <a href="javascript:;" @click="judge(index3)" :class="{'border': index === index3 && currentType === 3,'bg': bg_flag && topic['judgeLists'][index3].isClick === true}"><span :class="{'mark': topic['judgeLists'][index3].isMark === true}"></span>{{topicCount[0]+topicCount[1]+index3+1}}</a>
                  </li>
                </ul>
              </div>
              <div class="final" @click="commit" v-if="!isCheck">结束考试</div>
              <div class="final" @click="cancelCheck" v-if="isCheck">结束查看</div>
            </div>
          </div>
        </transition>
        <!--右边选择答题区-->
        <transition name="slider-fade">
        <div class="right">
          <div class="title">
            <div v-if="!isCheck">{{title}}</div>
            <div v-else>请查看正确答案和解析</div>
            <div v-if="!isCheck">
              <i class="el-icon-document"></i>
              <span>全卷共 {{topicCount[0] + topicCount[1] + topicCount[2]}} 题</span>
              <i class="el-icon-time"></i>
              <span>倒计时：<b>{{time}}</b>分钟</span>
            </div>
            <div v-else>
              <el-button type="text" @click="cancelCheck">返回题库首页</el-button>
            </div>
          </div>
          <div class="content">
            <div class="topic">
              <div class="number">{{number}}</div>
              <div>{{showQuestion}}</div>
            </div>
            <div v-if="currentType === 1">
              <el-radio-group v-model="radio[index]" @change="getChangeLabel" class="radio-group">
                <el-radio :label="1">{{showAnswer.answerA}}</el-radio>
                <el-radio :label="2">{{showAnswer.answerB}}</el-radio>
                <el-radio :label="3">{{showAnswer.answerC}}</el-radio>
                <el-radio :label="4">{{showAnswer.answerD}}</el-radio>
              </el-radio-group>
              <div class="analysis" v-if="isCheck">
                <ul>
                  <li> <el-tag type="success" size="small">正确姿势：</el-tag><span class="right">{{reduceAnswer.rightAnswer}}</span></li>
                  <li><el-tag size="small">题目解析：</el-tag></li>
                  <li>{{reduceAnswer.analysis === null ? '暂无解析': reduceAnswer.analysis}}</li>
                </ul>
              </div>
            </div>
            <div class="fill" v-if="currentType === 2">
              <div v-for="(item, currentIndex) in part" :key="currentIndex" class="fill-input">
                <span>{{currentIndex + 1}}、</span>
                <el-input placeholder="请按顺序将答案填在此处"
                  v-model="fillAnswer[index][currentIndex]"
                  clearable
                  @blur="fillBG">
                </el-input>
              </div>
              <div class="analysis" v-if="isCheck">
                <ul>
                  <li> <el-tag type="success" size="small">正确姿势：</el-tag><span class="right">{{topic['fillLists'][index].answer}}</span></li>
                  <li><el-tag size="small">题目解析：</el-tag></li>
                  <li>{{topic['fillLists'][index].analysis === null ? '暂无解析': topic['fillLists'][index].analysis}}</li>
                </ul>
              </div>
            </div>
            <div class="judge" v-if="currentType === 3">
              <el-radio-group v-model="judgeAnswer[index]" @change="getJudgeLabel" v-if="currentType === 3">
                <el-radio :label="1">正确</el-radio>
                <el-radio :label="2">错误</el-radio>
              </el-radio-group>
              <div class="analysis" v-if="isCheck">
                <ul>
                  <li> <el-tag type="success" size="small">正确姿势：</el-tag><span class="right">{{topic['judgeLists'][index].answer}}</span></li>
                  <li><el-tag size="small">题目解析：</el-tag></li>
                  <li>{{topic['judgeLists'][index].analysis === null ? '暂无解析': topic['judgeLists'][index].analysis}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="operation">
            <div class="end">
              <div @click="previous()">
                <i class="el-icon-arrow-left"></i>
                <span>上一题</span>
              </div>
              <div @click="mark()">
                <span>标记</span>
              </div>
              <div @click="next()">
                <span>下一题</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        </transition>
     </div>
  </div>
</template>

<script>
// import topicData from '../../../debug/topic.json'
import { mapState, mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'AnswerList',
  data () {
    return {
      themeDetailData: {},
      startTime: null, // 考试开始时间
      endTime: null, // 考试结束时间
      time: null, // 考试持续时间
      reduceAnswer: [], // vue官方不支持3层以上数据嵌套,如嵌套则会数据渲染出现问题,此变量直接接收3层嵌套时的数据。
      answerScore: 0, // 答题总分数
      bg_flag: false, // 已答标识符,已答改变背景色
      isFillClick: false, // 选择题是否点击标识符
      slider_flag: true, // 左侧显示隐藏标识符
      flag: false, // 个人信息显示隐藏标识符
      currentType: 1, // 当前题型类型  1--选择题  2--填空题  3--判断题
      radio: [], // 保存考生所有选择题的选项
      title: '请选择正确的选项',
      index: 0, // 全局index
      topicCount: [], // 每种类型题目的总数
      score: [], // 每种类型分数的总数
      topic: {}, // 试卷信息,
      showQuestion: [], // 当前显示题目信息
      showAnswer: {}, // 当前题目对应的答案选项
      number: 1, // 题号
      part: null, // 填空题的空格数量
      fillAnswer: [[]], // 二维数组保存所有填空题答案
      judgeAnswer: [], // 保存所有判断题答案
      topic1Answer: [], // 学生选择题作答编号
      rightAnswer: '',
      isCheck: false,
      totalScore: ''
    }
  },
  computed: {
    ...mapState({
      themeDetailList: state => state.theme.themeDetailList
    })
  },
  watch: {
    themeDetailList () {
      this.themeDetailData = this.themeDetailList
    }
  },
  created () {
    this.isCheck = this.$route.query.isCheck
    console.log(this.isCheck)
    if (!this.isCheck) {
      this.time = 11 // 设置倒计时分钟数
      this.showTime()
      console.log('倒计时开始啦')
    }
    this.getExamData()
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'fetchThemeDetailList',
      'addScoreList'
    ]),
    formatTime (date) {
      const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
      date = moment(date).format(TIME_FORMAT)
      return date
    },
    handleMessage (type, message) {
      this.$message({
        type,
        message
      })
    },
    getExamData () { // 获取当前试卷所有信息
      this.fetchThemeDetailList({ themeDetailId: this.$route.query.themeDetailId }).then(() => {
        this.startTime = this.formatTime(Date.now())
        this.index = 0
        // this.time = 11 // 设置倒计时分钟数
        this.topic = {...this.themeDetailData.questionLists}
        let reduceAnswer = this.topic['chooseLists'][this.index]
        this.reduceAnswer = reduceAnswer
        let keys = Object.keys(this.topic) // 对象转数组
        keys.forEach(e => {
          let data = this.topic[e]
          this.topicCount.push(data.length)
          let currentScore = 0
          for (let i = 0; i < data.length; i++) { // 循环每种题型,计算出总分
            currentScore += data[i].score
          }
          this.score.push(currentScore) // 把每种题型总分存入score
        })
        let len = this.topicCount[1]
        let father = []
        for (let i = 0; i < len; i++) { // 根据填空题数量创建二维空数组存放每道题答案
          let children = [null, null, null, null]
          father.push(children)
        }
        this.fillAnswer = father
        let dataInit = this.topic['chooseLists']
        this.number = 1
        this.showQuestion = dataInit[0].question
        this.showAnswer = dataInit[0]
      })
    },
    change (index) { // 选择题
      this.index = index
      let reduceAnswer = this.topic['chooseLists'][this.index]
      this.reduceAnswer = reduceAnswer
      this.isFillClick = true
      this.currentType = 1
      let len = this.topic['chooseLists'].length
      if (this.index < len) {
        if (this.index <= 0) {
          this.index = 0
        }
        this.title = '请选择正确的选项'
        let Data = this.topic['chooseLists']
        // console.log(Data)
        this.showQuestion = Data[this.index].question // 获取题目信息
        this.showAnswer = Data[this.index]
        this.number = this.index + 1
      } else if (this.index >= len) {
        this.index = 0
        this.fill(this.index)
      }
    },
    fillBG () { // 填空题已答题目 如果已答该题目,设置第四个元素为true为标识符
      if (this.fillAnswer[this.index][0] != null) {
        this.fillAnswer[this.index][3] = true
      }
    },
    fill (index) { // 填空题
      let len = this.topic['fillLists'].length
      this.currentType = 2
      this.index = index
      if (index < len) {
        if (index < 0) {
          index = this.topic['chooseLists'].length - 1
          this.change(index)
        } else {
          this.title = '请在横线处填写答案'
          let Data = this.topic['fillLists']
          this.showQuestion = Data[index].question // 获取题目信息
          let part = this.showQuestion.split('()').length - 1 // 根据题目中括号的数量确定填空横线数量
          this.part = part
          this.number = this.topicCount[0] + index + 1
        }
      } else if (index >= len) {
        this.index = 0
        this.judge(this.index)
      }
    },
    judge (index) { // 判断题
      let len = this.topic['judgeLists'].length
      this.currentType = 3
      this.index = index
      if (this.index < len) {
        if (this.index < 0) {
          this.index = this.topic['fillLists'].length - 1
          this.fill(this.index)
        } else {
          this.title = '请作出正确判断'
          let Data = this.topic['judgeLists']
          this.showQuestion = Data[index].question // 获取题目信息
          this.number = this.topicCount[0] + this.topicCount[1] + index + 1
        }
      } else if (this.index >= len) {
        this.index = 0
        this.change(this.index)
      }
    },
    getChangeLabel (val) { // 获取选择题作答选项
      this.radio[this.index] = val // 当前选择的序号
      if (val) {
        let data = this.topic['chooseLists']
        this.bg_flag = true
        data[this.index]['isClick'] = true
      }
      /* 保存学生答题选项 */
      this.topic1Answer[this.index] = val
    },
    getJudgeLabel (val) { // 获取判断题作答选项
      this.judgeAnswer[this.index] = val
      if (val) {
        let data = this.topic['judgeLists']
        this.bg_flag = true
        data[this.index]['isClick'] = true
      }
    },
    previous () { // 上一题
      this.index--
      switch (this.currentType) {
        case 1:
          this.change(this.index)
          break
        case 2:
          this.fill(this.index)
          break
        case 3:
          this.judge(this.index)
          break
      }
    },
    next () { // 下一题
      this.index++
      switch (this.currentType) {
        case 1:
          this.change(this.index)
          break
        case 2:
          this.fill(this.index)
          break
        case 3:
          this.judge(this.index)
          break
      }
    },
    mark () { // 标记功能
      switch (this.currentType) {
        case 1:
          this.topic['chooseLists'][this.index]['isMark'] = true // 选择题标记
          this.handleMessage('success', `您标记了选择题第 ${this.index + 1} 道~`)
          break
        case 2:
          this.topic['fillLists'][this.index]['isMark'] = true // 填空题标记
          this.handleMessage('success', `您标记了填空题第 ${this.index + 1} 道~`)
          break
        case 3:
          this.topic['judgeLists'][this.index]['isMark'] = true // 判断题标记
          this.handleMessage('success', `您标记了判断题第 ${this.index + 1} 道~`)
      }
    },
    commit () { // 答案提交计算分数
      /* 计算选择题总分 */
      let topic1Answer = this.topic1Answer
      let finalScore = 0
      topic1Answer.forEach((element, index) => { // 循环每道选择题根据选项计算分数
        let right = null
        if (element != null) {
          switch (element) { // 选项1,2,3,4 转换为 'A','B','C','D'
            case 1:
              right = 'A'
              break
            case 2:
              right = 'B'
              break
            case 3:
              right = 'C'
              break
            case 4:
              right = 'D'
          }
          if (right === this.topic['chooseLists'][index].rightAnswer) { // 当前选项与正确答案对比
            finalScore += Number(this.topic['chooseLists'][index].score) // 计算总分数
          }
        }
      })
      /* 计算填空题总分 */
      let fillAnswer = this.fillAnswer
      fillAnswer.forEach((element, index) => { // 此处index和 this.index数据不一致，注意
        element.forEach((inner) => {
          if (this.topic['fillLists'][index].answer.includes(inner)) { // 判断填空答案是否与数据库一致
            console.log('正确')
            finalScore += Number(this.topic['fillLists'][this.index].score)
          }
        })
      })
      /** 计算判断题总分 */
      let topic3Answer = this.judgeAnswer
      topic3Answer.forEach((element, index) => {
        let right = null
        switch (element) {
          case 1:
            right = 'T'
            break
          case 2:
            right = 'F'
        }
        if (right === this.topic['judgeLists'][index].answer) { // 当前选项与正确答案对比
          finalScore += Number(this.topic['judgeLists'][index].score) // 计算总分数
        }
      })
      console.log(`6666------目前总分${finalScore}`)
      this.totalScore = finalScore
      if (this.time !== 0) {
        this.$confirm('考试结束时间未到,是否提前交卷', '友情提示', {
          confirmButtonText: '立即交卷',
          cancelButtonText: '再检查一下',
          type: 'warning'
        }).then(() => {
          console.log('交卷')
          this.endTime = this.formatTime(Date.now())
          // console.log(111, this.endTime, this.startTime, finalScore)
          // 请求接口，将最终的分数保存数据库中
          this.saveExamInfo()
        }).catch(() => {
          console.log('继续答题')
        })
      }
    },
    saveExamInfo () {
      let data = {
        themeId: this.themeDetailData._id,
        studentId: '123',
        studentName: '小卓子嘻嘻~',
        studentImageUrl: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_100,w_100',
        themeTitle: this.themeDetailData.themeTitle,
        totalScore: this.totalScore,
        startTime: this.startTime,
        endTime: this.endTime
      }
      this.addScoreList(data).then((data) => {
        this.$router.replace({
          path: 'answerResult',
          query: {
            data
          }
        })
      })
    },
    cancelCheck () {
      this.$router.replace({
        path: 'questionPage'
      })
    },
    showTime () { // 倒计时
      console.log('这是开始倒计时的函数')
      let _this = this
      const timer = setInterval(() => {
        _this.time -= 1
        if (_this.time === 10) {
          _this.$message({
            showClose: true,
            type: 'info',
            message: '考生注意,考试时间还剩10分钟！！！'
          })
        }
        if (_this.time === 0) {
          console.log('考试时间到，强制交卷！！！！')
          _this.saveExamInfo()
        }
      }, 1000 * 60)
      this.$once('hook:beforeDestroy', () => {
        window.clearInterval(timer)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.iconfont.icon-time {
  color: #2776df;
  margin: 0px 6px 0px 20px;
}
.analysis {
  margin-top: 20px;
  .right {
    color: #2776df;
    font-size: 18px;
    border: 1px solid #2776df;
    padding: 0px 6px;
    border-radius: 4px;
    margin-left: 20px;
  }
  ul li:nth-child(2) {
    margin: 20px 0px;
  }
  ul li:nth-child(3) {
    padding: 10px;
    background-color: #eeeeee;
    border-radius: 4px;
  }
}

.analysis ul {
  list-style: none;
}

.analysis ul li /deep/ .el-tag--light {
  font-size: 14px;
}

.analysis span:nth-child(1) {
  font-size: 18px;
}
.mark {
  position: absolute;
  width: 6px;
  height: 6px;
  content: "";
  background-color: red;
  border-radius: 50%;
  top: 0px;
  left: 22px;
}
.border {
  position: relative;
  border: 1px solid #FF90AA !important;
}
.bg {
  background-color: #5188b8 !important;
}

.fill .fill-input {
  margin-bottom: 10px;
}
.fill span {
  color: #999;
  font-size: 14px;
  margin-left: 5px;
}
.fill .el-input {
  display: inline-flex;
  width: 300px;
  // margin-left: 20px;
  .el-input__inner {
    border: 1px solid transparent;
    border-bottom: 1px solid #eee;
    padding-left: 20px;
  }
}
/* slider过渡效果 */
.slider-fade-enter-active {
  transition: all .3s ease;
}
.slider-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slider-fade-enter, .slider-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.operation .end div:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(39, 118, 223);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #fff;
}
.operation .end div {
  cursor: pointer;
  margin: 0 100px;
}
.operation {
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 0px;
  margin-right: 10px;
}
.operation .end {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(39, 118, 223);
}

.content {
  .topic {
    display: flex;
    // align-items: center;
    .number {
      height: 20px;
      background: #e5e5e5;
      float: left;
      padding: 4px 8px 2px;
      margin-right: 5px;
      border-radius: 5px;
      font-size: 16px;
    }
  }
}

.content {
  padding: 0px 20px;
}
.content .topic {
  padding: 20px 0px;
  padding-top: 30px;
}
.right .content {
  background-color: #fff;
  margin: 10px;
  margin-left: 0px;
  height: 440px;
}
.content .el-radio-group label {
  color: #888;
  margin: 10px 0px;
}
.content .el-radio-group {
  display: flex;
  flex-direction:column;
  margin-left: 10px;
}
.el-radio /deep/ span {
  font-size: 15px;
}
.right .title p {
  margin-left: 20px;
}
.flexarea {
  display: flex;
}
.flexarea .right {
  flex: 1;
}
.auto-right {
  margin-left: auto;
  color: #2776df;
  margin-right: 10px;
}
.right .title {
  padding: 15px;
  margin-right: 10px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-top: 10px;
  background-color: #fff;
  // height: 50px;
  // line-height: 50px;
  .el-icon-time {
    padding-left: 10px;
  }
}
.clearfix {
  clear: both;
}
.l-bottom .final {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  background-color: rgb(39, 118, 223);
  width: 240px;
  margin: 20px 0px 20px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  margin-top: 22px;
}
#answer .left .item {
  padding: 0px;
  font-size: 16px;
}
.l-bottom {
  border-radius: 4px;
  background-color: #fff;
}
.l-bottom .item p {
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 15px;
  color: #000;
  margin-left: 10px;
  letter-spacing: 2px;
}
.l-bottom .item li {
  width: 15%;
  margin-left: 5px;
  margin-bottom: 10px;
  list-style: none;
}
.l-bottom .item {
  display: flex;
  flex-direction: column;
}
.l-bottom .item ul {
  width: 100%;
  margin-bottom: -8px;
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  margin-left: -20px;
}
.l-bottom .item ul li a {
  position: relative;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #eee;
  text-align: center;
  color: #000;
  font-size: 15px;
  text-decoration: none;
}
.left .l-top {
  display: flex;
  justify-content: space-around;
  padding: 16px 0px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fff;
}
.left {
  width: 260px;
  height: 100%;
  margin: -17px 10px 0px 10px;
}
.left .l-top li:nth-child(2) a {
  border: 1px solid #eee;
}
.left .l-top li:nth-child(3) a {
  background-color: #5188b8;
  border: none;
}
.left .l-top li:nth-child(4) a {
  position: relative;
  border: 1px solid #eee;
}
.left .l-top li:nth-child(4) a::before {
  width: 6px;
  height: 6px;
  content: " ";
  position: absolute;
  background-color: red;
  border-radius: 50%;
  top: 0px;
  left: 16px;
}
.left .l-top li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.left .l-top li a {
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #FF90AA;
}
#answer {
  margin-top: 61px;
}
#answer .top .item {
  align-items: center;
  // background-color: rgb(39, 118, 223);
}
#answer .item {
  color: black;
  display: flex;
  padding: 20px;
  font-size: 20px;
  // align-items: center;
}
#answer .top .item li:nth-child(1) {
  margin-right: 10px;
}
#answer .top .item li:nth-child(3) {
  position: relative;
  margin-left: auto;
}
#answer {
  padding-bottom: 30px;
}
.icon20 {
  font-size: 20px;
  font-weight: bold;
}
.item .msg {
  padding: 10px 15px;
  border-radius: 4px;
  top: 47px;
  right: -30px;
  color: #6c757d;
  position: absolute;
  border: 1px solid rgba(0,0,0,.15);
  background-color: #fff;
}
.item .msg p {
  font-size: 16px;
  width: 200px;
  text-align: left;
}
.el-icon-s-fold {
  margin-right: 5px;
  cursor: pointer;
}
</style>
