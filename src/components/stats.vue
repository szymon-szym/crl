<template>
  <div class="">
    <navbar></navbar>
    <h2>Your stats</h2>
    <h3>You finished {{ animUserRaces.races }} races, and collect {{ animUserPoints.points }} points</h3>
    <hr>
    <h2>League stats</h2>
    <h3>We have {{ nbUsers }} verified users with {{animRaces.races}} races and {{ animPoints.points }} points (out of 1200)</h3>
    <!-- <div class="">
      {{animRaces}} {{ animPoints }}
    </div> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import anime from 'animejs'
import navbar from './navbar'
export default {
  name: 'stats',
  components: {
    navbar
  },
  data () {
    return {
      allVerRaces: [],
      animPoints: {points : 0},
      animRaces: {races : 0},
      animUserPoints: {points: 0},
      animUserRaces: {races: 0}
    }
  },
  watch: {
    //
  },
  computed: {
    userRaces () {
      return this.$store.getters.getUserRaces
    },
    userPoints () {
      let points = 0
      for (let race of this.userRaces) {
        points += race.distance
      }
      return points
    },
    nbRaces () {
      return this.userRaces.length
    },
    verUsers () {
      let users = []
      for (let user of this.$store.getters.getVerUsers) {
        users.push(user['.key'])
      }
      return users
    },
    allRaces () {
      return JSON.parse(JSON.stringify(this.$store.getters.getAllRaces))
    },
    verRaces () {
      // extracting single races form user objects
      let races = []
      let verTempRaces = []
      for (let user of this.allRaces) {
        if (this.verUsers.includes(user['.key']))
        races.push(user)
      }
      for (let user of races) {
       delete user['.key']
       let temUserRaces = Object.values(user)
       verTempRaces.push(...temUserRaces) 
      // console.log(verTempRaces)
      }
      // console.log(verTempRaces)
      return verTempRaces
    },
    verPoints () {
      // let points = this.verRaces.reduce((prev, curr) => {return prev + curr.distance})
      // console.log(points)
      // return points
    },
    nbUsers () {
      return this.verUsers.length
      }
    },
  created: function () {
      if (this.userRaces.length==0) {
          //if user will enter manually this route check if data is already there
          //and fetch if not 
          //passing firebase ref for Vuexfire actions
          this.$store.dispatch('setAllRacesRef', firebase.database().ref('userRaces'))
          this.$store.dispatch('setCalendRacesRef', firebase.database().ref('calend'))
          this.$store.dispatch('setVerUsers', firebase.database().ref('verifiedUsers'))
          this.$store.dispatch('setUserRaces')
          this.$store.commit('setUser')
       }
    },
  mounted: function () {
    this.animeUR()
    this.animeUP()
    this.animeVR()
  },
  methods: {
    animeUR () {
      anime({
        targets: this.animUserRaces,
        races: this.userRaces.length,
        round: 1,
        easing: 'linear',
        duration: 1500
      })
    },
    animeUP () {
      anime({
        targets: this.animUserPoints,
        points: this.userPoints,
        round: 1,
        easing: 'linear',
        duration: 2500
      })
    },
    animeVR () {
      anime({
        targets: this.animRaces,
        races: this.verRaces.length,
        round: 1,
        easing: 'linear',
        duration: 2500
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
