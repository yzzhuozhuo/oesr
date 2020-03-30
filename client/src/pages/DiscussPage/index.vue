<template>
  <div class="discuss">
    <banner
      :bannerImg="bannerImg"
      :height="80"
    />
    <div class="content">
      <div class="left">
        <div class="head">
          <card-title titleName="分享与求助" />
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            class="searchContent"
            v-model="searchContent"
            clearable
            @change="handleChange"
          >
          </el-input>
          <div
            class="pub-btn"
            @click="jump('publishComment')"
          >我要发布</div>
        </div>
        <div class="selector">
          <selector
            :selectList="selectList"
            :label="label"
            @selectedLabel="selectedLabel"
          />
        </div>
        <publish @selectPublish="selectPublish" />
        <discuss :discussList="discussList" :studentId="studentList.studentId" :companyId="companyList.companyId" @removeDiscuss="removeDiscuss"/>
        <pagination
          :currentPage="currentPage"
          :pageNum="pageNum"
          :total="total"
          :changePagination="changePagination"
        />
      </div>
      <div class="right">
        <div class="right-wrap">
          <card-title titleName="近期热帖" />
          <hot-discuss
            v-for="(item, index) in discussList"
            :key="index"
            :hotCommentData="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Banner from '@/components/Banner'
import CardTitle from '@/components/CardTitle'
import HotDiscuss from '@/components/HotDiscuss'
import Selector from './Selector'
import Discuss from './Discuss'
import Publish from './Publish'
import Pagination from './Pagination'

export default {
  name: 'DiscussPage',
  components: {
    Banner,
    CardTitle,
    Selector,
    HotDiscuss,
    Discuss,
    Publish,
    Pagination
  },
  data () {
    return {
      bannerImg: {
        img: 'https://uploadfiles.nowcoder.com/images/20200207/33317073_1581044632109_870880B6B4BBEBE903A9F026B639A40B',
        url: 'https://www.baidu.com'
      },
      selectList: [
        { label: 0, name: '全部' },
        { label: 1, name: '站内公告' },
        { label: 2, name: '笔经面经' },
        { label: 3, name: '我要提问' },
        { label: 4, name: '技术交流' },
        { label: 5, name: '产品运营' },
        { label: 6, name: '内推消息' },
        { label: 7, name: '职业发展' },
        { label: 8, name: '招聘信息' },
        { label: 9, name: '资源分享' },
        { label: 10, name: '猿生活' },
        { label: 11, name: '工作以后' }
      ],
      publish: 0,
      label: this.$route.query.label * 1 || 0,
      searchContent: this.$route.query.company || ''
    }
  },
  computed: {
    ...mapState({
      studentList: state => state.student.studentList || [],
      companyList: state => state.company.companyList || [],
      discussList: state => state.discuss.discussList,
      currentPage: state => state.discuss.currentPage,
      pageNum: state => state.discuss.pageNum,
      total: state => state.discuss.total,
      account: state => state.account
    }),
    ...mapGetters(['accountType', 'hasLogin'])
  },
  created () {
    this.fetchDiscussInfo({
      publish: this.publish,
      label: this.label,
      currentPage: this.currentPage,
      pageNum: this.pageNum,
      title: this.searchContent
    })
  },
  mounted () {},
  methods: {
    ...mapActions(['fetchDiscussInfo', 'removeDiscussInfo']),
    jump (path) {
      if (!this.account.token) {
        this.$message.error('请先登录！')
        return this.$router.replace({
          path: '/login'
        })
      }
      this.$router.push({
        path,
        query: {
          label: this.label,
          publish: this.publish,
          userId: this.publish === 2 && this.accountType === 'student' ? this.studentList.studentId : this.companyList.companyId,
          currentPage: this.currentPage,
          pageNum: this.pageNum,
          title: this.searchContent
        }
      })
    },
    selectedLabel (label) {
      if (this.label === label) return
      this.fetchDiscussInfo({
        label,
        publish: this.publish,
        userId: this.publish === 2 && this.accountType === 'student' ? this.studentList.studentId : this.companyList.companyId,
        currentPage: this.currentPage,
        pageNum: this.pageNum,
        title: this.searchContent
      })
      this.label = label
    },
    selectPublish (publish) {
      console.log(666, publish)
      if (!this.account.token && publish === 2) {
        this.$message.error('请先登录，才能查看我的发布哦~')
        return this.$router.replace({
          path: '/login'
        })
      }
      if (this.publish === publish) return
      this.fetchDiscussInfo({
        label: this.label,
        publish,
        userId: publish === 2 && this.accountType === 'student' ? this.studentList.studentId : this.companyList.companyId,
        currentPage: this.currentPage,
        pageNum: this.pageNum,
        title: this.searchContent
      })
      this.publish = publish
    },
    changePagination (currentPage) {
      this.fetchDiscussInfo({
        publish: this.publish,
        userId: this.publish === 2 && this.accountType === 'student' ? this.studentList.studentId : this.companyList.companyId,
        label: this.label,
        currentPage,
        pageNum: this.pageNum,
        title: this.searchContent
      })
    },
    handleChange (title) {
      this.fetchDiscussInfo({
        publish: this.publish,
        userId: this.publish === 2 && this.accountType === 'student' ? this.studentList.studentId : this.companyList.companyId,
        label: this.label,
        currentPage: this.currentPage,
        pageNum: this.pageNum,
        title
      })
    },
    removeDiscuss (discuss) {
      this.removeDiscussInfo({ discussId: discuss._id }).then(() => {
        this.fetchDiscussInfo({
          publish: this.publish,
          userId: this.publish === 2 && this.accountType === 'student' ? this.studentList.studentId : this.companyList.companyId,
          label: this.label,
          currentPage: this.currentPage,
          pageNum: this.pageNum,
          title: this.title
        })
        this.$message({
          type: 'success',
          message: '删除讨论帖成功~'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
>>> .el-input--prefix {
  height: 30px;
  margin-top: -3px;
  margin-left: -250px;
}

.searchContent {
  width: 200px;
  margin-bottom: -10px;
  cursor: pointer;
}

>>> .el-input__inner {
  height: 30px;
}

>>> .el-input__icon {
  height: 30px;
  line-height: 30px;
}

.discuss {
  width: 1000px;
  margin: 80px auto;
}

.content {
  width: 100%;
  margin: 8px auto 20px;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 685px;
  background-color: #fff;
  padding: 15px 0;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
}

.head {
  display: flex;
  justify-content: space-between;
}

.pub-btn {
  width: 80px;
  height: 33px;
  line-height: 33px;
  background-color: #25bb9b;
  font-size: 14px;
  text-align: center;
  color: #fff;
  border-radius: 3px;
  margin-right: 20px;
  margin-top: -5px;
  cursor: pointer;

  &:hover {
    background-color: #22ae90;
  }
}

.selector {
  background-color: #f5f5f5;
  padding: 10px;
}

.right {
  width: 300px;
  box-sizing: border-box;

  &-wrap {
    border: 1px solid #e0e0e0;
    padding: 15px 0;
    background-color: #fff;
  }
}
</style>
