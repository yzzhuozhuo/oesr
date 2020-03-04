<template>
  <el-col :span="4">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      text-color="#888"
      active-text-color="#25bb9b"
      :unique-opened="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>求职必备</span>
        </template>
        <el-menu-item index="1-1">笔试备战</el-menu-item>
        <el-menu-item index="1-2">面试备战</el-menu-item>
        <el-menu-item index="1-3">课程推荐</el-menu-item>
        <el-menu-item index="1-4">项目推荐</el-menu-item>
        <el-menu-item index="1-5">网申内推</el-menu-item>
        <el-menu-item index="1-6">书籍推荐</el-menu-item>
        <el-menu-item index="1-7">常用工具</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>基础提升</span>
        </template>
        <el-menu-item index="2-1">实用题库</el-menu-item>
        <el-menu-item index="2-2">编程入门</el-menu-item>
        <el-menu-item index="2-3">考试通关</el-menu-item>
        <el-menu-item index="2-4">课程推荐</el-menu-item>
        <el-menu-item index="2-5">入门项目</el-menu-item>
        <el-menu-item index="2-6">职业规划</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>工作技能</span>
        </template>
        <el-menu-item index="3-1">新人培训</el-menu-item>
        <el-menu-item index="3-2">社招面试</el-menu-item>
        <el-menu-item index="3-3">职场经验</el-menu-item>
        <el-menu-item index="3-4">常用工具</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>寻找组织</span>
        </template>
        <el-menu-item index="4-1">求职备战</el-menu-item>
        <el-menu-item index="4-2">学习知识</el-menu-item>
        <el-menu-item index="4-3">职场交流</el-menu-item>
        <el-menu-item index="4-4">生活交友</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-col>
</template>

<script>
export default {}
</script>

<style>
</style>
