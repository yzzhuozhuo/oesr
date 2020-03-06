<template>
  <div class="main">
    <div class="main-content">
      <el-container>
        <el-header height="100%">
          <div class="header-content" v-for="(item, index) in userInfo" :key="index">
            <div class="avatar">
              <img :src="item.avatar">
            </div>
            <div class="info">
              <div class="info-top">
                <div class="username">{{item.username}}</div>
                <i v-if="item.sex === 'male'" class="el-icon-male" style="color: blue"></i>
                <i v-else class="el-icon-female" style="color: red"></i>
                <div class="introduction">{{item.introduction}}</div>
              </div>
              <div class="info-bottom">
                <div>
                  <i class="el-icon-location"></i>
                  <span>{{item.address}}</span>
                </div>
                <div class="center-item">
                  <i class="el-icon-suitcase"></i>
                  <span>{{item.loveCompany}}</span>
                </div>
                <div>
                  <i class="el-icon-school"></i>
                  <span>{{item.school}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <div class="aside-content">
              <el-row class="tac">
                <el-col :span="12">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>编辑信息</span>
                      </template>
                    </el-submenu>
                    <el-submenu index="2">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>简历上传</span>
                      </template>
                    </el-submenu>
                    <el-submenu index="3">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>登录设置</span>
                      </template>
                    </el-submenu>
                    <el-submenu index="4">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>退出登录</span>
                      </template>
                    </el-submenu>
                  </el-menu>
                </el-col>
              </el-row>
            </div>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserPage',
  data () {
    return {
      userInfo: [
        {
          username: '前端小菜猪~',
          avatar: 'https://images.nowcoder.com/images/20190928/638373518_1569674550437_27E42C56E73D70CBE3050C38883E4E56?x-oss-process=image/resize,m_mfit,h_200,w_200',
          sex: 'female',
          introduction: '我热爱前端，想要找个可以学习的平台',
          address: '陕西西安',
          graduateTime: '2020',
          education: '本科',
          school: '西安科技大学',
          loveCompany: '网易',
          interestedClassify: 'software',
          interestedPost: '前端工程师'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(111, key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
}

.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  margin: 10px 0;
  padding: 16px;
}

.el-aside {
  background: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  margin-right: 10px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-col-12 {
  width: 170px;
}

.el-menu {
  border-right: none;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  .main-content {
    width: 65%;
    margin-bottom: 20px;
    .header-content {
      display: flex;
      align-items: center;
      .avatar {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }
      .avatar img {
        width: 100%;
        border-radius: 50%;
      }
      .info {
        .info-top, .info-bottom {
          display: flex;
          align-content: center;
          align-items: center;
        }
        .info-top {
          margin-bottom: 10px;
        }
        .info-top i {
          margin: 0 20px 0 5px;
        }
        .info-top .introduction {
          background: #ebebeb;
          padding: 5px;
          font-size: 14px;
        }
        .info-top .username {
          color: #42c1a2;
        }
        .info-bottom {
          font-size: 14px;
        }
        .info-bottom .center-item {
          margin: 0 10px;
        }
      }
    }
  }
}

.aside-content {
  display: flex;
  align-items: center;
}
</style>
