<template>
  <div class="main">
    <div class="contant">
      <div class="contant-img" @click="backTop">
        <img src="../assets/top.png">
      </div>
      <div class="contant-img qq">
        <el-popover
          placement="left"
          width="160"
          trigger="hover">
          <div class="popover-qq">
            <img src="../assets/qq1.jpg">
            <span>有系统问题,加我qq哦~</span>
          </div>
          <img src="../assets/qq.png" slot="reference">
        </el-popover>
      </div>
      <div class="contant-img">
        <el-popover
          placement="left"
          width="160"
          trigger="hover">
          <div class="popover-qq">
            <img src="../assets/weixin.jpg">
            <span>有系统问题,加我微信哦~</span>
          </div>
          <img src="../assets/weixin.png" slot="reference">
        </el-popover>
      </div>
      <div class="contant-img email">
        <el-popover
          placement="left"
          width="180"
          trigger="hover">
          <div class="popover-qq">
            <span>1585171898@qq.com</span>
            <span>有系统问题,可发我邮箱哦~</span>
          </div>
          <img src="../assets/email.png" slot="reference">
        </el-popover>
      </div>
      <div class="contant-img">
        <el-popover
          placement="left"
          width="180"
          trigger="hover">
          <div class="popover-qq">
            <span>电话：18792566635</span>
            <span>有系统问题,可拨打电话哦~</span>
          </div>
          <img src="../assets/phone.png" slot="reference">
        </el-popover>
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
  border: 2px solid #707070;
}
.contant-img img {
  width: 90%;
  height: 90%;
}
.qq, .email {
  margin: 5px 0;
}
.popover-qq {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.popover-qq img {
  width: 140px;
  height: 180px;
}
.popover-qq span {
  font-weight: bold;
}

</style>
