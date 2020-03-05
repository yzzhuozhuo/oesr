<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="router-view">
      <router-view/>
    </div>
    <app-sidebar></app-sidebar>
    <app-footer></app-footer>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu'
import AppFooter from './components/AppFooter'
import AppSidebar from './components/AppSidebar'

export default {
  name: 'App',
  components: {
    AppMenu,
    AppFooter,
    AppSidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100%;
}
html, body {
  margin: 0px;
  padding: 0px;
  background-color: #eeeeee;
  height: 100%;
  color: #333;
}

* {
    /* 禁止各浏览器标签的选中功能 */
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
}

</style>
<style scoped>
.router-view {
  flex: 1;
}
</style>
