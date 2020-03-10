<template>
  <div class="card-wrap">
    <card-title titleName="笔试真题" />
    <div class="practice">
      <div
        class="practice-wrap"
        v-for="(item, index) in 2"
        :key="index"
      >
        <div class="left">
          <div>笔试套卷</div>
          <div class="num">共31套</div>
        </div>
        <div class="right">
          <div class="item">字节跳动2019春招研发部分编程题汇总</div>
          <div class="item">字节跳动2019春招研发部分编程题汇总</div>
          <div class="item">查看全部 ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'

export default {
  components: {
    CardTitle
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

  .practice {
    padding: 0 25px;
    display: flex;
    justify-content: space-between;

    &-wrap {
      width: 457px;
      height: 145px;
      background-color: #bfa;
      display: flex;

      .left {
        width: 150px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 50px;
        flex: 1;
        background-color: #f4f4f4;

        .num {
          font-size: 14px;
          color: #888;
        }
      }

      .right {
        font-size: 14px;
        background-color: #f0f0f0;

        .item {
          width: 292px;
          height: 47px;
          padding: 0 20px;
          line-height: 47px;
          box-sizing: border-box;
          border-bottom: 1px solid #fff;
          cursor: pointer;

          &:hover {
            background: #e5e5e5;
            color: #25bb9b;
          }

          &:nth-child(3) {
            border-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
