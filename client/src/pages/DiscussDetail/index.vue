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
          <card-title titleName="近期热帖" />
          <hot-discuss
            v-for="(item, index) in 18"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import CardTitle from '@/components/CardTitle'
import HotDiscuss from '@/components/HotDiscuss'
import ContentHeader from './ContentHeader'
import Comment from './Comment'
import ReplyComment from './ReplyComment'

export default {
  name: 'DiscussDetail',
  components: {
    CardTitle,
    HotDiscuss,
    ContentHeader,
    Comment,
    ReplyComment
  },
  data () {
    return {
      discuss: {}
    }
  },
  mounted () {
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
