<template>
  <div
    class="wrap"
    @click.stop="jump"
  >
    <img :src="campusDate && campusDate.coverImg">
    <div class="content">
      <div class="head">
        <div class="name">{{campusDate && campusDate.companyName}}</div>
        <div
          class="follow"
          :class="isFollow ? 'active' : 'nomal'"
          @click.stop="handleFollow"
        >{{isFollow ? '已关注' : '+ 关注'}}</div>
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
  props: ['campusDate', 'followCampus', 'followItem'],
  data () {
    return {
      listInfo: [
        {
          img: neitui,
          type: '内推',
          date: this.campusDate && this.campusDate.timeTable.neitui
        },
        {
          img: wangshen,
          type: '网申',
          date: this.campusDate && this.campusDate.timeTable.wangshen
        },
        {
          img: bishi,
          type: '笔试',
          date: this.campusDate && this.campusDate.timeTable.bishi
        },
        {
          img: mianshi,
          type: '面试',
          date: this.campusDate && this.campusDate.timeTable.mianshi
        },
        {
          img: offer,
          type: 'offer',
          date: this.campusDate && this.campusDate.timeTable.offer
        }
      ],
      isFollow: false
    }
  },
  mounted () {
    const isFollow =
      this.followCampus && this.followCampus.includes(this.campusDate._id)
    this.isFollow = !!isFollow
  },
  methods: {
    jump () {
      this.$router.push({
        path: 'campusDate',
        query: {
          id: this.campusDate._id
        }
      })
    },
    handleFollow () {
      if (!this.isFollow) {
        this.$emit('followItem', this.campusDate._id)
      } else {
        this.$emit('unfollowItem', this.campusDate._id)
      }
      this.isFollow = !this.isFollow
    }
  }
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
      }

      .active {
        background-color: #25bb9b;
        color: #fff;
      }

      .nomal {
        background-color: #fff;
        color: #25bb9b;
        font-size: 13px;
      }
    }
  }
}
</style>
