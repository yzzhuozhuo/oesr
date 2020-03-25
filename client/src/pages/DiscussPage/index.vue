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
            @selectedLabel="selectedLabel"
          />
        </div>
        <publish @selectPublish="selectPublish" />
        <discuss :discussList="discussList" />
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
import { mapActions, mapState } from 'vuex'
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
      searchContent: '',
      bannerImg:
        'https://uploadfiles.nowcoder.com/images/20200227/339694163_1582802393641_2EA1149C6B414F2169207C5987D77BCB',
      selectList: [
        { label: 0, name: '全部' },
        { label: 1, name: '站内公告' },
        { label: 2, name: '笔经面经' },
        { label: 3, name: '我要提问' },
        { label: 4, name: '技术交流' },
        { label: 5, name: '产品运营' },
        { label: 6, name: '留学生' },
        { label: 7, name: '职业发展' },
        { label: 8, name: '招聘信息' },
        { label: 9, name: '资源分享' },
        { label: 10, name: '猿生活' },
        { label: 11, name: '工作以后' }
      ],
      publish: 0,
      label: 0
    }
  },
  computed: {
    ...mapState({
      discussList: state => state.discuss.discussList,
      currentPage: state => state.discuss.currentPage,
      pageNum: state => state.discuss.pageNum,
      total: state => state.discuss.total,
      account: state => state.account
    })
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
    ...mapActions(['fetchDiscussInfo']),
    jump (path) {
      if (!this.account.token) {
        this.$message.error('请先登录！')
        return this.$router.replace({
          path: '/login'
        })
      }
      this.$router.push({
        path
      })
    },
    selectedLabel (label) {
      if (this.label === label) return
      this.fetchDiscussInfo({
        label,
        publish: this.publish,
        currentPage: this.currentPage,
        pageNum: this.pageNum,
        title: this.searchContent
      })
      this.label = label
    },
    selectPublish (publish) {
      if (this.publish === publish) return
      this.fetchDiscussInfo({
        label: this.label,
        publish,
        currentPage: this.currentPage,
        pageNum: this.pageNum,
        title: this.searchContent
      })
      this.publish = publish
    },
    changePagination (currentPage) {
      this.fetchDiscussInfo({
        publish: this.publish,
        label: this.label,
        currentPage,
        pageNum: this.pageNum,
        title: this.searchContent
      })
    },
    handleChange (title) {
      this.fetchDiscussInfo({
        publish: this.publish,
        label: this.label,
        currentPage: this.currentPage,
        pageNum: this.pageNum,
        title
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
