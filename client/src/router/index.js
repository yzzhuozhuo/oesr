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
      name: 'home',
      component: HomePage // 首页
    },
    {
      path: '/questionPage',
      name: 'questionPage',
      component: QuestionPage // 题库
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
      name: 'learnPage',
      component: LearnPage // 学习
    },
    {
      path: '/jobPage',
      name: 'jobPage',
      component: JobPage // 求职
    },
    {
      path: '/discussPage',
      name: 'discussPage',
      component: DiscussPage // 讨论区
    },
    {
      path: '/questionList',
      name: 'questionList',
      component: QuestionList // 问题详情页
    },
    {
      path: '/answerList',
      name: 'answerList',
      component: AnswerList // 答题页
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: UserPage // 用户主页
    },
    {
      path: '/practiceSquare',
      name: 'practiceSquare',
      component: PracticeSquare // 求职广场页
    },
    {
      path: '/recruitSchedule',
      name: 'recruitSchedule',
      component: RecruitSchedule // 校招日程
    },
    {
      path: '/writeCalendar',
      name: 'writeCalendar',
      component: WriteCalendar // 笔试日历
    },
    {
      path: '/preachList',
      name: 'preachList',
      component: PreachList // 宣讲会
    },
    {
      path: '/positionDetail',
      name: 'positionDetail',
      component: PositionDetail // 职位详情
    },
    {
      path: '/publishComment',
      name: 'publishComment',
      component: PublishComment // 发表评论
    },
    {
      path: '/company',
      name: 'company',
      component: Company // 公司首页
    },
    {
      path: '/discussDetail',
      name: 'discussDetail',
      component: DiscussDetail // 讨论区详情页
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage // 登录页
    },
    {
      path: '/passwordBack',
      name: 'passwordBack',
      component: PasswordBack // 密码找回页
    },
    {
      path: '/registerAccount',
      name: 'registerAccount',
      component: RegisterAccount // 账号注册页
    },
    {
      path: '/company/designTheme',
      name: 'designTheme',
      component: DesignTheme // 在线出题页
    },
    {
      path: '/company/page',
      name: 'page',
      component: CompanyPage // 公司主页
    },
    {
      path: '/answerResult',
      name: 'answerResult',
      component: AnswerResult // 答题结果页
    },
    {
      path: '/campusDate',
      name: 'campusDate',
      component: CampusDate
    },
    {
      path: '*',
      redirect: 'login'
    }
  ]
})
