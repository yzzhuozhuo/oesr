<template>
  <el-menu
    class="el-menu"
    mode="horizontal"
    router
    background-color="#3d444c"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="activeIndex"
  >
    <el-menu-item class="logoItem">
      <div>
        <!-- <img src="../assets/jobLogo.png"> -->
        <span>oesr</span>
      </div>
    </el-menu-item>
    <el-menu-item index='/'>首页</el-menu-item>
    <el-menu-item index='/questionPage'>题库</el-menu-item>
    <el-menu-item index='/learnPage'>学习</el-menu-item>
    <el-menu-item index="/jobPage">求职</el-menu-item>
    <el-menu-item index="/discussPage">讨论区</el-menu-item>
    <el-menu-item class="logoutBtn" @click="logout()">退出登陆</el-menu-item>
    <el-menu-item v-if="hasLogin" style="float: right">{{userInfo && userInfo.username}}</el-menu-item>
    <el-menu-item style="float: right">
      <el-input v-model="searchVal" class="searchInput" size="mini" placeholder="请输入试题、公司" prefix-icon="el-icon-search"></el-input>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      activeIndex: this.$route.path,
      searchVal: ''
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user
    }),
    ...mapGetters(['hasLogin'])
  },
  mounted () {
    this.fetchUserInfo()
  },
  methods: {
    ...mapActions(['fetchUserInfo']),
    logout () {
      console.log('退出登录')
    }
  }
}
</script>

<style scoped>
.logoItem {
  /* margin-left: 150px; */
  width: 100px;
}
.logoItem img {
  width: 60%;
}
.logoItem div {
  /* background-image: url('../assets/jobLogo.png') */
}
.searchInput .el-input__inner {
  color: #fff;
  background-color: #51575D;
}
.logoutBtn {
  float: right;
  /* margin-right: 150px; */
}
.el-menu {
  position: fixed;
  width: 100%;
  z-index: 1001;
}
</style>
