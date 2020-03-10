<template>
  <div class="card-wrap">
    <card-title titleName="招聘/内推消息汇总" />
    <div class="campus">
      <div
        class="campus-wrap"
        v-for="(item, index) in 6"
        :key="index"
      >
        <div class="title">
          <div class="name">客户端开发实习生【可转正】</div>
          <mark-type markData="实习" />
        </div>
        <div class="other">
          <div class="city">北京,上海,深圳</div>
          <div class="city">400-500元/天</div>
          <div class="city gongsi">字节跳动</div>
          <div class="time">22小时前</div>
        </div>
      </div>
    </div>
    <more />
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'
import MarkType from './MarkType'
import More from './More'

export default {
  components: {
    CardTitle,
    MarkType,
    More
  },
  data () {
    return {}
  },
  methods: {
    jumpToCompany (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrap {
  width: 1000px;
  padding: 25px 5px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  margin: 0 auto 10px;

  .campus {
    width: 950px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;

    &-wrap {
      width: 450px;
      height: 107px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      padding: 25px;
      box-sizing: border-box;
      margin: 0 8px 15px 8px;
      border: 1px solid #eee;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      }

      .title {
        height: 28px;
        font-size: 16px;
        color: #333;
        display: flex;

        .name {
          margin-right: 7px;
        }
      }

      .other {
        display: flex;
        font-size: 14px;
        color: #b4b4b4;
        margin-top: 10px;

        .city {
          margin-right: 20px;
        }

        .gongsi {
          flex: 1;
        }
      }
    }
  }
}
</style>
