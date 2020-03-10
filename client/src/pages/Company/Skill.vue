<template>
  <div class="card-wrap">
    <card-title titleName="使用的技术/开发工具" />
    <div class="logo-wrap">
      <div
        class="logo"
        v-for="(item, index) in 10"
        :key="index"
      >
        <img src="https://images.nowcoder.com/images/20180629/0_1530258288809_85869D937298F4DD5B8A6A7B09AB43D0">
        <span>Java</span>
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

  .logo-wrap {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }

  .logo {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #333333;
    font-size: 14px;
    cursor: pointer;
    margin: 0 15px;

    &:hover {
      color: #25bb9b;
    }

    img {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;

      &:hover {
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
