<template>
  <div class="main">
    <div class="main-content">
      <div v-if="!hasAmount">
        <span class="title">请先填写试题信息：系统会智能规划题目格式</span>
        <div class="theme-amount">
          <div class="theme-title">
            <span>试题名称：</span>
            <el-input v-model="themeTitle" placeholder="请输入试题名称" style="width: 200px"></el-input>
          </div>
          <div class="choose">
            <span>选择题：</span>
            <el-select v-model="chooseNum" placeholder="请选择数量" style="width: 120px">
              <el-option
                v-for="item in chooseNumOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="fill">
            <span>填空题：</span>
            <el-select v-model="fillNum" placeholder="请选择数量" style="width: 120px">
              <el-option
                v-for="item in fillNumOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="judge">
            <span>判断题：</span>
            <el-select v-model="judgeNum" placeholder="请选择数量" style="width: 120px">
              <el-option
                v-for="item in judgeNumOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="btn">
            <el-button type="primary" @click="next">下一步</el-button>
          </div>
        </div>
        <div class="no-data">
          <img src="//static.nowcoder.com//images/res/empty/2.png">
          <div>请先设置题目主体信息</div>
        </div>
      </div>
      <div class="theme-content" v-if="hasAmount">
        <div class="header">
          <div class="theme-type">
            <span>题目类型：</span>
            <el-select v-model="optionTypeValue" placeholder="请选择题型" class="select-el" style="width: 110px">
              <el-option
                v-for="item in themeTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span>难度系数：</span>
            <el-select v-model="optionDifficultyValue" placeholder="请选择" class="select-el" style="width: 110px">
              <el-option
                v-for="item in difficultyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span>热度系数：</span>
            <el-select v-model="optionHotValue" placeholder="请选择" class="select-el" style="width: 110px">
              <el-option
                v-for="item in hotOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span>匹配职位：</span>
            <el-input v-model="post" placeholder="请输入职位" style="width: 110px"></el-input>
            <span>年份：</span>
            <el-input v-model="years" placeholder="请输入年份" style="width: 110px"></el-input>
            <el-button type="primary" @click="updateLastData">提交</el-button>
          </div>
        </div>
        <div class="content">
          <!-- 选择题部分 -->
          <div v-if="optionTypeValue === '选择题' && chooseNum">
            <div class="change" v-for="(item, index) in chooseLists" :key="index">
              <div class="title">
                <el-tag>题目{{index + 1}}：</el-tag><span>在下面的输入框中输入题目,形如--DNS 服务器和DHCP服务器的作用是（）</span>
                <span class="right">正确选项:</span>
                <el-select v-model="chooseLists[index].rightAnswer" placeholder="选择正确答案" style="width: 135px">
                  <el-option
                    v-for="item in rights"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-input
                  type="textarea"
                  rows="4"
                  v-model="chooseLists[index].question"
                  placeholder="请输入题目内容"
                  resize="none"
                  class="answer">
                </el-input>
              </div>
              <div class="options">
                <ul>
                  <li>
                    <el-tag type="success">A</el-tag>
                    <el-input
                      placeholder="请输入选项A的内容"
                      v-model="chooseLists[index].answerA"
                      clearable="">
                    </el-input>
                  </li>
                  <li>
                    <el-tag type="success">B</el-tag>
                    <el-input
                      placeholder="请输入选项B的内容"
                      v-model="chooseLists[index].answerB"
                      clearable="">
                    </el-input>
                  </li>
                  <li>
                    <el-tag type="success">C</el-tag>
                    <el-input
                      placeholder="请输入选项C的内容"
                      v-model="chooseLists[index].answerC"
                      clearable="">
                    </el-input>
                  </li>
                  <li>
                    <el-tag type="success">D</el-tag>
                    <el-input
                      placeholder="请输入选项D的内容"
                      v-model="chooseLists[index].answerD"
                      clearable="">
                    </el-input>
                  </li>
                </ul>
              </div>
              <div class="title">
                <el-tag>解析:</el-tag><span>在下面的输入框中输入题目解析</span>
                <el-input
                  type="textarea"
                  rows="4"
                  v-model="chooseLists[index].analysis"
                  placeholder="请输入答案解析"
                  resize="none"
                  class="answer">
                </el-input>
              </div>
            </div>
            <div class="submit">
              <el-button type="primary" @click="updateChooseLists">保存选择题</el-button>
            </div>
          </div>
          <!-- 填空题部分 -->
          <div v-if="optionTypeValue === '填空题' && fillNum">
            <div class="change fill" v-for="(item, index) in fillLists" :key="index">
              <div class="title">
                <el-tag>题目:</el-tag><span>输入题目,形如--从计算机网络系统组成的角度看，计算机网络可以分为()和()。注意需要考生答题部分一定要用括号（英文半角）括起来。</span>
                <el-input
                  type="textarea"
                  rows="4"
                  v-model="fillLists[index].question"
                  placeholder="请输入题目内容"
                  resize="none"
                  class="answer">
                </el-input>
              </div>
              <div class="fillAnswer">
                <el-tag>正确答案:</el-tag>
                <el-input v-model="fillLists[index].answer"></el-input>
              </div>
              <div class="title analysis">
                <el-tag type="success">解析:</el-tag><span>下方输入框中输入答案解析</span>
                <el-input
                  type="textarea"
                  rows="4"
                  v-model="fillLists[index].analysis"
                  placeholder="请输入答案解析"
                  resize="none"
                  class="answer">
                </el-input>
              </div>
            </div>
            <div class="submit">
              <el-button type="primary" @click="updateFillLists">保存填空题</el-button>
            </div>
          </div>
          <!-- 判断题 -->
          <div v-if="optionTypeValue === '判断题' && judgeNum">
            <div class="change judge" v-for="(item, index) in judgeLists" :key="index">
              <div class="title">
                <el-tag>题目:</el-tag><span>在下面的输入框中输入题目</span>
                <el-input
                  type="textarea"
                  rows="4"
                  v-model="judgeLists[index].question"
                  placeholder="请输入题目内容"
                  resize="none"
                  class="answer">
                </el-input>
              </div>
              <div class="judgeAnswer">
                <el-radio v-model="judgeLists[index].answer" label="T">正确</el-radio>
                <el-radio v-model="judgeLists[index].answer" label="F">错误</el-radio>
              </div>
              <div class="title">
                <el-tag>解析:</el-tag><span>在下面的输入框中输入题目解析</span>
                <el-input
                  type="textarea"
                  rows="4"
                  v-model="judgeLists[index].analysis"
                  placeholder="请输入答案解析"
                  resize="none"
                  class="answer">
                </el-input>
              </div>
            </div>
            <div class="submit">
              <el-button type="primary" @click="updateJudgeLists">保存判断题</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'DesignTheme',
  data () {
    return {
      themeTitle: '',
      chooseNum: '',
      fillNum: '',
      judgeNum: '',
      hasAmount: false,
      optionTypeValue: '选择题',
      optionDifficultyValue: '',
      optionHotValue: '',
      post: '',
      years: '',
      chooseNumOptions: [
        {
          label: '1道题',
          value: '1'
        },
        {
          label: '5道题',
          value: '5'
        },
        {
          label: '10道题',
          value: '10'
        },
        {
          label: '20道题',
          value: '20'
        },
        {
          label: '30道题',
          value: '30'
        }
      ],
      fillNumOptions: [
        {
          label: '1道题',
          value: '1'
        },
        {
          label: '5道题',
          value: '5'
        },
        {
          label: '10道题',
          value: '10'
        },
        {
          label: '20道题',
          value: '20'
        },
        {
          label: '30道题',
          value: '30'
        }
      ],
      judgeNumOptions: [
        {
          label: '1道题',
          value: '1'
        },
        {
          label: '5道题',
          value: '5'
        },
        {
          label: '10道题',
          value: '10'
        },
        {
          label: '20道题',
          value: '20'
        },
        {
          label: '30道题',
          value: '30'
        }
      ],
      themeTypeOptions: [
        {
          value: '选择题',
          label: '选择题'
        },
        {
          value: '填空题',
          label: '填空题'
        },
        {
          value: '判断题',
          label: '判断题'
        }
      ],
      difficultyOptions: [
        {
          label: '容易',
          value: 1
        },
        {
          label: '偏易',
          value: 2
        },
        {
          label: '适中',
          value: 3
        },
        {
          label: '偏难',
          value: 4
        },
        {
          label: '困难',
          value: 5
        }
      ],
      hotOptions: [
        {
          label: '一般',
          value: 1
        },
        {
          label: '较热',
          value: 2
        },
        {
          label: '很热',
          value: 3
        }
      ],
      rights: [
        {
          value: 'A',
          label: 'A'
        },
        {
          value: 'B',
          label: 'B'
        },
        {
          value: 'C',
          label: 'C'
        },
        {
          value: 'D',
          label: 'D'
        }
      ],
      chooseLists: [],
      fillLists: [],
      judgeLists: [],
      postChange: { // 选择题提交内容
        rightAnswer: '', // 正确答案选中值
        question: '', // 题目
        analysis: '', // 解析
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        score: '2'
      },
      postFill: { // 填空题提交内容
        answer: '', // 正确答案
        question: '', // 题目
        analysis: '', // 解析
        score: '2'
      },
      postJudge: { // 判断题提交内容
        answer: '', // 正确答案
        question: '', // 题目
        analysis: '', // 解析
        score: '2'
      }
    }
  },
  watch: {
    chooseNum () {
      this.chooseLists = Array.from({length: Number(this.chooseNum)}).map(item => (_.cloneDeep(this.postChange)))
    },
    fillNum () {
      this.fillLists = Array.from({length: Number(this.fillNum)}).map(item => (_.cloneDeep(this.postFill)))
    },
    judgeNum () {
      this.judgeLists = Array.from({length: Number(this.judgeNum)}).map(item => (_.cloneDeep(this.postJudge)))
    }
  },
  mounted () {
  },
  methods: {
    next () {
      this.hasAmount = true
    },
    updateChooseLists () {
      console.log('aaa')
    },
    updateFillLists () {
      console.log('bbb')
    },
    updateJudgeLists () {
      console.log('ccc')
    },
    updateLastData () {
      // 保存数据
      let data = {
        themeTitle: this.themeTitle, // 试题名称
        companyName: '', // 从公司主页的接口中拿
        post: this.post, // 职位
        years: this.years, // 年份
        hot: this.optionHotValue, // 热度
        rate: this.optionDifficultyValue, // 难度
        questionLists: [{
          chooseLists: this.chooseLists,
          fillLists: this.fillLists,
          judgeLists: this.judgeLists
        }]
      }
      console.log(666, data)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  display: flex;
  justify-content: center;
  .main-content {
    background: #fff;
    width: 80%;
    margin: 20px;
    padding: 20px;
    // height: 500px;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .no-data {
      text-align: center;
      padding: 130px;
    }
    .no-data img {
      padding-bottom: 10px;
    }
    .theme-amount {
      margin-top: 20px;
      display: flex;
      .choose, .fill, .judge {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .choose {
        margin-left: 25px;
      }
      .fill {
        margin: 0 25px;
      }
      .btn {
        margin-left: 30px;
      }
      .choose .el-input {
          width: 104px;
      }
      .fill .el-input {
        width: 104px;
      }
      .judge .el-input {
        width: 104px;
      }
    }
  }
}

.change {
  margin-top: 20px;
  padding: 20px 16px;
  background-color: #E7F6F6;
  border-radius: 4px;
  .title {
    padding-left: 6px;
    color: #2f4f4f;
    span:nth-child(1) {
      margin-right: 6px;
    }
    .right {
      padding: 0 5px 0 130px;
    }
    .answer {
      margin: 20px 0px 20px 8px;
    }
    .el-textarea {
      width: 98% !important;
    }
  }
  .options {
    ul {
      display: flex;
      flex-direction: column;
    }
    ul li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 98%;
      margin: 10px 0px;
      span {
        margin-right: 20px;
      }
    }
  }
}
.submit {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.fill {
  .fillAnswer {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-right: 6px;
    }
    .el-input {
      width: 91% !important;
    }
  }
  .analysis {
    margin-top: 20px;
    margin-left: 5px;
  }
}
.judge {
  .judgeAnswer {
    margin-left: 20px;
    margin-bottom: 20px;
  }
}

.theme-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
