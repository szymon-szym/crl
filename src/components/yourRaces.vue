<template>
  <div class="">
    <h1>Your races page</h1>
    <button @click="goToMenu">Back to main menu</button>
    <button @click="goToForm">Add new race</button>
    <button @click="goToCalendar">Add race from calendar</button>
    <div class="yourRacesTable">
      <!-- <table>
        <tr>
          <th class = "row-name">Race name</th>
          <th class = "row-location">Location</th>
          <th class = "row-date">Date</th>
          <th class = "row-distance">km</th>
          <th class = "row-buttons"></th>
          <th class = "row-buttons"></th>
        </tr> -->
        <div class="raceCard" v-for="(race, index) of userRaces" v-bind:id="race.key">
          <h3 > {{ race.name }} </h3>
          <div class="location">Location: {{ race.location }}</div>
          <div class="date">Date: {{ race.date }}</div>
          <div class="distance">Distance: {{ race.distance }}</div>
          <div><button @click="removeRace(race.key, index, race.name)">Remove</button></div>
          <div><button @click="editRace(race)">Edit</button></div>
        </div>
      <!-- </table> -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: 'races',
  data () {
    return {
      //
    }
    },
    computed: {
      userRaces () {
        return this.$store.getters.getUserRaces
      },
      raceToAdd () {
        return this.$store.getters.getRaceToAdd
      },
      getUser: state => {
        return state.currentUser
      }
    },
    created: function () {
      this.$store.dispatch('setUserRaces')
      //swith to add mode by default
      this.$store.dispatch('setAddFormState', true)
    },
    methods: {
      goToRaces: function () {
        let menuState = {
          menu: false,
          races: true,
          achievemets: false,
          stats: false,
          form: false,
          calendar: false
        }
        this.$store.dispatch('setMenuState', menuState)
      },
      goToCalendar: function () {
        let menuState = {
          menu: false,
          races: false,
          achievemets: false,
          stats: false,
          form: false,
          calendar: true
        }
        this.$store.dispatch('setMenuState', menuState)
      },
      goToMenu: function () {
        let menuState = {
          menu: true,
          races: false,
          achievemets: false,
          stats: false,
          form: false,
          calendar: false
        }
        this.$store.dispatch('setMenuState', menuState)
      },
      goToForm: function () {
        let menuState = {
          menu: false,
          races: false,
          achievemets: false,
          stats: false,
          form: true,
          calendar: false
        }
          this.$store.dispatch('setMenuState', menuState)
        },
      editRace: function(race) {
        this.$store.dispatch('setRaceToAdd', race)
        //switch to update mode
        this.$store.dispatch('setAddFormState', false)
        this.goToForm()
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
          text: name
        })
        this.goToRaces()
      }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yourRacesTable {
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
}
.raceCard {
  padding: 10px;
  border: solid thin grey;
  border-radius: 10px;
}

</style>
