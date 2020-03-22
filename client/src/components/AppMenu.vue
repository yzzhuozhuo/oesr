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
    <el-menu-item index='/' v-if="!hasLogin">首页</el-menu-item>
    <el-menu-item index='/questionPage' v-if="!hasLogin">题库</el-menu-item>
    <el-menu-item index='/learnPage' v-if="!hasLogin">学习</el-menu-item>
    <el-menu-item index="/jobPage" v-if="!hasLogin">求职</el-menu-item>
    <el-menu-item index="/discussPage" v-if="!hasLogin">讨论区</el-menu-item>
    <el-menu-item index='/' v-if="accountType === 'student'">首页</el-menu-item>
    <el-menu-item index='/questionPage' v-if="accountType === 'student'">题库</el-menu-item>
    <el-menu-item index='/learnPage' v-if="accountType === 'student'">学习</el-menu-item>
    <el-menu-item index="/jobPage" v-if="accountType === 'student'">求职</el-menu-item>
    <el-menu-item index="/discussPage" v-if="accountType === 'student'">讨论区</el-menu-item>
    <el-menu-item
      v-if="hasLogin"
      class="logoutBtn"
      @click="handleLogout()"
    >退出登陆</el-menu-item>
    <el-menu-item
      v-if="accountType === 'company'"
      index="/company/designTheme"
    >在线出题</el-menu-item>
    <el-menu-item
      v-if="accountType === 'company'"
      index="/practiceSquare"
    >职位发布</el-menu-item>
    <el-menu-item
      v-if="accountType === 'company'"
      index="/recruitSchedule"
    >校招日程发布</el-menu-item>
    <el-menu-item
      v-if="accountType === 'company'"
      index="/writeCalendar"
    >笔试日历发布</el-menu-item>
    <el-menu-item
      v-if="accountType === 'company'"
      index="/preachList"
    >宣讲会发布</el-menu-item>
    <el-menu-item index="/discussPage" v-if="accountType === 'company'">讨论区</el-menu-item>
    <el-menu-item
      v-if="hasLogin"
      style="float: right;"
      :index="toUserPage"
    >
      <img :src="avatar" style="width: 45px; border-radius: 50%">
    </el-menu-item>
    <el-menu-item
      v-if="!hasLogin"
      style="float: right"
      index="/login"
    >登录/注册</el-menu-item>
    <!-- <el-menu-item style="float: right">
      <el-input v-model="searchVal" class="searchInput" size="mini" placeholder="请输入试题、公司" prefix-icon="el-icon-search"></el-input>
    </el-menu-item> -->
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
      userInfo: state => state.student.studentList,
      companyInfo: state => state.company.companyList
    }),
    ...mapGetters(['hasLogin', 'accountType']),
    userName () {
      if (this.userInfo && this.accountType === 'student') {
        return this.userInfo.studentName
      } else if (this.companyInfo && this.accountType === 'company') {
        return this.companyInfo.companyName
      } else {
        return ''
      }
    },
    avatar () {
      if (this.userInfo && this.accountType === 'student') {
        return this.userInfo.studentImgUrl
      } else if (this.companyInfo && this.accountType === 'company') {
        return this.companyInfo.companyImgUrl
      } else {
        return ''
      }
    },
    toUserPage () {
      if (this.userInfo && this.accountType === 'student') {
        return '/userPage'
      } else if (this.companyInfo && this.accountType === 'company') {
        return '/company/page'
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions(['logout']),
    async handleLogout () {
      await this.logout()
      this.$router.replace({
        path: '/'
      })
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
/* .logoItem div {
  background-image: url('../assets/jobLogo.png')
} */
.searchInput .el-input__inner {
  color: #fff;
  background-color: #51575d;
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
