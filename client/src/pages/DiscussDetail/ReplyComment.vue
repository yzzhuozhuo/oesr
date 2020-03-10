<template>
  <div class="replay">
    <card-title titleName="14条回帖" />
    <div class="btn">回帖</div>
    <div class="tie">
      <div
        class="tie-item"
        v-for="(item, index) in 10"
        :key="index"
      >
        <img
          src="https://images.nowcoder.com/images/20200221/999991342_1582251610228_6D9DCA1EE42757CAD66E3EA71709F9B8?x-oss-process=image/resize,m_mfit,h_100,w_100"
          alt=""
        >
        <div class="content">
          <div class="info">
            <div class="top">
              <div class="name">大大大菠萝</div>
              <div class="zhu">楼主</div>
              <div class="lou">{{index + 1}}#</div>
            </div>
            <div class="middle">情人节！2月14日0点开始投递！祝大家情人节快乐哈😊</div>
            <div class="time">
              <div class="fabiao">发表于 2020-02-13 18:52:28</div>
              <div class="fenxiang">
                <span>分享</span>
                <span>赞(1)</span>
                <span>回复(0)</span>
              </div>
            </div>
          </div>
        </div>
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
  props: [''],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.replay {
  box-sizing: border-box;
  padding: 20px 0 0;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  position: relative;

  .btn {
    position: absolute;
    right: 20px;
    top: 15px;
    text-align: center;
    padding: 10px 0;
    width: 110px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    background-color: #25bb9b;

    &:hover {
      background-color: #22ae90;
    }
  }

  .tie {
    padding: 20px;
    box-sizing: border-box;

    &-item {
      min-height: 76px;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      display: flex;

      &:last-child {
        border-bottom: 0;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
        cursor: pointer;
      }

      .content {
        width: 595px;
        .info {
          .top {
            display: flex;
            align-items: center;
            font-size: 12px;

            .name {
              // font-size: 13px;
              color: #f34c54;
              margin-right: 10px;
            }

            .zhu {
              border-radius: 2px;
              margin-right: 2px;
              box-sizing: border-box;
              color: #999;
              flex: 1;
            }

            .lou {
              padding: 1px 12px;
              border-radius: 3px;
              color: #fff;
              font-size: 14px;
              background: #dcdadc;
            }
          }

          .time {
            display: flex;
            align-items: center;
          }
        }

        .middle {
          font-size: 14px;
          margin: 5px 0 10px;
        }

        .time {
          color: #999;
          font-size: 12px;
          display: flex;
          justify-content: space-between;

          .fenxiang {
            color: #21a88b;
            span {
              margin-left: 12px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
