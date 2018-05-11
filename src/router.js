import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import Home from './components/home.vue'
import Races from './components/races.vue'
import Achievements from './components/achievements.vue'
import Stats from './components/stats.vue'
import Calendar from './components/calendar.vue'
import Form from './components/form.vue'
import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/races',
      name: 'races',
      component: Races,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: Achievements,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('/login')
  else if (!requiresAuth && currentUser)  next('/home')
  // else if (requiresAuth && currentUser) next('/home')
  else next()
})

export default router