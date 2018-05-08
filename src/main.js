import Es6Promise from 'es6-promise'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
import {config} from './helpers/firebase'
import Notifications from 'vue-notification'

Es6Promise.polyfill()

Vue.use(Notifications)

Vue.config.productionTip = false

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})