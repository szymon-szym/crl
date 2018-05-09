<template>
  <div class="hello">
    <navbar></navbar>
        <!-- <h2>Main menu</h2> -->
      <div class="wrapper">
        <div class="menuBtn" @click="goTo('races')">
          <img class="smallImg" src="../assets/main_menu/runner1.svg" alt="">
          <img class="bigImg" src="../assets/main_menu/runner1_big.svg" alt="">
          <span>Your races</span>
        </div>
        <div class="menuBtn" @click="goTo('achievements')">
          <img class="smallImg" src="../assets/main_menu/ach1.svg" alt="">
          <img class="bigImg" src="../assets/main_menu/ach1_big.svg" alt="">
          <span>Your achievements</span>
        </div>
        <div class="menuBtn" @click="goTo('stats')">
          <img class="smallImg" src="../assets/main_menu/stats1.svg" alt="">
          <img class="bigImg" src="../assets/main_menu/stats1_big.svg" alt="">
          <span>League stats</span>
        </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import navbar from './navbar.vue'
// import * as fireFetch from '../api/fetchFirebase'
export default {
  components: {
    navbar
  },
  name: 'home',
  data () {
    return {
      msg: 'Main',
       
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
    verUser() {
      return this.$store.getters.getVerUsers
    },
    userRacesRef() {
      return this.user.uid
    },
    userRaces() {
      return this.$store.getters.getUserRaces
    },
    calendRaces() {
      return JSON.parse(JSON.stringify(this.$store.getters.getCalendRaces))
    },
    allRaces() {
       return JSON.parse(JSON.stringify(this.$store.getters.getAllRaces))
    }
  },
  created() {
    //passing firebase ref for Vuexfire actions
    this.$store.dispatch('setAllRacesRef', firebase.database().ref('userRaces'))
    this.$store.dispatch('setCalendRacesRef', firebase.database().ref('calend'))
    this.$store.dispatch('setVerUsers', firebase.database().ref('verifiedUsers'))
    this.$store.dispatch('setUserRaces')
    this.$store.commit('setUser')
  console.log(this.allRaces )
  console.log(this.calendRaces )
  },
  methods: {
    goTo: function(location) {
      this.$router.push(`/${location}`)
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
/* TODO: add wrapper div for buttons and remove marign auto from there */
.menuBtn {
  width: 150px;
  margin: 15px auto 15px auto;
  padding: 10px;
  border: solid thin lightgrey;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  -webkit-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  -moz-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  cursor: default;
}
.menuBtn:hover {
  border-color: darkblue;
}
.smallImg {
  display: flex;
}
.bigImg {
  display: none;
}
@media (min-width: 600px) {
  .wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .menuBtn {
    width: 200px;
  }
}
@media (min-width: 1000px) {
  .smallImg {
    display: none;
  }
  .bigImg {
    display: flex;
  }
}
</style>

