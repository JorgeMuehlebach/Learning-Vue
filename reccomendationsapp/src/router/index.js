import Vue from 'vue'
import VueRouter from 'vue-router'
import Statistics from '../views/statistics.vue'
import MyRecs from '../views/MyRecs.vue'
import NavBar from '../components/NavBar.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
routes : [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      loginState: true,
    }

  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/MyRecs',
    name: 'MyRecs',
    component: MyRecs

  },
  {
    path: '/NavBar',
    name: 'NavBar',
    component: NavBar

  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      loginState: true,
    }

  }

]})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
