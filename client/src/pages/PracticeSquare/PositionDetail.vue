<template>
  <div class="main">
    <div class="title">
      <span>实习首页 > 蚂蚁金服</span>
    </div>
    <div class="card-content">
      <div class="card-left">
        <div class="position-title">
          <div class="point"></div>
          <span>职位详情</span>
        </div>
        <div class="content">
          <div class="introduce">
            <div class="header">
              <div class="introduce-title">蚂蚁金服-2021春招-研发岗</div>
              <div class="icon">研发 北京,上海,广州,深圳,杭州</div>
              <div class="info">薪酬：面议  |  实习要求：5天/周，3个月以上  |  转正机会：有</div>
            </div>
            <div class="section">
              <div class="duty">
                <div class="duty-title">
                  <span>岗位职责</span>
                </div>
                <div>- 负责国际事业群业务线开发，包括全球各地钱包</div>
                <div>- 业务实体包括：Alipay HK、Paytm、TNG、MYNT等</div>
                <div>- 将我们的技术输出到全球，创造无限的可能</div>
                <div>- 专注国际业务，致力于通过世界一流的全球化技术惠普全球消费者</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-right">
        右边部分
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PositionDetail',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  display: flex;
  flex-flow: column;
  padding: 15px 0;

  .title {
    margin: 0 170px 10px;
    font-size: 15px;
    color: #999;
  }

  .card-content {
    display: flex;
    justify-content: center;

    .card-left {
      background: #fff;
      border: 1px solid #e0e0e0;
      width: 668px;
      margin-right: 10px;
      padding: 15px;

      .position-title {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: bold;

        .point {
          background: #ff6547;
          content: "";
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 5px;
          margin-bottom: 2px;
          vertical-align: middle;
        }
      }

      .content {
        display: flex;
        justify-content: center;

        .introduce {
          border: 1px solid #e0e0e0;
          width: 648px;
          padding: 20px;

          .header {
            padding-bottom: 26px;
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 20px;

            .introduce-title {
              font-size: 18px;
              font-weight: bold;
            }

            .icon {
              margin: 15px 0;
              font-size: 15px;
              color: #9a9a9a;
            }

            .info {
              font-size: 14px;
            }
          }
        }
      }
    }

    .card-right {
      background: #fff;
      border: 1px solid #e0e0e0;
      width: 298px;
    }
  }
}
</style>
