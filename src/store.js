import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import {database} from './helpers/firebase'
import * as fireFetch from './api/fetchFirebase'
import moment from 'moment'
import { firebaseMutations } from 'vuexfire'
import { firebaseAction } from 'vuexfire'


Vue.use(Vuex)
Vue.use(firebase)


export default new Vuex.Store({
  state: {
    //races data
    allRaces: [],
    verRaces: [],
    userRaces: [],
    verUsers: [],
    calendRaces: [],
    //
    currentUser: {},
    addFormState: true,
    raceToAdd: {
      name: '',
      location: '',
      date: '',
      distance: 0
    },
    startDate: new Date()
  },
  getters: {
    getAllRaces: state => state.allRaces,
    getVerRaces: state => state.verRaces,
    getUserRaces: state => state.userRaces,
    getVerUsers: state => state.verUsers,
    getCalendRaces: state => state.calendRaces,
    getRaceToAdd: state => state.raceToAdd,
    getAddFormState: state => state.addFormState,
    getStartDate: state => state.startDate,
    getUser: state => state.currentUser,
  },
  mutations: {
    ...firebaseMutations,
    setUser: state => {
      state.currentUser = firebase.auth().currentUser
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
    updateRace: (state) => {
      let updateRef = 'userRaces/' + state.currentUser.uid + '/' + state.raceToAdd.key
      firebase.database().ref(updateRef).update(state.raceToAdd)
    },
    setStartDate: (state, days) => {
      if (days === 7) {
        let newDate = moment().subtract(7, 'd')
        state.startDate = newDate
      }
      else if (days === 14) {
        let newDate = moment().subtract(14, 'd')
        state.startDate = newDate
      }
      else if (days === 30) {
        let newDate = moment().subtract(30, 'd')
        state.startDate = newDate
      }
      else { state.startDate = '01/01/2018'}
    },
    clearData: state => state.userRaces = []
  },
  // ***********************************
  actions: {
    setAddFormState: (context, payload) => {
      context.commit('setAddFormState', payload)
    },
    // setCalendRaces: context => {
    //   context.commit('setCalendRaces')
    // },
    addRace: (context, race) => {
      //updated races have .key/key property, which is indefined
      //for new ones, so I need to delete this properties from raceToAdd object
      //to avoid firebase error
      delete race.key
      delete race['.key']
      let user = firebase.auth().currentUser
      let userRef = 'userRaces/' + user.uid
      firebase.database().ref(userRef).push(race)
      context.commit('clearRaceToAdd')
      console.log('race added')
    },
    clearRaceToAdd: context => {
      context.commit('clearRaceToAdd')
    },
    updateRace: (context) => {
      context.commit('updateRace')
      context.commit('clearRaceToAdd')
      // console.log('race updated')
    },
    removeRace: (context, payload) => {
      let userRef = 'userRaces/' + payload.user.uid
      firebase.database().ref(userRef).child(payload.key).remove()
    },
    setRaceToAdd: (context, payload) => {
      context.commit('setRaceToAdd', payload)
    },
    clearData: context => {
      context.commit('clearData')
    },
    setUserRaces: context => {
      let ref = firebase.database().ref('userRaces/'+ firebase.auth().currentUser.uid);
      context.dispatch('fetchUserRaces', ref);
    } ,
    fetchUserRaces: firebaseAction(({
      bindFirebaseRef
    }, ref) => {
      bindFirebaseRef('userRaces', ref)
    }),
    setAllRacesRef: firebaseAction(({
      bindFirebaseRef
    }, ref) => {
      bindFirebaseRef('allRaces', ref)
    }),
    setCalendRacesRef: firebaseAction(({
      bindFirebaseRef
    }, ref) => {
      bindFirebaseRef('calendRaces', ref)
    }),    
    setVerUsers: firebaseAction(({
      bindFirebaseRef
    }, ref) => {
      bindFirebaseRef('verUsers', ref)
    }),    
  }
})

