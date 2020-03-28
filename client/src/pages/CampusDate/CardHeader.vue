<template>
  <div class="header">
    <img
      class="img"
      :src="companyImgUrl"
    >
    <div class="company">
      <div class="name">{{companyName}} 2020校招</div>
      <!-- <div
        class="home"
        @click.stop="jumpToCompany('company')"
      > -->
        <!-- <img :src="home">
        <span>公司主页</span> -->
      <!-- </div> -->
      <!-- <div class="follow">+ 关注</div> -->
      <div class="campus">
        <span class="title">官网地址：</span>
        <span
          class="url"
          @click="toCampus(campusUrl)"
        >{{campusUrl}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import home from '@/assets/home.png'

export default {
  props: ['companyName', 'companyImgUrl', 'campusUrl'],
  data () {
    return {
      home
    }
  },
  methods: {
    jumpToCompany (path) {
      this.$router.push({
        path
      })
    },
    toCampus (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 25px;
  margin: 13px 0 10px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: #fff;

  .img {
    width: 60px;
    height: 60px;
    margin-right: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

  .company {
    display: flex;
    align-items: center;
    width: 850px;

    .name {
      font-weight: 700;
      font-size: 22px;
      margin-right: 20px;
      flex: 1;
    }

    .home {
      color: #333333;
      padding: 0 10px;
      border-right: 1px solid #4e4e4e;
      font-size: 14px;
      line-height: 13px;
      display: flex;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        color: #25bb9b;
      }

      img {
        width: 14px;
        height: 14px;
        margin-right: 3px;
      }
    }
  }

  .follow {
    color: #25bb9b;
    font-size: 14px;
    cursor: pointer;
  }
}

.campus {
  cursor: pointer;
  .title {
    cursor: text;
    user-select: text;
  }
  .url {
    user-select: text;
    color: #25bb9b;
  }
}
</style>
