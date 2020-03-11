<template>
  <el-col
    :class="fixed ? 'fixed' : 'absolute'"
    :span="4"
  >
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      text-color="#888"
      active-text-color="#25bb9b"
      :unique-opened="true"
    >
      <el-submenu
        v-for="(menu, index) in menus"
        :key="index"
        :index="`${index + 1}`"
      >
        <template slot="title">
          <i :class="`el-icon-${menu.icon}`"></i>
          <span>{{menu.name}}</span>
        </template>
        <el-menu-item
          v-for="(item, indexItem) in menu.subMenu"
          :key="indexItem"
          :index="`${index + 1}-${indexItem + 1}`"
          @click="handleOpen(`${index + 1}-${indexItem + 1}`)"
        >{{item}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  props: ['menus', 'fixed', 'active', 'handleOpen'],
  methods: {},
  mounted () {
    // handleOpen(this.active)
  }
}
</script>

<style lang="scss" scoped>
.absolute {
  position: absolute;
  left: 0;
  top: 0;
}
.fixed {
  width: 200px;
  position: fixed;
  left: 140px;
  top: 60px;
}

.el-submenu .el-menu-item {
  height: 38px;
  line-height: 38px;
}

.el-menu-vertical-demo /deep/ .el-submenu__title {
  height: 45px;
  line-height: 45px;
}
</style>
