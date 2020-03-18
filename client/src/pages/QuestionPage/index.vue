<template>
  <div class="main">
    <router-view></router-view>
    <img src="https://uploadfiles.nowcoder.com/images/20200227/339694163_1582803781536_E8CABFD4B8C6F9129BA59A7DDB02371B">
    <div class="content">
      <el-input v-model="searchVal" class="searchInput" placeholder="请输入公司/试卷名称" prefix-icon="el-icon-search" size="small"></el-input>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="技术（软件）/信息技术类" name="software">
          <collapse-card :collapseCardData="themeData" @selectedValList="selectedValList"> </collapse-card>
        </el-tab-pane>
        <el-tab-pane label="技术（硬件）/电子信息类" name="hardware">
          <collapse-card :collapseCardData="themeData" @selectedValList="selectedValList"> </collapse-card>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="contant-card">
      <el-tabs v-model="activeCardName" @tab-click="handleCardClick" type="border-card">
        <el-tab-pane label="默认" name="">
          <!-- <span>根据默认排序</span> -->
          <question-card :questionCardData="themeData"></question-card>
        </el-tab-pane>
        <el-tab-pane label="最新" name="newest">
          <!-- <span>根据最新排序</span> -->
          <question-card :questionCardData="themeData"></question-card>
        </el-tab-pane>
        <el-tab-pane label="最难" name="hardest">
          <!-- <span>根据最热排序</span> -->
          <question-card :questionCardData="themeData"></question-card>
        </el-tab-pane>
      </el-tabs>
      <div class="pagination" v-if="this.themeData.length !== 0">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size.sync="pageNum"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import CollapseCard from '@/components/CollapseCard'
import QuestionCard from '@/components/QuestionCard'
import _ from 'lodash'
import moment from 'moment'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'QuestionPage',
  components: {
    CollapseCard,
    QuestionCard
  },
  data () {
    return {
      activeName: 'software',
      activeCardName: '',
      currentPage: 1, // 分页
      pageNum: 10,
      total: 0,
      searchVal: '',
      activeNames: ['1'],
      tagType: '',
      sortType: '',
      searchSelectedVal: {
        companyName: '',
        post: '',
        years: ''
      },
      collapseData: [
        {
          category: 'software', companyName: '腾讯', companyUrl: 'https://uploadfiles.nowcoder.com/images/20190409/6658561_1554809293714_A976736125A07297BEF0C62503894AAF', post: 'Java工程师', time: '2020', tagType: ''
        },
        {
          category: 'software', companyName: '字节跳动', companyUrl: 'https://uploadfiles.nowcoder.com/files/20191129/4107856_1575019688704_90x30.png', post: '前端工程师', time: '2019', tagType: 'success'
        },
        {
          category: 'software', companyName: '百度', companyUrl: 'https://uploadfiles.nowcoder.com/images/20180518/59_1526626225791_52442CEB6EF8192F3D72F2BCA98B6EC4', post: '前端工程师', time: '2018', tagType: 'info'
        },
        {
          category: 'software', companyName: '美团点评', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190629/4107856_1561788934302_90x30.png', post: '前端工程师', time: '2017', tagType: 'warning'
        },
        {
          category: 'software', companyName: '京东', companyUrl: 'https://uploadfiles.nowcoder.com/images/20180704/826546_1530685753274_C00B57557743E709B8B96933432E0DFA', post: '前端工程师', time: '2016', tagType: 'danger'
        },
        {
          category: 'software', companyName: '网易', companyUrl: 'https://uploadfiles.nowcoder.com/images/20180609/59_1528513313775_BDDCDA025D331852F27B3D0D5FF903EC', post: '前端工程师', time: '2015', tagType: ''
        },
        {
          category: 'software', companyName: '小米', companyUrl: 'https://uploadfiles.nowcoder.com/images/20190222/59_1550844836644_A516DAD551EB22B1F5E839523087FA06', post: '前端工程师', time: '2014', tagType: 'success'
        },
        {
          category: 'software', companyName: '滴滴', companyUrl: 'https://static.nowcoder.com//images/res/logo/comLogo/dd.png', post: '前端工程师', time: '2020', tagType: 'info'
        },
        {
          category: 'software', companyName: '拼多多', companyUrl: 'https://uploadfiles.nowcoder.com/images/20180518/59_1526626303215_A4273799F870EBEA77C9E6CFADC9D005', post: '前端工程师', time: '2013', tagType: 'warning'
        },
        {
          category: 'software', companyName: '360', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190929/9398821_1569752897226_90x30.png', post: '前端工程师', time: '2012', tagType: 'danger'
        },
        {
          category: 'software', companyName: 'ViVo', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190411/4107856_1554957266672_1.jpg', post: '前端工程师', time: '2011', tagType: ''
        },
        {
          category: 'software', companyName: '携程', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190508/4107856_1557284535485_%E6%90%BA%E7%A8%8B.png', post: '前端工程师', time: '2010', tagType: 'success'
        },
        {
          category: 'software', companyName: '蘑菇街', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190329/4107856_1553833982879_90x30.png', post: '前端工程师', time: '2020', tagType: 'info'
        },
        {
          category: 'software', companyName: '欢聚集团', companyUrl: 'https://uploadfiles.nowcoder.com/files/20200107/4107856_1578392556326_90x30.png', post: '前端工程师', time: '2020', tagType: 'warning'
        },
        {
          category: 'software', companyName: '搜狗', companyUrl: 'https://uploadfiles.nowcoder.com/images/20190313/59_1552467469722_859C1846A8036823F3E068F41F768F06', post: '前端工程师', time: '2020', tagType: 'danger'
        },
        {
          category: 'software', companyName: 'bilibili', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190508/4107856_1557284894634_%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9.png', post: '前端工程师', time: '2020', tagType: ''
        },
        {
          category: 'software', companyName: '旷视科技', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190723/4107856_1563883639164_90x30.png', post: '前端工程师', time: '2020', tagType: 'success'
        },
        {
          category: 'software', companyName: '商汤科技', companyUrl: 'https://uploadfiles.nowcoder.com/images/20180816/59_1534410276919_F7A02FC71127F78A6754B1C01B33EDB7', post: '前端工程师', time: '2020', tagType: 'info'
        },
        {
          category: 'software', companyName: '吉比特', companyUrl: 'https://static.nowcoder.com//images/res/logo/comLogo/jbt.png', post: '前端工程师', time: '2020', tagType: 'warning'
        },
        {
          category: 'software', companyName: '搜狐', companyUrl: 'https://uploadfiles.nowcoder.com/images/20180518/59_1526626261634_0580BE38735562F177330519443A4F36', post: '前端工程师', time: '2018', tagType: 'danger'
        },
        {
          category: 'software', companyName: 'iHandy', companyUrl: 'https://uploadfiles.nowcoder.com/files/20190625/4107856_1561443875132_90x30.png', post: '前端工程师', time: '2020', tagType: ''
        },
        {
          category: 'software', companyName: '点我达', companyUrl: 'https://uploadfiles.nowcoder.com/images/20181207/59_1544163131168_6C3A469CB69F397E0EF46C021A6FEE24', post: '前端工程师', time: '2020', tagType: 'success'
        }
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
      ],
      themeData1: [
        {
          _id: 'abc',
          themeTitle: '奇安信2019秋招C++方向笔试题（B）',
          companyName: '奇安信',
          companyImageUrl: 'https://uploadfiles.nowcoder.com/files/20200211/999991354_1581407969193_奇安信90.jpg',
          themeImageUrl: 'https://uploadfiles.nowcoder.com/files/20190524/63_1558668315246_奇安信-80x80.png',
          post: '前端工程师',
          hot: 100,
          rate: 1,
          createdAt: '2020-3-14 14:00',
          // createdAt: 1584364925558,
          years: '2020',
          tagType: 'sofeware' // hardware
        }
      ],
      themeData: []
    }
  },
  computed: {
    ...mapState({
      themeList: state => state.theme.themeList || [],
      totalPage: state => state.theme.totalPage || 0,
      pageNumber: state => state.theme.pageNumber || 10,
      page: state => state.theme.page || 1
    }),
    fetchFilters () {
      return `${this.searchSelectedVal.companyName}_${this.searchSelectedVal.post}_${this.searchSelectedVal.years}` +
        `${this.activeName}_${this.activeCardName}_${this.searchVal}`
    }
  },
  watch: {
    themeList () {
      this.themeData = this.formatTime(this.themeList)
    },
    totalPage () {
      this.total = this.totalPage
    },
    pageNumber () {
      this.pageNum = this.pageNumber
    },
    page () {
      this.currentPage = this.page
    },
    fetchFilters () {
      this.fetchLastThemeList()
    }
  },
  mounted () {
    this.fetchThemeList()
  },
  methods: {
    ...mapActions([
      'fetchThemeList'
    ]),
    formatTime (themeData) {
      const TIME_FORMAT = 'YYYY-MM-DD HH:mm'
      const data = _.cloneDeep(themeData)
      return data.map(item => {
        item.createdAt = moment(item.createdAt).format(TIME_FORMAT)
        return item
      })
    },
    fetchLastThemeList () {
      console.log('要请求数据啦！！！')
      let params = {
        companyName: this.searchSelectedVal.companyName,
        post: this.searchSelectedVal.post,
        years: this.searchSelectedVal.years,
        searchValue: this.searchVal, // input的值
        tagType: '',
        sortType: this.activeCardName,
        currentPage: this.currentPage,
        pageNum: this.pageNum
      }
      this.fetchThemeList(params)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageNum = val
      this.fetchLastThemeList()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.fetchLastThemeList()
    },
    handleClick (tab, event) {
      // software handware 用这两个字段去请求数据
      console.log(333, this.activeName)
      // console.log(222, tab, event)
    },
    handleCardClick (tab, event) {
      console.log(222333, tab.name)
      // this.sortType = tab.name
      // tab.name = 'default' || 'newest' || 'hardest'
      // 将tab.name的类型传递给后端，后端用次type去进行查询，排序
      // console.log(tab, event)
    },
    handleChange (val) {
      console.log(1111, this.activeNames)
      console.log(1234, val)
    },
    selectedValList (selectedValList) {
      // 子组件传来选择的值 公司 职位 年份 {}
      this.searchSelectedVal = _.cloneDeep(selectedValList)
    }
  }
}
</script>

<style scoped>
.main {
  margin: 76px auto 0;
  /* padding: 10px 80px; */
  width: 1200px;
  box-sizing: border-box;
  position: relative;
}
.content {
  background: #fff;
  padding: 10px 25px;
  margin-top: 10px;
}
.contant-card {
  background: #fff;
  margin: 15px 0 20px;
}
.searchInput {
  width: 200px;
  /* float: right; */
  position: absolute;
  right: 50px;
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

.pagination {
  padding: 10px;
  float: right;
}

</style> /* eslint-disable */
