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
      <div class="list" v-for="(item, index) in 5" :key="index">
        <img
          src=""
          class="img"
        >
        <div class="type">内推</div>
        <div class="date">2月-3月</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
  margin-right: 15px;
  margin-bottom: 20px;
  cursor: pointer;

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

    .list {
      @include flex-row;
      font-size: 12px;
      margin: 5px 0;

      .img {
        width: 10px;
        height: 10px;
        margin-right: 5px;
        background-color: #bfa;
      }

      .type {
        flex: 1;
        color: #1abc9c;
      }

      .date {
        color: #5e5d5d;
      }
    }
  }
}
</style>
