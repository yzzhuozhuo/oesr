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
          <div class="pub-btn">我要发布</div>
        </div>
        <div class="selector">
          <selector :selectList="disscussList" />
        </div>
        <div class="comment-wrap">
          <div class="comment" v-for="(item, index) in 10" :key="index">
            <img
              src="https://images.nowcoder.com/images/20200221/999991342_1582251610228_6D9DCA1EE42757CAD66E3EA71709F9B8?x-oss-process=image/resize,m_mfit,h_100,w_100"
              alt=""
            >
            <div class="main">
              <div class="comment-word">
                2020届补招专场｜春招补招，抓住上岸翻盘的最后机会！
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import CardTitle from '@/components/CardTitle'
import Selector from '@/components/Selector'

export default {
  name: 'DiscussPage',
  components: {
    Banner,
    CardTitle,
    Selector
  },
  data () {
    return {
      bannerImg:
        'https://uploadfiles.nowcoder.com/images/20200227/339694163_1582802393641_2EA1149C6B414F2169207C5987D77BCB',
      disscussList: [
        '全部',
        '站内公告',
        '笔经面经',
        '我要提问',
        '技术交流',
        '产品运营',
        '留学生',
        '职业发展',
        '招聘信息',
        '资源分享',
        '猿生活',
        '工作以后'
      ]
    }
  },
  mounted () {}
}
</script>

<style scoped>
.discuss {
  width: 1000px;
  margin: 80px auto;
}

.content {
  width: 100%;
  margin: 8px auto 20px;
}

.left {
  width: 668px;
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
}

.selector {
  background-color: #f5f5f5;
  padding: 10px;
}

.comment-wrap {
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  box-sizing: border-box;
}

.comment {
  height: 113px;
  border-radius: 3px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
}

.comment:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: #4dbfae;
}

.comment > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.main {
  width: 570px;
  padding-top: 6px;
  box-sizing: border-box;
}
</style>
