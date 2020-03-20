<template>
  <div class="head">
    <div class="title">
      <img :src="comment">
      <span>{{title}}</span>
    </div>
    <div class="user">
      <img :src="user.avatar">
      <div class="info">
        <div class="info-top">{{user.name}}</div>
        <div class="info-bottom">
          <div class="date">编辑于 {{createAt}}</div>
          <!-- <div class="like">
            <span>赞 18</span>|
            <span>收藏 166</span>|
            <span>回复14</span>|
            <span>浏览42357</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comment from '@/assets/comment.png'

export default {
  props: ['createAt', 'title', 'user'],
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
