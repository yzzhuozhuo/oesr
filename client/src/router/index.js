import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/homepage'
import QuestionPage from '../pages/QuestionPage'
import QuestionList from '../pages/QuestionPage/questionList'
import AnswerList from '../pages/QuestionPage/answerList'
import LearnPage from '../pages/LearnPage'
import JobPage from '../pages/JobPage'
import DiscussPage from '../pages/DiscussPage'
import UserPage from '../pages/UserPage'
import PracticeSquare from '@/pages/PracticeSquare'
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
      // children: [
      //   {
      //     path: 'questionList',
      //     name: '试题详情页',
      //     component: QuestionList
      //   }
      // ]
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
    },
    {
      path: '/questionList',
      name: '问题详情页',
      component: QuestionList
    },
    {
      path: '/answerList',
      name: '答题页',
      component: AnswerList
    },
    {
      path: '/userPage',
      name: '用户主页',
      component: UserPage
    },
    {
      path: '/center',
      name: '实习广场页',
      component: PracticeSquare
    }
  ]
})
