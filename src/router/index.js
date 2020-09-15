import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/exam',
    name: 'examlist',
    component: () => import('../views/ExamList.vue'),
    meta: {
      requiresLogin: true
    }
  },
  {
    path: '/exam/:idx',
    name: 'exam',
    component: () => import('../views/Exam.vue')
  },
  {
    path: '/404',
    name: 'notfound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../views/LeaderBoard.vue')
  },
  {
    path: '/extra',
    name: 'Extra',
    component: () => import('../views/Extra.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
