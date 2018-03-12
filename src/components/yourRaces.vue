<template>
  <div class="">
    <h1>Your races page</h1>
    <div class="yourRacesTable">
      <h2>Your races table</h2>
      <button @click="goToMenu">Back to main menu</button>
      <button @click="goToForm">Add new race</button>
      <button @click="goToCalendar">Add race from calendar</button>
      <table>
        <tr>
          <th class = "row-name">Race name</th>
          <th class = "row-location">Location</th>
          <th class = "row-date">Date</th>
          <th class = "row-distance">km</th>
          <th class = "row-buttons"></th>
          <th class = "row-buttons"></th>
        </tr>
        <tr v-for="(race, index) of userRaces" v-bind:id="race.key">
          <td> {{ race.name }}</td>
          <td> {{ race.location }}</td>
          <td> {{ race.date }}</td>
          <td> {{ race.distance }}</td>
          <td><button @click="removeRace(race.key, index, race.name)">Remove</button></td>
          <td><button @click="editRace(race)">Edit</button></td>
        </tr>
      </table>
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
/* * {
  border: solid thin red;
} */

h1, h2 {
  font-weight: normal;
}
.addRaceForm {
  width: 80%;
  margin: auto;
  padding: 20px;
  border: solid thin grey;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
table {
  table-layout: fixed;
  width: 90%;
  white-space: nowrap;
  margin: 0 auto;
}
td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
}
td, th {
  text-align: left;
  pading: 5px;
}
tr:nth-child(even) {
  background: lightblue;
}
.row-name {
  width: 35%;
}
.row-location {
  width: 20%;
}
.row-date {
  width: 18%;
}
.row-distance {
  width: 12%;
}
.row-buttons {
  width: 15%;
}

</style>
