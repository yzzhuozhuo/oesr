<template>
  <div class="wrap">
    <img
      src="https://uploadfiles.nowcoder.com/files/20160729/60_1469787222046_sougou.png"
      alt=""
    >
    <div class="content">
      <div class="head">
        <div class="name">搜狗</div>
        <div class="follow">+ 关注</div>
      </div>
      <card-bottom
        v-for="(item, index) in listInfo"
        :key="index"
        :listInfo="item"
      />
    </div>
  </div>
</template>

<script>
import CardBottom from './CardBottom'
import neitui from '@/assets/neitui.png'
import wangshen from '@/assets/wangshen.png'
import bishi from '@/assets/bishi.png'
import mianshi from '@/assets/mianshi.png'
import offer from '@/assets/offer.png'

export default {
  components: {
    CardBottom
  },
  data () {
    return {
      neitui,
      listInfo: [
        {
          img: neitui,
          type: '内推',
          date: '2月-3月'
        },
        {
          img: wangshen,
          type: '网申',
          date: '2月-3月'
        },
        {
          img: bishi,
          type: '笔试',
          date: ''
        },
        {
          img: mianshi,
          type: '面试',
          date: '3月-4月'
        },
        {
          img: offer,
          type: 'offer',
          date: '3月-5月'
        }
      ]
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@mixin flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.wrap {
  width: 217px;
  border: 1px solid #eaeaea;
  margin: 0 7px;
  margin-bottom: 20px;
  cursor: pointer;
  // display: inline-block;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 217px;
    height: 144px;
  }

  .content {
    width: 197px;
    height: 140px;
    box-sizing: border-box;
    margin: 8px auto;

    .head {
      @include flex-row;
      justify-content: space-between;
      margin-bottom: 8px;

      .name {
        color: #2c2c2c;
        font-weight: bold;
      }

      .follow {
        border-radius: 16px;
        line-height: 18px;
        height: 18px;
        padding: 1px 6px;
        font-size: 12px;
        background-color: #25bb9b;
        color: #fff;
      }
    }
  }
}
</style>
