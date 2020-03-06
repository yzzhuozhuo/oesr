<template>
  <div class="practice">
    <banner
      :bannerImg="bannerImg"
      :height="80"
    />
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  name: 'PracticeSquare',
  components: {
    Banner
  },
  data () {
    return {
      bannerImg:
        'https://uploadfiles.nowcoder.com/images/20200227/999991356_1582788882962_3D701BDF90492AB964C923896E32F192',
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
.practice {
  width: 1200px;
  margin: 80px auto;
}
</style>
