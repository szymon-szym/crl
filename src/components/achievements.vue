<template>
  <div class="">
    <navbar></navbar>
    <h2>Here you can find your cool achievements</h2>
    <div class="badges">
      <div class="achCont">
        <div v-if="ach0" >
          <img src="../assets/ach/first_race.svg" alt="jupi!">
          <p>Your account is verified!</p>
        </div>
        <div v-if="!ach0" >
          <img src="../assets/ach/trophy_grey.svg" alt="locked">
          <p class="lockedAch">Verification</p>
        </div>
      </div>
      <div class="achCont">
        <div v-if="ach1" >
          <img src="../assets/ach/first_race.svg" alt="jupi!">
          <p>First race!</p>
        </div>
        <div v-if="!ach1" >
          <img src="../assets/ach/trophy_grey.svg" alt="locked">
          <p class="lockedAch">First race</p>
        </div>
      </div>
      <div class="achCont">
        <div v-if="ach2" >
          <img src="../assets/ach/first_race.svg" alt="jupi!">
          <p>You run over 20 km :)</p>
        </div>
        <div v-if="!ach2" >
          <img src="../assets/ach/trophy_grey.svg" alt="locked">
          <p class="lockedAch">20 km</p>
        </div>
      </div>
      <div class="achCont">
        <div v-if="ach3" >
          <img src="../assets/ach/first_race.svg" alt="jupi!">
          <p>You finished 3 races :)</p>
        </div>
        <div v-if="!ach3" >
          <img src="../assets/ach/trophy_grey.svg" alt="locked">
          <p class="lockedAch">3 races</p>
        </div>
      </div>
      <div class="achCont">
        <div v-if="ach4">
          <img src="../assets/ach/first_race.svg" alt="jupi!">
          <p>You run over 50 km!</p>
        </div>
        <div v-if="!ach4" >
          <img src="../assets/ach/trophy_grey.svg" alt="locked">
          <p class="lockedAch">50 km</p>
        </div>
      </div>
      <div class="achCont">
        <div v-if="ach5">
          <img src="../assets/ach/first_race.svg" alt="jupi!">
          <p>You finished 5 races!</p>
        </div>
        <div v-if="!ach5">
          <img src="../assets/ach/trophy_grey.svg" alt="locked">
          <p class="lockedAch">5 races</p>
        </div>
      </div>
      <!-- <div class="achCont">
        <div v-if="ach4">
          <img src="../assets/ach/first_race.svg" alt="jupi!">
          <p> :)</p>
        </div>
        <div v-if="!ach4" >
          <img src="../assets/ach/trophy_grey.svg" alt="locked">
          <p class="lockedAch">More achievements :)</p>
        </div>
      </div> -->


      </div>
    </div>
</template>

<script>
import firebase from "firebase"
import navbar from './navbar.vue'
export default {
  name: 'achievements',
  components : {
    navbar
  },
  data () {
    return {
        ach: {
          ach0: false,
          ach1: false,
          ach2: false,
          ach3: false,
          ach4: false,
          ach5: false
        }
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.getUser
    },
    verUsers () {
      let users = []
      for (let user of this.$store.getters.getVerUsers) {
        users.push(user['.key'])
      }
      return users
    },
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
    ach1 () {
      if (this.userRaces.length) {
        return true
      }
    },
    ach2 () {
      if (this.userPoints > 20) {
        return true
      }
    },
    ach3 () {
      if (this.userRaces.length >= 3) {
        return true
      }
    },
    ach4 () {
      if (this.userPoints > 50) {
        return true
      }
    },
    ach5 () {
      if (this.userRaces.length >= 5) {
        return true
      }
    },
    ach0 () {
      if (this.verUsers.includes(this.currentUser.uid)) {
        return true
      }
    }
  },
  created: function() {
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
  methods: {
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
p {
  margin: 0px;
}
.badges {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
}
.achCont {
  margin: 15px;
  width: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
.lockedAch {
  font-size: 10px;
  color: grey;
}
@media (min-width: 400px)
{
  .badges {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-around;
  }
}
</style>