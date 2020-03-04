<template>
  <div class="main">
    <div class="contant">
      <div class="contant-img" @click="backTop">
        <img src="../assets/top.png">
      </div>
      <div class="contant-img qq" @mouseover="showQQ">
        <img src="../assets/qq.png">
      </div>
      <div class="contant-img" @mouseover="showWeixin">
        <img src="../assets/weixin.png">
      </div>
      <div class="contant-img email" @mouseover="showEmail">
        <img src="../assets/email.png">
      </div>
      <div class="contant-img" @mouseover="showPhone">
        <img src="../assets/phone.png">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppSidebar',
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    backTop () {
      console.log('ooooooooooooooooo')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    showQQ () {
      console.log('qq')
    },
    showWeixin () {
      console.log('weixin')
    },
    showEmail () {
      console.log('email')
    },
    showPhone () {
      console.log('phone')
    }
  }
}
</script>

<style scoped>
.contant {
  position: fixed;
  z-index: 999;
  right: 10px;
  bottom: 220px;
  zoom: 1;
}
.contant-img {
  width: 25px;
  height: 25px;
  border: 2px solid #d6d6d6;
  border-radius: 10%;
  padding: 5px;
  background: #fff;
  cursor: pointer;
}
.contant-img:hover {
  border: 2px solid rgb(76, 0, 255);
}
.contant-img img {
  width: 90%;
  height: 90%;
}
.qq, .email {
  margin: 5px 0;
}
</style>
