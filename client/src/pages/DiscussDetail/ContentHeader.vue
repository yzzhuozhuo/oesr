<template>
  <div class="head">
    <div class="title">
      <img :src="comment">
      <span>2020届补招专场｜春招补招，抓住上岸翻盘的最后机会！</span>
    </div>
    <div class="user">
      <img
        src="https://images.nowcoder.com/images/20200221/999991342_1582251610228_6D9DCA1EE42757CAD66E3EA71709F9B8?x-oss-process=image/resize,m_mfit,h_100,w_100"
        alt=""
      >
      <div class="info">
        <div class="info-top">大大大菠萝</div>
        <div class="info-bottom">
          <div class="date">编辑于 2020-02-29 11:34:00</div>
          <div class="like">
            <span>赞 18</span>|
            <span>收藏 166</span>|
            <span>回复14</span>|
            <span>浏览42357</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comment from '@/assets/comment.png'

export default {
  props: [''],
  data () {
    return {
      comment
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.head {
  height: 130px;
  box-sizing: border-box;
  padding: 10px 20px 20px;
  border-bottom: 1px solid #ddd;

  .title {
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      vertical-align: middle;
    }

    span {
      vertical-align: middle;
    }
  }

  .user {
    margin-top: 25px;
    display: flex;
    font-size: 13px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
      cursor: pointer;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 0;

      &-top {
        color: #f34c54;
        cursor: pointer;
      }

      &-bottom {
        width: 588px;
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 12px;

        .like {
          cursor: pointer;

          span {
            margin: 0 8px;
          }
        }
      }
    }
  }
}
</style>
