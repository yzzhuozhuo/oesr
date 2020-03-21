<template>
  <div class="detail">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="detail-bread"
    >
      <el-breadcrumb-item :to="{ path: '/discussPage' }">讨论区</el-breadcrumb-item>
      <el-breadcrumb-item>{{discuss.classify && discuss.classify.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="left">
        <div class="main">
          <content-header
            :title="discuss.title"
            :user="discuss.user"
            :createAt="discuss.createAt"
          />
          <!-- 富文本 -->
          <comment :content="discuss.content" />
        </div>
        <!-- <reply-comment /> -->
      </div>
      <div class="right">
        <div class="right-wrap">
          <card-title titleName="励志语句" />
          <famous
            v-for="(item, index) in famousList"
            :key="index"
            :famous="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardTitle from '@/components/CardTitle'
import Famous from './Famous'
import ContentHeader from './ContentHeader'
import Comment from './Comment'
import ReplyComment from './ReplyComment'

export default {
  name: 'DiscussDetail',
  components: {
    CardTitle,
    Famous,
    ContentHeader,
    Comment,
    ReplyComment
  },
  data () {
    return {
      discuss: {},
      famousList: [
        {
          title: '世上没有常胜将军',
          name: '治愈系文字'
        },
        {
          title: '自己才是最靠得住的人',
          name: '治愈系文字'
        },
        {
          title: '不是井里没有水，而是你挖的不够深',
          name: '格局'
        },
        {
          title: '自己选择的路，跪着也要把它走完',
          name: '旅途'
        },
        {
          title: '我现在没空，忙着优秀。',
          name: '优秀人'
        },
        {
          title: '越努力越幸运',
          name: '治愈系文字'
        },
        {
          title: '成长是一场和自己的比赛',
          name: '奥德赛'
        },
        {
          title: '从来没有一种坚持会被辜负',
          name: '坚持'
        },
        {
          title: '没有哪种教育能及得上逆境',
          name: '逆境'
        },
        {
          title: '去变成你自己。',
          name: '治愈系文字'
        }
      ]
    }
  },
  created () {
    this.getDiscussInfo()
  },
  methods: {
    ...mapActions(['findDiscussById']),
    async getDiscussInfo () {
      const { id } = this.$route.query
      const discuss = await this.findDiscussById(id)
      console.info(discuss)
      this.discuss = discuss
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  width: 1000px;
  margin: 0 auto;
  color: #333;

  &-bread {
    margin: 81px 0 5px;
    line-height: 1.1;
  }

  .content {
    width: 100%;
    margin: 8px auto 20px;
    display: flex;
    justify-content: space-between;

    .left {
      width: 685px;
      box-sizing: border-box;
      border-radius: 3px;

      .main {
        padding: 15px 0;
        background-color: #fff;
        box-sizing: border-box;
      }
    }

    .right {
      width: 300px;
      box-sizing: border-box;

      &-wrap {
        border: 1px solid #e0e0e0;
        background-color: #fff;
        padding: 15px 0;
      }
    }
  }
}
</style>
