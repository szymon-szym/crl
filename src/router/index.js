import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import main from '@/components/main'
import firebase from "firebase"

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("login")
  else if (!requiresAuth && currentUser) next("main")
  else next ()
})

export default router
