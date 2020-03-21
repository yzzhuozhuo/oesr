<template>
  <div class="comment-wrap">
    <div
      class="comment"
      v-for="(discuss, index) in discussList"
      :key="index"
    >
      <img :src="discuss.user.avatar">
      <div class="main">
        <div
          class="comment-word"
          @click="jump(discuss)"
        >
          {{discuss.title}}
        </div>
        <mark-type
          v-for="(item, index) in discuss.mark"
          :key="index"
          :markData="item"
        />
        <div class="info">
          <div class="info-left">{{discuss.user.name}}</div>
          <div class="info-mid">{{formatTime(discuss.createAt)}}</div>
          <div class="info-right">发表在 【{{discuss.classify.name}}】</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkType from './MarkType'
import moment from 'moment'

export default {
  components: {
    MarkType
  },
  props: ['discussList'],
  data () {
    return {}
  },
  methods: {
    formatTime (time) {
      return moment(time).format('YYYY-MM-DD')
    },
    jump (discuss) {
      this.$router.push({
        path: 'discussDetail',
        query: {
          id: discuss._id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-wrap {
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  box-sizing: border-box;

  .comment {
    height: 113px;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .main {
      width: 570px;
      box-sizing: border-box;

      .comment-word {
        margin-bottom: 7px;
        cursor: pointer;

        &:hover {
          color: #4dbfae;
        }
      }

      .info {
        display: flex;
        font-size: 12px;
        color: #999999;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        height: 20px;
        line-height: 20px;

        &-mid {
          margin-left: 10px;
          flex: 1;
        }

        &-left {
          cursor: pointer;
        }
      }
    }

    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
