<template>
  <div class="main">
    <img src="https://uploadfiles.nowcoder.com/images/20200227/339694163_1582803781536_E8CABFD4B8C6F9129BA59A7DDB02371B">
    <div class="content">
      <el-input v-model="searchVal" class="searchInput" placeholder="请输入公司/试卷名称" prefix-icon="el-icon-search" size="small"></el-input>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="技术（软件）/信息技术类" name="first">
          <template>
            <div>
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                  <template slot="title">
                    <span class="collapse-title">公司</span>
                    <i class="header-icon el-icon-office-building"></i>
                    <div v-if="selectedCompany">
                      <el-tag type="danger" class="user-selected" effect="plain">
                        您选择的公司是 —— {{ selectedCompany }}
                      </el-tag>
                    </div>
                  </template>
                  <div class="company">
                    <div v-for="(item, index) in companyUrl" :key="index">
                      <img :src="item.url" class="companyImage" @click="selectCompany(item.companyName)">
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <template slot="title">
                    <span class="collapse-title">职位</span>
                    <i class="header-icon el-icon-s-custom"></i>
                    <div v-if="selectedJob">
                      <el-tag type="danger" class="user-selected" effect="plain">
                        您选择的职位是 —— {{ selectedJob }}
                      </el-tag>
                    </div>
                  </template>
                  <el-tag
                    v-for="tag in jobTags"
                    :key="tag.name"
                    :type="tag.type"
                    @click="selectJob(tag.name)">
                    {{tag.name}}
                  </el-tag>
                </el-collapse-item>
                <el-collapse-item name="3">
                  <template slot="title">
                    <span class="collapse-title">年份</span>
                    <i class="header-icon el-icon-time"></i>
                    <div v-if="selectedTime">
                      <el-tag type="danger" class="user-selected" effect="plain">
                        您选择的年份是 —— {{ selectedTime }}
                      </el-tag>
                    </div>
                  </template>
                  <el-tag
                    v-for="tag in timeTags"
                    :key="tag.name"
                    :type="tag.type"
                    @click="selectTime(tag.name)">
                    {{tag.name}}
                  </el-tag>
                </el-collapse-item>
              </el-collapse>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane label="技术（硬件）/电子信息类" name="second">技术（硬件）/电子信息类的内容</el-tab-pane>
      </el-tabs>
    </div>
    <div class="contant-card">
      <el-tabs v-model="activeCardName" @tab-click="handleCardClick" type="border-card">
        <el-tab-pane label="默认" name="first">
          <div class="contant-card-box">
            <div v-for="(item, index) in cardContent" :key="index">
              <el-card class="box-card">
                <div class="box-card-main">
                  <span>{{ item.title }}</span>
                  <img :src="item.url">
                  <div class="hot">热度指数: {{ item.hot }}</div>
                  <div>匹配职位: {{ item.job }}</div>
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
          </div>
        </el-tab-pane>
        <el-tab-pane label="最新" name="second">根据最新排序</el-tab-pane>
        <el-tab-pane label="最热" name="third">根据最热排序</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionPage',
  data () {
    return {
      activeName: 'first',
      activeCardName: 'first',
      searchVal: '',
      activeNames: ['1'],
      selectedCompany: '',
      selectedTime: '',
      selectedJob: '',
      timeTags: [
        { name: '2020', type: '' },
        { name: '2019', type: 'success' },
        { name: '2018', type: 'info' },
        { name: '2017', type: 'warning' },
        { name: '2016', type: 'danger' },
        { name: '2015', type: '' },
        { name: '2014', type: 'success' },
        { name: '2013', type: 'info' },
        { name: '2012', type: 'warning' },
        { name: '2011', type: 'danger' }
      ],
      jobTags: [
        { name: 'Java工程师', type: '' },
        { name: 'C++工程师', type: 'success' },
        { name: 'PHP工程师', type: 'info' },
        { name: 'golang工程师', type: 'warning' },
        { name: '前端工程师', type: 'danger' },
        { name: '安卓工程师', type: '' },
        { name: 'iOS工程师', type: 'success' },
        { name: '算法工程师', type: 'info' },
        { name: '大数据开发工程师', type: 'warning' },
        { name: '信息技术岗', type: 'danger' },
        { name: '运维工程师', type: '' },
        { name: '安全工程师', type: 'success' },
        { name: '数据分析师', type: 'info' },
        { name: '数据库开发工程师', type: 'warning' },
        { name: '游戏研发工程师', type: 'danger' },
        { name: '测试开发工程师', type: '' },
        { name: '测试工程师', type: 'success' }
      ],
      companyUrl: [
        { 'url': 'https://uploadfiles.nowcoder.com/images/20190409/6658561_1554809293714_A976736125A07297BEF0C62503894AAF', 'companyName': '腾讯' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20191129/4107856_1575019688704_90x30.png', 'companyName': '字节跳动' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20180518/59_1526626225791_52442CEB6EF8192F3D72F2BCA98B6EC4', 'companyName': '百度' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190629/4107856_1561788934302_90x30.png', 'companyName': '美团点评' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20180704/826546_1530685753274_C00B57557743E709B8B96933432E0DFA', 'companyName': '京东' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20180609/59_1528513313775_BDDCDA025D331852F27B3D0D5FF903EC', 'companyName': '网易' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20190222/59_1550844836644_A516DAD551EB22B1F5E839523087FA06', 'companyName': '小米' },
        { 'url': 'https://static.nowcoder.com//images/res/logo/comLogo/dd.png', 'companyName': '滴滴' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20180518/59_1526626303215_A4273799F870EBEA77C9E6CFADC9D005', 'companyName': '拼多多' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190929/9398821_1569752897226_90x30.png', 'companyName': '360' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190411/4107856_1554957266672_1.jpg', 'companyName': 'ViVo' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190508/4107856_1557284535485_%E6%90%BA%E7%A8%8B.png', 'companyName': '携程' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190329/4107856_1553833982879_90x30.png', 'companyName': '蘑菇街' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20200107/4107856_1578392556326_90x30.png', 'companyName': '欢聚集团' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20190313/59_1552467469722_859C1846A8036823F3E068F41F768F06', 'companyName': '搜狗' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190508/4107856_1557284894634_%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9.png', 'companyName': 'bilibili' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190723/4107856_1563883639164_90x30.png', 'companyName': '旷视科技' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20180816/59_1534410276919_F7A02FC71127F78A6754B1C01B33EDB7', 'companyName': '商汤科技' },
        { 'url': 'https://static.nowcoder.com//images/res/logo/comLogo/jbt.png', 'companyName': '吉比特' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20180518/59_1526626261634_0580BE38735562F177330519443A4F36', 'companyName': '搜狐' },
        { 'url': 'https://uploadfiles.nowcoder.com/files/20190625/4107856_1561443875132_90x30.png', 'companyName': 'iHandy' },
        { 'url': 'https://uploadfiles.nowcoder.com/images/20181207/59_1544163131168_6C3A469CB69F397E0EF46C021A6FEE24', 'companyName': '点我达' }
      ],
      cardContent: [
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 100, rate: 1 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 200, rate: 2 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 300, rate: 3 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 400, rate: 4 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 500, rate: 5 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 100, rate: 1 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 200, rate: 2 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 300, rate: 3 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 400, rate: 4 },
        { title: '奇安信2019秋招C++方向笔试题（B）', url: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png', job: '前端工程师', hot: 500, rate: 5 }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleCardClick (tab, event) {
      console.log(tab, event)
    },
    handleChange (val) {
      console.log(val)
    },
    selectCompany (companyName) {
      this.selectedCompany = companyName
      console.log(222, companyName)
    },
    selectJob (job) {
      this.selectedJob = job
    },
    selectTime (time) {
      this.selectedTime = time
      // 点击年份进行查询过滤
      console.log(111, time)
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 61px;
  padding: 10px 80px;
}
.content {
  background: #fff;
  padding: 10px 50px;
  margin-top: 10px;
}
.contant-card {
  background: #fff;
  margin-top: 15px;
}
.searchInput {
  width: 200px;
  /* float: right; */
  position: absolute;
  right: 130px;
  z-index: 1000;
}
.el-collapse {
  border: none;
}
.el-tag {
  margin: 0 20px 10px 0;
  font-size: 16px;
  cursor: pointer;
}
.collapse-title {
  font-size: 18px;
  padding-right: 5px;
  /* color: #003ecc; */
  font-weight: bold;
  /* font-size: 17px; */
  /* padding-right: 5px; */
  color: cornflowerblue;
}
.header-icon {
  /* font-size: 17px; */
  /* color: cornflowerblue; */
  font-size: 18px;
  color: #003ecc;
  font-weight: bold;
}
.company {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.companyImage {
  width: 90px;
  height: 30px;
  margin: 0 20px 10px 0;
  cursor: pointer;
}
.user-selected {
  font-size: 10px;
  margin-left: 10px;
}
.box-card-main {
  font-size: 14px;
  padding: 18px 0;
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
  justify-content: space-between;
}
.hot {
  font-size: 16px;
  padding: 5px 0 10px 0;
}
.rate-content {
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0 10px 0;
}
</style> /* eslint-disable */
