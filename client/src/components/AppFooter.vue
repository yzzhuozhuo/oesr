<template>
  <div class="footer" ref="footer">
    <div class="footer-content">
      <div class="footer-question">
        <img class="footer-img" src="../assets/1.png">
        <div class="footer-content-center-div">题库</div>
        <div class="footer-content-last-div">聚集海量各大名企的校招试题</div>
      </div>
      <div class="footer-learn">
        <img class="footer-img" src="../assets/2.png">
        <div class="footer-content-center-div">学习</div>
        <div class="footer-content-last-div">提供各大岗位面试相关的学习资料</div>
      </div>
      <div class="footer-job">
        <img class="footer-img" src="../assets/3.png">
        <div class="footer-content-center-div">求职</div>
        <div class="footer-content-last-div">提供各大名企的校招动态</div>
      </div>
      <div class="footer-discuss">
        <img class="footer-img" src="../assets/4.png">
        <div class="footer-content-center-div">讨论区</div>
        <div class="footer-content-last-div">可以分享学习、招聘体验</div>
      </div>
    </div>
    <div class="footer-item">oesr @2020</div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  font-size: 14px;
  padding: 30px;
  /* height: 100px; */
  text-align: center;
  color: #2c2c2c;
  background-color: rgba(0, 0, 0, 0.5)
  /* background-color: #2a2f35; */
}
.footer-content {
  display: flex;
  text-align: center;
  justify-content: space-around;
  font-size: 20px;
}
.footer-img {
  width: 34px;
  height: 34px;
}
.footer-content-center-div {
  padding: 20px 0 20px;
  font-size: 15px;
  font-weight: bold;
}
.footer-content-last-div {
  font-size: 15px;
  line-height: 24px;
  font-weight: bold;
}
.footer-item {
  font-size: 15px;
  margin-top: 20px;
}
</style>
