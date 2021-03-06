import Vue from 'vue'
import VueRouter from 'vue-router'
//import Activity from '../views/Activity'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/Activity')
  },
  {
    path: '/invitation',
    name: 'Invitation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "invitation" */ '../views/Invitation')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register')
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
