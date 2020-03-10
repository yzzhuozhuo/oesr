<template>
  <div class="header">
    <div class="wrap">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="campus-bread"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/jobPage' }">求职</el-breadcrumb-item>
        <el-breadcrumb-item>字节跳动</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="bottom">
        <img
          class="logo"
          src="https://uploadfiles.nowcoder.com/files/20191129/4107856_1575019807332_120x120-2.png"
        >
        <div class="name">
          <span>字节跳动</span>
          <div class="follow">+ 关注</div>
        </div>
        <div class="info">
          字节跳动成立于2012年3月，目前公司的产品和服务已覆盖全球150个国家和地区，75个语种
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.header {
  width: 100%;
  height: 280px;
  margin-top: 61px;
  margin-bottom: 25px;
  background-color: #f7edc3;

  .wrap {
    width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 15px 0;

    .campus-bread {
      line-height: 1.1;
    }

    .bottom {
      text-align: center;

      .logo {
        width: 120px;
        height: 120px;
      }

      .name {
        padding-top: 10px;
        span {
          color: #3d444c;
          font-size: 20px;
        }

        .follow {
          cursor: pointer;
          padding: 0 10px;
          width: 60px;
          box-sizing: border-box;
          border-radius: 4px;
          font-size: 12px;
          margin: 10px auto;
          line-height: 24px;
          height: 24px;
          color: #fff;
          background-color: #25bb9b;

          &:hover {
            background-color: #22ae90;
          }
        }
      }

      .info {
        color: #3d444c;
        font-size: 14px;
        padding-top: 5px;
      }
    }
  }
}
</style>
