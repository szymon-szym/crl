<template>
  <div>
    <h1>Add/Edit/Submit</h1>
    <div class="addRaceForm" >
      <button @click="goToRaces">Back</button>
      <h3>Add custom race</h3>
      <label>Add race name</label>
      <input type="text" placeholder="Add race name" v-model="tempRace.name"><br>
      <label>Add race date</label>
      <datepicker :format="pickerFormat" v-model="tempDate" ></datepicker>
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
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
//date object from datepicker sored in tempDate. parsed to string with moment js and add/update with race
export default {
  name: 'addRaceForm',
  components: {
    Datepicker
  },
  data () {
    return {
      tempRace : {},
      tempDate: ''
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
        if (this.raceToAdd.date) {
          this.tempDate = moment(this.raceToAdd.date, 'L').toDate()
        }

      },
    methods: {
      pickerFormat: function(date) {
        return moment(date).format('L')
      },
      goToRaces: function () {
        let menuState = {
          menu: false,
          races: true,
          achievemets: false,
          stats: false,
          form: false,
          calendar: false
        }
          this.$store.dispatch('clearRaceToAdd')
          this.$store.dispatch('setMenuState', menuState)
        },
      addRace: function() {
        //convert data obj to string and pass to tempRace
        this.tempRace.date = moment(this.tempDate).format('L')
        this.$store.dispatch('setRaceToAdd', this.tempRace)
        this.$store.dispatch('addRace')
        this.$notify({
          group: 'races',
          title: 'Race added',
          text: this.tempRace.name
        })
        this.goToRaces()
      },
      updateRace: function (race) {
        this.tempRace.date = moment(this.tempDate).format('L')
        this.$store.dispatch('setRaceToAdd', this.tempRace)
        console.log(this.$store.getters.getRaceToAdd);
        this.$store.dispatch('updateRace')
        this.$notify({
          group: 'races',
          title: 'Race updated',
          text: this.tempRace.name
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
