<template>
  <div class="home">
    <swiper
      :swiperImgs="swiperImgs"
      :height="300"
    />
    <el-row class="tac">
      <left-menu />
      <div class="el-right">
        <right-card>
          <frist-card
            :professionData="professionData"
            :practiceCardData="practiceCardData"
          />
        </right-card>
        <right-card
          v-for="(item, index) in 10"
          :key="index"
        >
          <around-card :practiceCardData="practiceCardData" />
        </right-card>
        <right-card
          v-for="(item, index) in 3"
          :key="index"
        >
          <tb-card :firmCardData="firmCardData" />
        </right-card>
      </div>
    </el-row>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import LeftMenu from '@/components/LeftMenu'
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-width: 1200px;
  background-color: #fff;
}

.tac {
  width: 1200px;
  margin: 20px auto 0;
  padding-bottom: 20px;
}

.el-right {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: -10px;
}
</style>
