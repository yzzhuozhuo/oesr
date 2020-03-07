<template>
  <div class="logo">
    <div class="logo1 logo0">腾讯</div>
    <div class="logo2 logo0">字节跳动</div>
    <div class="logo3 logo0">百度</div>
    <div class="logo4 logo0">京东</div>
    <div class="logo5 logo0">网易</div>
    <div class="logo6 logo0">美团</div>
    <div class="logo7 logo0">99+</div>
  </div>
</template>

<script>
export default {
  props: ['logoData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}

.logo0 {
  width: 120px;
  height: 120px;
  /* background-color: #bfa; */
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 5px;
  text-align: center;
  line-height: 120px;
  cursor: pointer;
  text-indent: -999em;
  transform: scale(0.7);
  background-image: url('../assets/biglogo.png');
}

.logo1 {
  background-position: -1430px -520px;
}

.logo1:hover {
  background-position: -1430px -650px;
}

.logo2 {
  background-position: -1691px -519px;
}

.logo2:hover {
  background-position: -1690px -650px;
}

.logo3 {
  /* background-position: 0 0; */
}

.logo3:hover {
  background-position: 0 -130px;
}

.logo4 {
  background-position: 0 -520px;
}

.logo4:hover {
  background-position: 0 -650px;
}

.logo5 {
  background-position: -1820px 0;
}

.logo5:hover {
  background-position: -1820px -130px;
}

.logo6 {
  background-position: -650px 0;
}

.logo6:hover {
  background-position: -650px -130px;
}

.logo7 {
  background-image: url('');
  border: 3px solid #9b9b9b;
  border-radius: 50%;
  color: #9b9b9b;
  text-indent: -0;
  font-size: 26px;
}

.logo7:hover {
  background-position: -650px -130px;
  background-color: #9b9b9b;
  color: #fff;
}
</style>
