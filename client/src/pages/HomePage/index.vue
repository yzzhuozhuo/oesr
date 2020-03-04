<template>
  <div class="home">
    <swiper :swiperImgs="swiperImgs" />
    <el-row class="tac">
      <left-menu />
      <div class="el-right">
        <div class="write-test">
          <div class="title">笔试备战</div>
          <div>
            <div class="title-name">职业能力评测</div>
            <div class="test-card">
              <profession-card
                v-for="(item, index) in professionData.slice(0, 4)"
                :key="index"
                :professionData="item"
              />
            </div>
            <div class="test-card">
              <profession-card
                v-for="(item, index) in professionData.slice(4, 8)"
                :key="index"
                :professionData="item"
              />
            </div>
          </div>
          <div>
            <div class="title-name">名企真题</div>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import LeftMenu from '@/components/LeftMenu'
import ProfessionCard from '@/components/ProfessionCard'

export default {
  name: 'Home',
  components: {
    Swiper,
    LeftMenu,
    ProfessionCard
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
      ]
    }
  }
}
</script>

<style scoped>
.home {
  min-width: 1200px;
  background-color: #fff;
}

.tac {
  width: 1200px;
  margin: 20px auto;
}

.el-right {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
}

.write-test {
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.title {
  color: #4dbfae;
  font-size: 18px;
}

.title-name {
  margin-top: 20px;
}

.test-card {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
