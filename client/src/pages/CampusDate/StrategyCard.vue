<template>
  <div class="strategy">
    <div class="title">
      <div class="point"></div>
      <div class="name">笔经面经</div>
      <div class="num">1505条</div>
    </div>
    <div class="strategy-content">【字节跳动】【春招】【内推】【国际化部门直推】</div>
    <div class="strategy-content">【字节跳动】核心部门直推，快速通道，快速约面，速拿offer</div>
    <div class="strategy-content">【字节跳动】国际化部门直推，在家面试</div>
    <div class="strategy-content">【字节跳动 闪电实习招募】已内推8000人，有转正机会无笔试</div>
    <div class="more">查看全部 ></div>
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'

export default {
  components: {
    CardTitle
  },
  props: ['plans'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.strategy {
  width: 430px;
  display: inline-block;
  margin: 0 23px 30px;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 13px;

    .point {
      width: 4px;
      height: 14px;
      margin-right: 5px;
      background-color: #25bb9b;
    }

    .name {
      flex: 1;
    }

    .num {
      color: #888;
      font-size: 14px;
    }
  }

  &-content {
    font-size: 14px;
    margin: 7px 0;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background: #f8f8f8;
    }
  }

  .more {
    cursor: pointer;
    padding: 5px 10px;
    color: #25bb9b;
    font-size: 14px;
  }
}
</style>
