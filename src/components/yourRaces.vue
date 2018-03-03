<template>
  <div class="">
    <h1>Your races page</h1>
    <button v-if="!showAddForm" v-on:click="showAddForm = !showAddForm">Add race</button>
    <div v-if="showAddForm"  class="addRaceForm" >
      <button v-on:click="showAddForm = false">Back</button>
      <h2>Add custom race</h2>
      <label>Add race name</label>
      <input type="text" placeholder="Add race name" v-model="raceToAdd.name"><br>
      <label>Add race date</label>
      <input type="text" placeholder="Add race date" v-model="raceToAdd.date"><br>
      <label>Add race location</label>
      <input type="text" placeholder="Add race location" v-model="raceToAdd.location"><br>
      <label>Add race distance</label>
      <input type="number" placeholder="Add race distance" v-model="raceToAdd.distance"><br>
      <button v-on:click.prevent="addRace">Add race to your list</button>
    </div>
    <h2>Your races table</h2>
        <table>
          <tr>
            <th class = "row-name">Race name</th>
            <th class = "row-location">Location</th>
            <th class = "row-date">Date</th>
            <th class = "row-distance">km</th>
            <th class = "row-buttons"></th>
          </tr>
          <tr v-for="race of userRaces" v-bind:id="race.key">
            <td> {{ race.name }}</td>
            <td> {{ race.location }}</td>
            <td> {{ race.date }}</td>
            <td> {{ race.distance }}</td>
            <td><button v-on:click="RemoveRace(race.key)">Remove</button></td>
          </tr>
        </table>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  props: ["userRaceRef"],
  name: 'yourRaces',
  data () {
    return {
      userRaces: [],
      raceToAdd: {
        name: "",
        date: "",
        location: "",
        distance: 0
        },
      showAddForm : false
    }
  },
  created: function () {
    this.userRaceRef.on("child_added", snap => {
    let tempRace = snap.val();
    tempRace.key = snap.key;
    this.userRaces.push(tempRace)
    // console.log(tempRace.name);
    }),
    this.userRaceRef.on("child_removed", snap => {
      const raceToRemove = document.getElementById(snap.key);
      raceToRemove.remove();
      console.log("Race removed");
    })
  },
  methods: {
    singout: function () {
      firebase.auth().signOut().then(() => {
          this.$router.replace("login")
        }).catch(function(error) {
          // An error happened.
        });
    },
    addRace : function () {
      this.userRaceRef.push(this.raceToAdd);
      this.raceToAdd = {
        name: "",
        date: "",
        location: "",
        distance: 0
      },
      this.showAddForm = false
    },
    LogKey: function (key) {
      console.log(key);
    },
    RemoveRace: function(key) {
      this.userRaceRef.child(key).remove()
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
