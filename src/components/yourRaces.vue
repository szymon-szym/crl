<template>
  <div class="">
    <h1>Your races page</h1>
    <div class="yourRacesTable">
      <h2>Your races table</h2>
      <button @click="goToMenu">Back to main menu</button>
      <button @click="goToForm">Add new race</button>
      <table>
        <tr>
          <th class = "row-name">Race name</th>
          <th class = "row-location">Location</th>
          <th class = "row-date">Date</th>
          <th class = "row-distance">km</th>
          <th class = "row-buttons"></th>
        </tr>
        <tr v-for="(race, index) of userRaces" v-bind:id="race.key">
          <td> {{ race.name }}</td>
          <td> {{ race.location }}</td>
          <td> {{ race.date }}</td>
          <td> {{ race.distance }}</td>
          <td><button v-on:click="removeRace(race.key, index)">Remove</button>
            <button v-on:click="editRace(race)">Edit</button>
          </td>
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
      getUser: state => {
        return state.currentUser
      }
    },
    created: function () {
      this.$store.dispatch('setUserRaces')
    },
    methods: {
      goToMenu: function () {
        let menuState = {
          menu: true,
          races: false,
          achievemets: false,
          stats: false,
          stats: true
        }
        this.$store.dispatch('setMenuState', menuState)
      },
      goToForm: function () {
        let menuState = {
          menu: false,
          races: false,
          achievemets: false,
          stats: false,
          form: true
        }
          this.$store.dispatch('setMenuState', menuState)
        },
      removeRace: function(rKey, rIndex) {
        let removeData = {
          key: rKey,
          index: rIndex
          };
        this.$store.dispatch('removeRace', removeData);
      }
    }
      // editRace: function(raceObj) {
      //   // console.log(raceObj);
      //   // this.raceToAdd.name = raceObj.name;
      //   // this.raceToAdd.date = raceObj.date;
      //   // this.raceToAdd.location = raceObj.location;
      //   // this.raceToAdd.distance = raceObj.distance;
      //   // this.raceUpdateKey = raceObj.key
      //   // this.showAddForm = true;
      //   // this.showEditBtn = true
      //   // this.userRaceRef.child(key).remove()
      // }
      // // updateRace: function () {
      // //   // console.log(this.raceUpdateKey);
      // //   this.userRaceRef.child(this.raceUpdateKey).update(this.raceToAdd);
      // //   this.showAddForm = false;
      // //   this.showEditBtn = false;
      // // }

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
  width: 100%;
  white-space: nowrap;
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
  width: 50%;
}
.row-location {
  width: 15%;
}
.row-date {
  width: 10%;
}
.row-distance {
  width: 5%;
}
.row-buttons {
  width: 20%;
}
</style>
