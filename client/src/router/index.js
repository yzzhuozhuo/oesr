import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/homepage'
import QuestionPage from '../pages/QuestionPage'
import LearnPage from '../pages/LearnPage'
import JobPage from '../pages/JobPage'
import DiscussPage from '../pages/DiscussPage'
// import NewPage from '../components/NewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: HomePage
    },
    {
      path: '/questionPage',
      name: '题库',
      component: QuestionPage
    },
    {
      path: '/learnPage',
      name: '学习',
      component: LearnPage
    },
    {
      path: '/jobPage',
      name: '求职',
      component: JobPage
    },
    {
      path: '/discussPage',
      name: '讨论区',
      component: DiscussPage
    }
  ]
})
