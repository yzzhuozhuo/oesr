<template>
  <div class="detail">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="detail-bread"
    >
      <el-breadcrumb-item :to="{ path: '/discussPage' }">讨论区</el-breadcrumb-item>
      <el-breadcrumb-item>春招补招</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="left">
        <div class="main">
          <content-header />
          <!-- 富文本 -->
          <comment :content="content" />
        </div>
        <reply-comment />
      </div>
      <div class="right">
        <div class="right-wrap">
          <card-title titleName="近期热帖" />
          <hot-discuss
            v-for="(item, index) in 18"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'
import HotDiscuss from '@/components/HotDiscuss'
import ContentHeader from './ContentHeader'
import Comment from './Comment'
import ReplyComment from './ReplyComment'

export default {
  name: 'DiscussDetail',
  components: {
    CardTitle,
    HotDiscuss,
    ContentHeader,
    Comment,
    ReplyComment
  },
  data () {
    return {
      content:
        '<div>  经历了2019的寒冬，2020的春招悄然而至 </div> <div>  年前对2020满怀憧憬的我们，年后却希望着2020能够重启！ </div> <div>  <br> </div> <div>  “错过了秋招等春招吧” </div> <div>  “金三银四再试试机会”…… </div> <div>  <br> </div> <div>  原本打算20年的春招努力翻盘，却撞上疫情来袭，线下面试、招聘会泡汤不算，求职机会也日益缩紧！ </div> <div>  <span style="color: rgb(26,26,26);">作为20届毕业生，错过金九银十青铜十一，如今受到疫情的影响……<strong>春招难道就真的没机会了吗？</strong></span><br> </div> <div>  <span style="color: rgb(26,26,26);"><br> </span>  </div> <h3>  不要担心！ </h3> <h3>  <strong>你还可以试试 </strong><strong><span style="color: rgb(229,51,51);">牛客2020届补招专场！</span></strong>  </h3> <div>  <strong><span style="color: rgb(229,51,51);"><br> </span></strong>  </div> <div>  30余家知名互联网企业，14个方向数百余岗位，等你投递！ </div> <div>  <span style="color: rgb(26,26,26);"><br> </span>  </div> <div>  <span style="color: rgb(26,26,26);"><img alt="" src="https://uploadfiles.nowcoder.com/images/20200213/999991342_1581579312274_FEE57D0A6D499BDEE26F375E7F00114F" style="height: auto;width: 822.0px;"><br> </span>  </div> <div>  <span style="color: rgb(26,26,26);"><br> </span>  </div> <h2>  <span style="color: rgb(26,26,26);">活动面向群体：</span>  </h2> <div>  <span style="color: rgb(26,26,26);">2020届应届毕业生</span>  </div> <div>  <span style="color: rgb(26,26,26);"><br> </span>  </div> <div> </div> <h3>  <span style="color: rgb(26,26,26);">2020补招专场交流：</span>  </h3> <div>  <span style="color: rgb(26,26,26);">   <table border="1" cellpadding="2" cellspacing="0">   <tbody>    <tr>     <td>      技术方向QQ群     </td>     <td>      <span style="color: rgb(26,26,26);">716210150</span><br>     </td>    </tr>    <tr>     <td>      非技术方向QQ群     </td>     <td>      <span style="color: rgb(26,26,26);">982581374</span><br>     </td>    </tr>   </tbody>  </table> </span>   <h4>   <span style="color: rgb(26,26,26);">欢迎加入<strong>2020补招进度交流圈</strong>，实时讨论投递进展！</span>   </h4>  <div>   <ul>    <li>     <span style="color: rgb(26,26,26);">2020补招进度交流圈：<a href="https://www.nowcoder.com/circle/c7c0db10/feed" target="_blank">https://www.nowcoder.com/circle/c7c0db10/feed</a></span>        </ul>  </div> </div> <div>  <span>活动会根据实际情况随时新增补招公司，届时会在圈子第一时间发布消息！快来加入吧~</span><br> </div> <div>  <span><br> </span>  </div> <h2>  如何投递？ </h2> <div>  <ul>   <li>    <strong>PC端投递链接：</strong><span><a href="https://www.nowcoder.com/activity/2020additionalRecruit/index" target="_blank">https://www.nowcoder.com/activity/2020additionalRecruit/index</a></span>       <li>    <strong>移动端投递链接：</strong><a href="https://m.nowcoder.com/activity/2020additionalRecruit/index" target="_blank">https://m.nowcoder.com/activity/2020additionalRecruit/index</a>      </ul> </div> <div>  <span style="color: rgb(229,51,51);"><span style="color: rgb(0,0,0);">▲ </span>2月14日0点开放投递！</span><span style="color: rgb(229,51,51);"><span>本页面会根据实际情况随时新增补招公司，请大家务必关注</span></span>  </div> <h3>  投递步骤： </h3> <div>  <span style="color: rgb(51,51,51);">选择你感兴趣的公司/职位，根据企业定制信息完善简历，一键投递即可！</span>  </div> <h3>  投递时间： </h3> <div>  2月14日0点 - 4月1日23:59 </div> <div>  <br> </div> <div>  —————————————————— </div> <div>  关于本活动，如有任何问题，可留言提问~ </div>'
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.detail {
  width: 1000px;
  margin: 0 auto;
  color: #333;

  &-bread {
    margin: 81px 0 5px;
    line-height: 1.1;
  }

  .content {
    width: 100%;
    margin: 8px auto 20px;
    display: flex;
    justify-content: space-between;

    .left {
      width: 685px;
      box-sizing: border-box;
      border-radius: 3px;

      .main {
        padding: 15px 0;
        background-color: #fff;
        box-sizing: border-box;
      }
    }

    .right {
      width: 300px;
      box-sizing: border-box;

      &-wrap {
        border: 1px solid #e0e0e0;
        background-color: #fff;
        padding: 15px 0;
      }
    }
  }
}
</style>
