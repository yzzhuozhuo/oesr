<template>
  <div class="main">
    <router-view></router-view>
    <!-- <img class="campusImg" src="https://uploadfiles.nowcoder.com/images/20200227/339694163_1582803781536_E8CABFD4B8C6F9129BA59A7DDB02371B" @click="toCampus"> -->
    <div class="content">
      <div class="company-choose">
        <el-input
          style="width: 160px"
          size="mini"
          clearable
          placeholder="请输入公司"
          prefix-icon="el-icon-search"
          v-model="searchSelectedVal.companyName">
        </el-input>
        <el-input
          style="width: 160px; margin: 0 10px"
          size="mini"
          clearable
          placeholder="请输入职位"
          prefix-icon="el-icon-search"
          v-model="searchSelectedVal.post">
        </el-input>
        <el-input
          style="width: 160px"
          size="mini"
          clearable
          placeholder="请输入年份"
          prefix-icon="el-icon-search"
          v-model="searchSelectedVal.years">
        </el-input>
        <el-input
          style="width: 160px; margin-left: 10px"
          size="mini"
          clearable
          placeholder="请输入试题名称"
          prefix-icon="el-icon-search"
          v-model="searchVal">
        </el-input>
      </div>
      <!-- <el-input v-model="searchVal" class="searchInput" placeholder="请输入公司/试卷名称" prefix-icon="el-icon-search" size="small"></el-input> -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="技术（软件）/信息技术类" name="software">
          <collapse-card :collapseCardData="softwareCollapseData" @selectedValList="selectedValList"> </collapse-card>
        </el-tab-pane>
        <el-tab-pane label="技术（硬件）/电子信息类" name="hardware">
          <collapse-card :collapseCardData="hardwareCollapseData" @selectedValList="selectedValList"> </collapse-card>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="contant-card">
      <el-tabs v-model="activeCardName" type="border-card">
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
import { mapState, mapActions } from 'vuex'
import moment from 'moment'
import _ from 'lodash'
import CollapseCard from '@/components/CollapseCard'
import QuestionCard from '@/components/QuestionCard'
import { softwareCollapseData, hardwareCollapseData } from './config'

export default {
  name: 'QuestionPage',
  components: {
    CollapseCard,
    QuestionCard
  },
  data () {
    return {
      softwareCollapseData: softwareCollapseData,
      hardwareCollapseData: hardwareCollapseData,
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
    let companyName = this.$route.query.companyName
    if (companyName) {
      this.searchSelectedVal.companyName = companyName === '99+' ? '' : companyName
    }
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
      let params = {
        companyName: this.searchSelectedVal.companyName,
        post: this.searchSelectedVal.post,
        years: this.searchSelectedVal.years,
        searchValue: this.searchVal, // input的值
        tagType: this.activeName,
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
    selectedValList (selectedValList) {
      // 子组件传来选择的值 公司 职位 年份 {}
      this.searchSelectedVal = _.cloneDeep(selectedValList)
    },
    toCampus () {
      window.open('https://zhaopin.kuaishou.cn/recruit/e/#/official/index/')
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
.campusImg {
  cursor: pointer;
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
.company-choose {
  display: flex;
  position: absolute;
  /* top: 105px; */
  top: 12px;
  right: 26px;
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
