<template>
  <div class="card-wrap">
    <card-title titleName="面经汇总" />
    <div class="select-wrap">
      <div class="selector">
        <selector :selectList="disscussList" />
      </div>
    </div>
    <div class="comment-wrap">
      <div
        class="comment"
        v-for="(item, index) in 5"
        :key="index"
      >
        <img
          src="https://images.nowcoder.com/images/20200221/999991342_1582251610228_6D9DCA1EE42757CAD66E3EA71709F9B8?x-oss-process=image/resize,m_mfit,h_100,w_100"
          alt=""
        >
        <div class="main">
          <div class="comment-word">
            <span>字节跳动产品实习面经，Hr面50分钟，地狱级。</span>
            <mark-type
              v-for="(item, index) in markData"
              :key="index"
              :markData="item"
            />
          </div>
          <div class="info">
            <div class="info-left">
              <span class="info-left-name">大大大菠萝</span>
              <span class="info-left-date">2020-02-13</span>
              <span class="info-left-huifu">最后回复 1小时前</span>
            </div>
            <div class="info-right">回复14 | 赞18 | 浏览38953</div>
          </div>
        </div>
      </div>
      <more />
    </div>
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'
import Selector from '@/components/Selector'
import MarkType from './MarkType'
import More from './More'

export default {
  components: {
    CardTitle,
    Selector,
    MarkType,
    More
  },
  data () {
    return {
      disscussList: [
        '全部',
        'Java工程师',
        '算法工程师',
        '前端工程师',
        'Android工程师',
        'iOS工程师',
        'Python工程师',
        'C++工程师',
        'PHP工程师',
        '运维工程师',
        '测试工程师',
        '数据工程师',
        '游戏研发工程师',
        '硬件工程师',
        '信息安全工程师',
        '产品',
        '运营',
        '项目经理',
        '游戏类',
        '设计类',
        '市场职能类'
      ],
      markData: ['字节跳动', '春招', '实习']
    }
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
.card-wrap {
  width: 1000px;
  padding: 25px 5px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  margin: 0 auto 10px;

  .select-wrap {
    padding: 0 20px;
    .selector {
      background-color: #f5f5f5;
      padding: 7px 7px 5px;
    }
  }

  .comment-wrap {
    width: 100%;
    padding: 5px 20px;
    margin-top: 10px;
    box-sizing: border-box;
  }

  .comment {
    height: 80px;
    border-radius: 3px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;

    &:nth-child(5) {
      border-bottom: 0;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  .main {
    width: 900px;
    box-sizing: border-box;

    .comment-word {
      color: #333;
      font-size: 15px;

      span {
        margin-right: 10px;
      }

      &:hover {
        color: #4dbfae;
      }
    }

    .info {
      display: flex;
      font-size: 14px;
      color: #999999;
      justify-content: space-between;

      &-left {
        span {
          margin-right: 10px;
        }

        &-name {
          color: #42c1a2;
        }
      }
    }
  }
}
</style>
