<template>
  <div>
    <h1>Add/Edit/Submit</h1>
    <div class="addRaceForm" >
      <button @click="goToRaces">Back</button>
      <h2>Add custom race</h2>
      <label>Add race name</label>
      <input type="text" placeholder="Add race name" v-model="tempRace.name"><br>
      <label>Add race date</label>
      <input type="text" placeholder="Add race date" v-model="tempRace.date"><br>
      <label>Add race location</label>
      <input type="text" placeholder="Add race location" v-model="tempRace.location"><br>
      <label>Add race distance</label>
      <input type="number" placeholder="Add race distance" v-model="tempRace.distance"><br>
      <button v-if="addFormState" @click="addRace()">Add race to your list</button>
      <button v-if="!addFormState" @click="updateRace(tempRace)">Update race</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addRaceForm',
  data () {
    return {
      tempRace : {}
    }
  },
    computed: {
      raceToAdd () {
        return this.$store.getters.getRaceToAdd
      },
      addFormState () {
        return this.$store.getters.getAddFormState
      }
    },
    created: function () {
        this.tempRace = this.raceToAdd
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
      addRace: function() {
        this.$store.dispatch('setRaceToAdd', this.tempRace)
        this.$store.dispatch('addRace')
        this.goToRaces()
      },
      updateRace: function (race) {
        this.$store.dispatch('setRaceToAdd', this.tempRace)
        console.log(this.$store.getters.getRaceToAdd);
        this.$store.dispatch('updateRace')
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
