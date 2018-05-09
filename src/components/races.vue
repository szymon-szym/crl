<template>
  <div class="">
    <navbar></navbar>
    <h2>Your races</h2>
    <div class="pointsSum" v-if="userPoints">
      Points: {{ userPoints }}, Races: {{ nbRaces }}
    </div>
    <div class="menu">
      <div class="menuBtn" @click="goTo('calendar')">
        <img src="../assets/your_races/calend.svg" alt="">
        <span >Add race from calendar</span>
      </div>
      <div class="menuBtn" @click="goTo('form')">
        <img src="../assets/your_races/custom.svg" alt="">
        <span >Add new race</span>
      </div>
    </div>
    <div class="yourRacesTable">
        <div class="raceCard" v-for="(race, index) of userRaces" v-bind:key="race['.key']">
          <div class="points">
            <p> {{ race.distance }} points </p>
          </div>
          <div class="cardBody">
            <p class="name">
            {{ race.name }},
            <!-- {{ race.location }} -->
            {{ race.date }},
            {{ race.distance}}&nbsp;km </p>
          </div>
          <div class="cardButtons">
            <div class="button" @click="editRace(race)">Edit</div>
            <div class="button" @click="removeRace(race['.key'], index, race.name)">Remove</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import navbar from './navbar.vue'
export default {
  name: 'races',
  components: {
    navbar
  },
  data () {
    return {
     //
    }
    },
    computed: {
      userRaces () {
        return JSON.parse(JSON.stringify(this.$store.getters.getUserRaces))
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
      raceToAdd () {
        return this.$store.getters.getRaceToAdd
      },
      getUser: state => {
        return state.currentUser
      }
    },
    created: function () {
      this.$store.dispatch('setAddFormState', true)
    },
    methods: {
      goTo: function(location) {
        this.$router.push(`/${location}`)
      },
      editRace: function(race) {
        this.$store.dispatch('setRaceToAdd', race)
        //switch to update mode
        this.$store.dispatch('setAddFormState', false)
        this.goTo('form')
      },
      removeRace: function(rKey, rIndex, name) {
        let removeData = {
          key: rKey,
          index: rIndex
          };
        this.$store.dispatch('removeRace', removeData)
        this.$notify({
          group: 'races',
          title: 'Race removed',
          text: name,
          type: 'error'
        })
        this.goTo('races')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2, h3 {
  font-weight: normal;
}
/* races */
.yourRacesTable {
  padding: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.raceCard {
  background-color: white;
  border: thin solid lightgrey;
  border-radius: 10px;
  margin: 15px auto 15px auto;
  display: flex;
  width: 300px;
  /* shadows */
  -webkit-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  -moz-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
}
.points {
  border-radius: 10px 0 0 10px;
  width: 80px;
  background-color: PaleTurquoise;
  padding: 8px;
  color: #000080ff;
  font-weight: bold;
  text-align: left;
  display: flex;
  align-items: center;
}
.cardBody {
  width: 140px;
  padding: 5px;
  display: flex;
  text-align: left;
  align-items: center;
}
.cardButtons {
  width: 80px;
  padding: 5px;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  flex-flow: column nowrap;
}
.button {
  background-color: PaleTurquoise;
  padding: 3px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}
.button:hover {
  background-color: Turquoise;
  cursor: default;
}
/* menu */
.menu {
  padding: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.menuBtn {
  width: 100px;
  margin: 5px;
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
}
.menuBtn:hover {
  border-color: darkblue;
  cursor: default;
}
@media (min-width: 600px) {
  .menu {
  }
}
</style>
