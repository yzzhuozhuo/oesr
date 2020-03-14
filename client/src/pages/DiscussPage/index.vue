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
          <div
            class="pub-btn"
            @click="jump('publishComment')"
          >我要发布</div>
        </div>
        <div class="selector">
          <selector :selectList="selectList" />
        </div>
        <publish />
        <discuss :discussList="discussList" />
      </div>
      <div class="right">
        <card-title titleName="近期热帖" />
        <hot-discuss
          v-for="(item, index) in 18"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Banner from '@/components/Banner'
import CardTitle from '@/components/CardTitle'
import Selector from '@/components/Selector'
import HotDiscuss from '@/components/HotDiscuss'
import Discuss from './Discuss'
import Publish from './Publish'

export default {
  name: 'DiscussPage',
  components: {
    Banner,
    CardTitle,
    Selector,
    HotDiscuss,
    Discuss,
    Publish
  },
  data () {
    return {
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
      ]
    }
  },
  computed: {
    ...mapState({ discussList: state => state.discuss.discussList })
  },
  created () {
    this.fetchDiscussInfo({ label: 1, publish: 2 })
  },
  mounted () {},
  methods: {
    ...mapActions(['fetchDiscussInfo']),
    jump (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
  /* text-align: center; */
  border: 1px solid #e0e0e0;
  border-radius: 3px;
}

.head {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
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
  padding: 15px 0;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}
</style>
