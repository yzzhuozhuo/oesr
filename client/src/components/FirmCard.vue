<template>
  <div class="bottom-wrap">
    <div class="bottom-item">
      <img
        class="bottom-item-left"
        :src="firmCardData.img"
      />
      <div class="bottom-item-right">
        <div class="bottom-item-right-name">{{firmCardData.name}}</div>
        <div class="bottom-item-right-intr">{{firmCardData.intr}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firmCardData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.bottom {
  &-wrap {
    display: inline-block;
  }

  &-item {
    width: 235px;
    height: 120px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      color: #25bb9b;
    }

    &-left {
      width: 75px;
      height: 75px;
      margin-right: 15px;
    }

    &-right {
      &-name {
        margin-bottom: 10px;
      }

      &-intr {
        color: #acacac;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 40px;
        font-size: 14px;
      }
    }
  }
}
</style>
