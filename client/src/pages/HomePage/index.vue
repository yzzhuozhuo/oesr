<template>
  <div class="home">
    <swiper
      :swiperImgs="swiperImgs"
      :height="300"
    />
    <el-row class="tac">
      <left-menu
        :menus="menus"
        :fixed="fixed"
        :active="active"
        :handleOpen="handleOpen"
      />
      <div class="el-right">
        <right-card
          ref="card0"
          :title="menus[0].subMenu[0]"
        >
          <frist-card
            :professionData="professionData"
            :practiceCardData="practiceCardData"
          />
        </right-card>
        <right-card
          v-for="(item, index) in menus[0].subMenu.slice(1)"
          :ref="`card${index + 1}`"
          :key="index + Math.random()"
          :title="item"
        >
          <around-card :practiceCardData="practiceCardData" />
        </right-card>
        <right-card
          v-for="(item, index) in menus[1].subMenu"
          :ref="`card${index + 7}`"
          :key="index + Math.random()"
          :title="item"
        >
          <around-card :practiceCardData="practiceCardData" />
        </right-card>
        <right-card
          v-for="(item, index) in menus[2].subMenu"
          :ref="`card${index + 13}`"
          :key="index + Math.random()"
          :title="item"
        >
          <around-card :practiceCardData="practiceCardData" />
        </right-card>
        <right-card
          v-for="(item, index) in menus[3].subMenu"
          :ref="`card${index + 17}`"
          :key="index + Math.random()"
          :title="item"
        >
          <tb-card :firmCardData="firmCardData" />
        </right-card>
      </div>
    </el-row>
  </div>
</template>

<script>
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
        'https://uploadfiles.nowcoder.com/images/20191115/999991356_1573804506330_D82683B3C229BEDC46B1799DE6AD7969',
        'https://uploadfiles.nowcoder.com/images/20191217/4107856_1576563101119_5B4556E89C61A892801B88376C6D7D72',
        'https://uploadfiles.nowcoder.com/images/20200215/999991342_1581772325727_E3CB95122AE9DC62348FC2AF4779F8F6',
        'https://uploadfiles.nowcoder.com/images/20191030/8030387_1572425880113_685F76A8B66169663137EEB61BFB05E8',
        'https://uploadfiles.nowcoder.com/images/20200227/999991356_1582784877799_412F57578E7D9C9A7D523D8022845B1A'
      ],
      professionData: [
        {
          jumpUrl: 'https:www.baidu.com',
          name: 'Java工程师能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573270956405_8A9C8878206EDC89EA273AF6F4418EA6'
        },
        {
          jumpUrl: 'https:www.baidu.com',
          name: 'C/C++工程师能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573270962275_C9C7E65E981906B5E63EAEBF16B1D934'
        },
        {
          jumpUrl: 'https:www.baidu.com',
          name: '前端工程师能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573270970017_1675FC0467AA1E05F959D7EA84D5CD04'
        },
        {
          jumpUrl: 'https:www.baidu.com',
          name: '算法工程师能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573270982162_AB01B3F9FAB7041C502A7024BD12462D'
        },
        {
          jumpUrl: 'https:www.baidu.com',
          name: '运维工程师能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573270991126_23230194E64FD17881C425D8A8B2282E'
        },
        {
          jumpUrl: 'https:www.baidu.com',
          name: '测试工程师能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573270996663_11FF950FE370A5351306402006DF24FE'
        },
        {
          jumpUrl: 'https:www.baidu.com',
          name: '产品经理能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573271001211_28AD21DEB4E7FBD7B88929B1D630DCC7'
        },
        {
          jumpUrl: 'https:www.baidu.com',
          name: '运营岗位能力评估',
          img:
            'https://uploadfiles.nowcoder.com/images/20191109/59_1573271006463_C436A093EFFBCEECD0B94F6558875999'
        }
      ],
      firmCardData: [
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        },
        {
          img:
            'https://uploadfiles.nowcoder.com/images/20190805/63_1564993260338_EECFBE326B5E8E2392FD049E3A854966',
          name: '名企内推',
          intr: '名企实习、校招、社招'
        }
      ],
      practiceCardData: [
        {
          name: '计算机',
          intr: '语言/算法/数据结构等基础训练'
        },
        {
          name: '计算机',
          intr: '语言/算法/数据结构等基础训练'
        },
        {
          name: '计算机',
          intr: '语言/算法/数据结构等基础训练'
        },
        {
          name: '计算机',
          intr: '语言/算法/数据结构等基础训练'
        },
        {
          name: '计算机',
          intr: '语言/算法/数据结构等基础训练'
        },
        {
          name: '计算机',
          intr: '语言/算法/数据结构等基础训练'
        }
      ],
      menus: [
        {
          icon: 'location',
          name: '求职必备',
          subMenu: [
            '笔试备战',
            '面试备战',
            '课程推荐',
            '项目推荐',
            '网申内推',
            '书籍推荐',
            '常用工具'
          ]
        },
        {
          icon: 'document',
          name: '基础提升',
          subMenu: [
            '实用题库',
            '编程入门',
            '考试通关',
            '课程推荐',
            '入门项目',
            '职业规划'
          ]
        },
        {
          icon: 'menu',
          name: '工作技能',
          subMenu: ['新人培训', '社招面试', '职场经验', '常用工具']
        },
        {
          icon: 'setting',
          name: '寻找组织',
          subMenu: ['求职备战', '学习知识', '职场交流', '生活交友']
        }
      ],
      fixed: false,
      height: 0,
      active: '1-1'
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.throttle(this.handleScroll, 100))
    })
  },
  methods: {
    handleScroll () {
      let scrollY = document.documentElement.scrollTop
      if (scrollY > 361) {
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
      let result = 311 + this.$refs['card0'].$el.clientHeight
      if (item === 0) return result
      return Object.keys(this.$refs)
        .slice(1, item + 1)
        .reduce((pre, next) => {
          return pre + this.$refs[next][0].$el.clientHeight
        }, result)
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
