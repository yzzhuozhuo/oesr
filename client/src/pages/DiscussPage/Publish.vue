<template>
  <div class="publish">
    <div
      class="publish-new common"
      :class="active === 0 ? 'active' : 'nomal'"
      @click.stop="checkout(0)"
    >最新发表</div>
    <div
      class="publish-hot common"
      :class="active === 1 ? 'active' : 'nomal'"
      @click.stop="checkout(1)"
    >最热发表</div>
  </div>
</template>

<script>
export default {
  props: [''],
  data () {
    return {
      active: 0
    }
  },
  methods: {
    checkout (active) {
      this.active = active
    }
  }
}
</script>

<style lang="scss" scoped>
.publish {
  font-size: 14px;
  display: flex;
  box-sizing: border-box;
  padding: 10px;

  .common {
    padding: 0 10px;
    cursor: pointer;
  }
  .active {
    color: #25bb9b;
  }
  .nomal {
    color: #888;
  }
}
</style>
