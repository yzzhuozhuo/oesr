import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'
import QuestionPage from '@/pages/QuestionPage'
import QuestionList from '@/pages/QuestionList'
import AnswerList from '@/pages/AnswerList'
import LearnPage from '@/pages/LearnPage'
import JobPage from '@/pages/JobPage'
import DiscussPage from '@/pages/DiscussPage'
import UserPage from '@/pages/UserPage'
import PracticeSquare from '@/pages/PracticeSquare'
import PositionDetail from '@/pages/PositionDetail'
import RecruitSchedule from '@/pages/RecruitSchedule'
import WriteCalendar from '@/pages/WriteCalendar'
import PreachList from '@/pages/preachList'
import PublishComment from '@/pages/PublishComment'
import CampusDate from '@/pages/CampusDate'
import Company from '@/pages/Company'
import DiscussDetail from '@/pages/DiscussDetail'
import LoginPage from '@/pages/LoginPage'
import PasswordBack from '@/pages/PasswordBack'
import RegisterAccount from '@/pages/RegisterAccount'
import CompanyPage from '@/pages/CompanyPage'
import DesignTheme from '@/pages/DesignTheme'
import AnswerResult from '@/pages/AnswerResult'

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
      path: '/practiceSquare',
      name: '求职广场页',
      component: PracticeSquare
    },
    {
      path: '/recruitSchedule',
      name: '校招日程',
      component: RecruitSchedule
    },
    {
      path: '/writeCalendar',
      name: '笔试日历',
      component: WriteCalendar
    },
    {
      path: '/preachList',
      name: '宣讲会',
      component: PreachList
    },
    {
      path: '/positionDetail',
      name: '职位详情',
      component: PositionDetail
    },
    {
      path: '/publishComment',
      name: '发表评论',
      component: PublishComment
    },
    {
      path: '/campusDate',
      name: '公司校招日程',
      component: CampusDate
    },
    {
      path: '/company',
      name: '公司首页',
      component: Company
    },
    {
      path: '/discussDetail',
      name: '帖子详情',
      component: DiscussDetail
    },
    {
      path: '/login',
      name: '登录页面',
      component: LoginPage
    },
    {
      path: '/passwordBack',
      name: '密码找回页',
      component: PasswordBack
    },
    {
      path: '/registerAccount',
      name: '账号注册页',
      component: RegisterAccount
    },
    {
      path: '/company/designTheme',
      name: '在线出题页',
      component: DesignTheme
    },
    {
      path: '/company/page',
      name: '公司主页',
      component: CompanyPage
    },
    {
      path: '/answerResult',
      name: '答题结果页',
      component: AnswerResult
    }
  ]
})
