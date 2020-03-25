// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (store.state.account.accountType === 'company') {
    console.info(11111)
    if (/home|userPage|learnPage|jobPage/.test(to.name)) {
      next('/company/page')
    } else {
      next()
    }
  } else if (store.state.account.accountType === 'student') {
    if (/designTheme|page/.test(to.name)) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
