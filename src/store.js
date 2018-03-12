import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"
import {database} from './helpers/firebase'

Vue.use(Vuex)
Vue.use(firebase)

export default new Vuex.Store({
  state: {
    msg: 'hello from vuex',
    menuSate: {
      menu: true,
      races: false,
      achievements: false,
      stats: false,
      form: false,
      calendar: false
    },
    userRaces: [],
    calendRaces: [],
    currentUser: {},
    addFormState: true,
    raceToAdd: {
      name: 'add test',
      location: '',
      date: '',
      distance: 0
    }
  },
  getters: {
    getMsg: state => {
      return state.msg
    },
    getUserRaces: state => {
      return state.userRaces
    },
    getCalendRaces: state => {
      return state.calendRaces
    },
    getMenuState: state => {
      return state.menuSate
    },
    getRaceToAdd: state => {
      return state.raceToAdd
    },
    getAddFormState: state => {
      return state.addFormState
    },
    getUser: state => {
      return state.currentUser
    }
  },
  mutations: {
    setUser: state => {
      state.currentUser = firebase.auth().currentUser
    },
    setMenuState: (state, payload) => {
      state.menuSate = payload
    },
    setAddFormState: (state, payload) => {
      state.addFormState = payload
    },
    setRaceToAdd: (state, payload) => {
      state.raceToAdd = payload
    },
    clearRaceToAdd: state => {
      state.raceToAdd = {
        name: '',
        location: '',
        date: '',
        distance: 0
      }
    },
    addRace: (state) => {
      let userRef = 'userRaces/' + state.currentUser.uid
      firebase.database().ref(userRef).push(state.raceToAdd)
    },
    updateRace: (state) => {
      let updateRef = 'userRaces/' + state.currentUser.uid + '/' + state.raceToAdd.key
      firebase.database().ref(updateRef).update(state.raceToAdd)
    },
    setUserRaces: state => {
      state.userRaces = []
      let userRef = 'userRaces/' + state.currentUser.uid
      firebase.database().ref(userRef).on('child_added', snap => {
        let tempRace = snap.val()
        tempRace.key = snap.key
        state.userRaces.push(tempRace)
      })
    },
    setCalendRaces: state => {
      state.calendRaces = []
      let calendRef = 'calend'
      firebase.database().ref(calendRef).on('child_added', snap => {
        let tempRace = snap.val()
        tempRace.key = snap.key
        state.calendRaces.push(tempRace)
      })
    },
    removeRace: (state, payload) => {
      let userRef = 'userRaces/' + state.currentUser.uid
      firebase.database().ref(userRef).child(payload.key).remove()
      state.userRaces.splice(payload.index, 1)
    },
    clearData: state => {
      state.menuSate = {
        menu: true,
        races: false,
        achievemets: false,
        stats: false,
        form: false,
        calendar: false
      }
      state.userRaces = []
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser')
    },
    setMenuState: (context, payload) => {
      context.commit('setMenuState', payload)
    },
    setAddFormState: (context, payload) => {
      context.commit('setAddFormState', payload)
    },
    setUserRaces: context => {
      context.commit('setUserRaces')
    },
    setCalendRaces: context => {
      context.commit('setCalendRaces')
    },
    addRace: (context) => {
      context.commit('addRace')
      context.commit('clearRaceToAdd')
      console.log('race added')
    },
    updateRace: (context) => {
      context.commit('updateRace')
      context.commit('clearRaceToAdd')
      console.log('race updated')
    },
    removeRace: (context, payload) => {
      context.commit('removeRace', payload)
    },
    setRaceToAdd: (context, payload) => {
      context.commit('setRaceToAdd', payload)
    },
    clearData: context => {
      context.commit('clearData')
    }
  }
})
