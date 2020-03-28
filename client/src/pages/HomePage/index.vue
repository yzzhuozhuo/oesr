<template>
  <div class="home">
    <swiper
      :swiperImgs="swiperImgs"
      :height="300"
    />
    <el-row
      class="tac"
      v-if="menus.length"
    >
      <left-menu
        :menus="menus"
        :fixed="fixed"
        :active="active"
        :handleOpen="handleOpen"
      />
      <div class="el-right">
        <right-card
          ref="card0"
          :title="menus[0].subMenu[0].subName"
        >
          <frist-card :firstCardData="firstCardData" />
        </right-card>
        <right-card
          v-for="(item, index) in menus[0].subMenu.slice(1)"
          :ref="`card${index + 1}`"
          :key="index + Math.random()"
          :title="item.subName"
        >
          <around-card :aroundCardData="item.subList" />
        </right-card>
        <right-card
          v-for="(item, index) in menus[1].subMenu"
          :ref="`card${index + 7}`"
          :key="index + Math.random()"
          :title="item.subName"
        >
          <around-card :aroundCardData="item.subList" />
        </right-card>
        <right-card
          v-for="(item, index) in menus[2].subMenu"
          :ref="`card${index + 13}`"
          :key="index + Math.random()"
          :title="item.subName"
        >
          <around-card :aroundCardData="item.subList" />
        </right-card>
        <right-card
          v-for="(item, index) in menus[3].subMenu"
          :ref="`card${index + 17}`"
          :key="index + Math.random()"
          :title="item.subName"
        >
          <tb-card :tbCardData="item.subList" />
        </right-card>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swiper from '@/components/Swiper'
import LeftMenu from './LeftMenu'
import RightCard from './RightCard'
import FristCard from './FristCard'
import AroundCard from './AroundCard'
import TbCard from './TbCard'

export default {
  name: 'Home',
  components: {
    Swiper, // 轮播图组件
    LeftMenu, // 左侧导航组件
    RightCard, // 右侧卡片组件
    FristCard, // 首个卡片组件
    AroundCard, // 左右卡片组件
    TbCard // 上下卡片组件
  },
  data () {
    return {
      swiperImgs: [
        {
          img: 'https://uploadfiles.nowcoder.com/images/20191115/999991356_1573804506330_D82683B3C229BEDC46B1799DE6AD7969',
          url: 'https://www.baidu.com'
        },
        {
          img: 'https://uploadfiles.nowcoder.com/images/20191217/4107856_1576563101119_5B4556E89C61A892801B88376C6D7D72',
          url: 'https://www.baidu.com'
        },
        {
          img: 'https://uploadfiles.nowcoder.com/images/20200215/999991342_1581772325727_E3CB95122AE9DC62348FC2AF4779F8F6',
          url: 'https://www.baidu.com'
        },
        {
          img: 'https://uploadfiles.nowcoder.com/images/20191030/8030387_1572425880113_685F76A8B66169663137EEB61BFB05E8',
          url: 'https://www.baidu.com'
        },
        {
          img: 'https://uploadfiles.nowcoder.com/images/20200227/999991356_1582784877799_412F57578E7D9C9A7D523D8022845B1A',
          url: 'https://www.baidu.com'
        }
      ],
      fixed: false, // 左侧导航固定定位
      active: '1-1' // 轮播图默认展示页
    }
  },
  computed: {
    ...mapState({ menus: state => state.home.menus }),
    firstCardData () {
      return this.menus.length ? this.menus[0].subMenu[0].subList : []
    }
  },
  created () {
    // 取首页数据
    this.fetchHomeInfo()
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.throttle(this.handleScroll, 15))
    })
  },
  methods: {
    ...mapActions(['fetchHomeInfo']),
    handleScroll () {
      let scrollY = document.documentElement.scrollTop
      if (scrollY > 285) {
        if (!this.fixed) this.fixed = true
      } else {
        if (this.fixed) this.fixed = false
      }

      if (scrollY > this.calculate(19)) {
        this.active = '4-4'
      } else if (scrollY > this.calculate(18)) {
        this.active = '4-3'
      } else if (scrollY > this.calculate(17)) {
        this.active = '4-2'
      } else if (scrollY > this.calculate(16)) {
        this.active = '4-1'
      } else if (scrollY > this.calculate(15)) {
        this.active = '3-4'
      } else if (scrollY > this.calculate(14)) {
        this.active = '3-3'
      } else if (scrollY > this.calculate(13)) {
        this.active = '3-2'
      } else if (scrollY > this.calculate(12)) {
        this.active = '3-1'
      } else if (scrollY > this.calculate(11)) {
        this.active = '2-6'
      } else if (scrollY > this.calculate(10)) {
        this.active = '2-5'
      } else if (scrollY > this.calculate(9)) {
        this.active = '2-4'
      } else if (scrollY > this.calculate(8)) {
        this.active = '2-3'
      } else if (scrollY > this.calculate(7)) {
        this.active = '2-2'
      } else if (scrollY > this.calculate(6)) {
        this.active = '2-1'
      } else if (scrollY > this.calculate(5)) {
        this.active = '1-7'
      } else if (scrollY > this.calculate(4)) {
        this.active = '1-6'
      } else if (scrollY > this.calculate(3)) {
        this.active = '1-5'
      } else if (scrollY > this.calculate(2)) {
        this.active = '1-4'
      } else if (scrollY > this.calculate(1)) {
        this.active = '1-3'
      } else if (scrollY > this.calculate(0)) {
        this.active = '1-2'
      } else if (scrollY > 311) {
        this.active = '1-1'
      }
    },
    handleOpen (index) {
      if (index === '1-1') {
        document.documentElement.scrollTop = 310 + 10
      } else if (index === '1-2') {
        document.documentElement.scrollTop = this.calculate(0) + 11
      } else if (index === '1-3') {
        document.documentElement.scrollTop = this.calculate(1) + 12
      } else if (index === '1-4') {
        document.documentElement.scrollTop = this.calculate(2) + 13
      } else if (index === '1-5') {
        document.documentElement.scrollTop = this.calculate(3) + 14
      } else if (index === '1-6') {
        document.documentElement.scrollTop = this.calculate(4) + 15
      } else if (index === '1-7') {
        document.documentElement.scrollTop = this.calculate(5) + 16
      } else if (index === '2-1') {
        document.documentElement.scrollTop = this.calculate(6) + 17
      } else if (index === '2-2') {
        document.documentElement.scrollTop = this.calculate(7) + 18
      } else if (index === '2-3') {
        document.documentElement.scrollTop = this.calculate(8) + 19
      } else if (index === '2-4') {
        document.documentElement.scrollTop = this.calculate(9) + 20
      } else if (index === '2-5') {
        document.documentElement.scrollTop = this.calculate(10) + 21
      } else if (index === '2-6') {
        document.documentElement.scrollTop = this.calculate(11) + 22
      } else if (index === '3-1') {
        document.documentElement.scrollTop = this.calculate(12) + 23
      } else if (index === '3-2') {
        document.documentElement.scrollTop = this.calculate(13) + 24
      } else if (index === '3-3') {
        document.documentElement.scrollTop = this.calculate(14) + 25
      } else if (index === '3-4') {
        document.documentElement.scrollTop = this.calculate(15) + 26
      } else if (index === '4-1') {
        document.documentElement.scrollTop = this.calculate(16) + 27
      } else if (index === '4-2') {
        document.documentElement.scrollTop = this.calculate(17) + 28
      } else if (index === '4-3') {
        document.documentElement.scrollTop = this.calculate(18) + 29
      } else if (index === '4-4') {
        document.documentElement.scrollTop = this.calculate(19) + 30
      }
    },
    calculate (item) {
      if (this.$refs['card0'] && this.$refs['card0'].$el) {
        let result = 311 + this.$refs['card0'].$el.clientHeight
        if (item === 0) return result
        return Object.keys(this.$refs)
          .slice(1, item + 1)
          .reduce((pre, next) => {
            return pre + this.$refs[next][0].$el.clientHeight
          }, result)
      }
    },
    throttle (fn, time) {
      let pre = 0
      return function () {
        let now = Date.now()
        if (now - pre > time) {
          fn.call(this, arguments)
          pre = now
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-width: 1200px;
  background-color: #fff;
  padding-bottom: 50px;
}

.tac {
  width: 1200px;
  margin: 20px auto 0;
  padding-bottom: 20px;
  padding-left: 200px;
  position: relative;
}

.el-right {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: -10px;
}
</style>
