import Vue from 'vue'
import VueRouter from 'vue-router'
//import Statistics from '../views/Statistics'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Statistics',
  //   component: () => import(/* webpackChunkName: "statistics" */ '../views/Statistics')
  // },
  {
    path: '/rakeBack',
    name: 'RakeBack',
    component: () => import(/* webpackChunkName: "rakeBack" */ '../views/Statistics/RakeBack')
  },
  {
    path: '/invitationUser',
    name: 'InvitationUser',
    component: () => import(/* webpackChunkName: "invitationUser" */ '../views/Statistics/InvitationUser')
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
