<template>
  <div class="">
    <navbar></navbar>
    <h2>Your stats</h2>
    <h3>You finished {{ animUserRaces.races }} races, and collect {{ animUserPoints.points }} points</h3>
    <hr>
    <h2>League stats</h2>
    <h3>We have {{ nbUsers }} verified users with {{animRaces.races}} races and {{ animPoints.points }} points (out of 1200)</h3>
    <div class="button" @click="dChart = !dChart">Say it with chart</div>
    <div class='chartWrapper' v-if="dChart">
        <doughnut
        :data="dChartData"
        :options="{responsive: false, maintainAspectRatio: false}"
        :width="300"
        :height="300" id='doughnutChart'>
        </doughnut>
    </div>
    <!-- <div class="">
      {{animRaces}} {{ animPoints }}
    </div> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import anime from 'animejs'
import navbar from './navbar'
import doughnut from '../helpers/statsChartOne'
export default {
  name: 'stats',
  components: {
    navbar,
    doughnut
  },
  data () {
    return {
      allVerRaces: [],
      animPoints: {points : 0},
      animRaces: {races : 0},
      animUserPoints: {points: 0},
      animUserRaces: {races: 0},
      dChart: false
    }
  },
  watch: {
    userRaces: function () { this.animeUR() },
    userPoints: function () { this.animeUP() },
    verPoints: function () { this.animeVP() },
    verRaces: function () { this.animeVR() }
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
      let points = null
      for (let race of (this.verRaces)) {
        points += race.distance
      }
      return points
    },
    nbUsers () {
      return this.verUsers.length
    },
    // charts ***********************************************
     dChartData() {
       return {
         datasets: [{
            data: [
              this.userPoints,
              (this.verPoints - this.userPoints),
              (1200 - (this.userPoints + this.verPoints))
            ],
            backgroundColor: ["blue", "cadetBlue", "lightGrey"]
          }],
         // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'Your points',
            'All points',
            'Still left'
         ],
      
        }
      }
    },
  created () {
    this.$store.dispatch('setAllRacesRef', firebase.database().ref('userRaces'))
    },
  mounted: function () {
    this.animeUR()
    this.animeUP()
    this.animeVR()
    this.animeVP()
  },
  methods: {
    animeUR () {
      anime({
        targets: this.animUserRaces,
        races: this.userRaces.length,
        round: 1,
        easing: 'linear',
        duration: 1000
      })
    },
    animeUP () {
      anime({
        targets: this.animUserPoints,
        points: this.userPoints,
        round: 1,
        easing: 'linear',
        duration: 1500
      })
    },
    animeVP () {
      anime({
        targets: this.animPoints,
        points: this.verPoints,
        round: 1,
        easing: 'linear',
        duration: 1500
      })
    },
    animeVR () {
      anime({
        targets: this.animRaces,
        races: this.verRaces.length,
        round: 1,
        easing: 'linear',
        duration: 1000
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
.chartWrapper {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.button {
  background-color: lightgrey;
  padding: 3px 10px 3px 10px;
  height: 30px;
  width: 150px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}
.button:hover {
  background-color: Turquoise;
  cursor: default;
}
</style>
