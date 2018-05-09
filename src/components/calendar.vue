<template>
  <div class="">
    <navbar></navbar>
    <!-- <h2>Pick race from calendar</h2> -->
      <div class="btnWrapper">
        <input v-model="filter" type="text" placeholder="search for race"/>
        <div class="button" @click="setStartDate(7); setBtnState('week')" v-bind:class= "{activeBtn: btnState.week}">7 days</div>
        <div class="button" @click="setStartDate(14); setBtnState('twoWeeks')" v-bind:class= "{activeBtn: btnState.twoWeeks}">14 days</div>
        <div class="button" @click="setStartDate(30); setBtnState('month')" v-bind:class= "{activeBtn: btnState.month}">30 days</div>
        <div class="button" @click="setStartDate('all'); setBtnState('all')" v-bind:class= "{activeBtn: btnState.all}">All races</div>
      </div>
    <div class="yourRacesTable">
      <table>
        <tr>
          <th class = "row-name">Race name</th>
          <th class = "row-location">Location</th>
          <th class = "row-date">Date</th>
          <th class = "row-distance">km</th>
          <th class = "row-buttons"></th>
        </tr>
        <tr v-for="(race, index) of filteredRaces" v-bind:id="race.key" v-if="range(race.date)">
          <td> {{ race.name }}</td>
          <td> {{ race.location }}</td>
          <td> {{ race.date }}</td>
          <td> {{ race.distance }}</td>
          <td class="btnTd"><div class="button calend" @click="editRace(race)">Add</div></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
import navbar from './navbar.vue'
export default {
  name: 'calendar',
  components: {
    navbar
  },
  data () {
    return {
      filter: '',
      btnState: {
        all: true,
        week: false,
        twoWeeks: false,
        month: false
      }
    }
  },
  computed: {
    calendRaces () {
      return this.$store.getters.getCalendRaces
    },
    filteredRaces () {
      return this.calendRaces.filter((race) => {
        if (race.name.toLowerCase().includes(this.filter.toLowerCase())){
          return race.name.toLowerCase().includes(this.filter.toLowerCase())
        }
        else if (race.location.toLowerCase().includes(this.filter.toLowerCase())){
          return race.location.toLowerCase().includes(this.filter.toLowerCase())
        }
      })
    },
    raceToAdd () {
      return this.$store.getters.getRaceToAdd
    },
    startDate () {
      return this.$store.getters.getStartDate
    }
  },
  created: function () {
     if (this.calendRaces.length==0) {
          //if user will enter manually this route check if data is already there
          //and fetch if not 
          //passing firebase ref for Vuexfire actions
          this.$store.dispatch('setAllRacesRef', firebase.database().ref('userRaces'))
          this.$store.dispatch('setCalendRacesRef', firebase.database().ref('calend'))
          this.$store.dispatch('setVerUsers', firebase.database().ref('verifiedUsers'))
          this.$store.dispatch('setUserRaces')
          this.$store.commit('setUser')
       }
    this.$store.commit('setStartDate', 'all')
    //swith to add mode by default
    this.$store.dispatch('setAddFormState', true)
  },
  methods: {
    goTo: function(location) {
    this.$router.push(`/${location}`)
    },
    range: function(date) {
      let momentDate = moment(date, 'l').toDate()
      if (moment(momentDate).isBetween(this.startDate, this.endDate)) {
        return true
      }
    },
    setBtnState : function (btn) {
      let obj = this.btnState
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = null
        }
      }
      this.btnState[btn] = true;
    },
    setStartDate : function (days) {
      this.$store.commit('setStartDate', days)
    },
    editRace: function(race) {
      this.$store.dispatch('setRaceToAdd', race)
      this.goTo('form')
    },
    removeRace: function(rKey, rIndex) {
      let removeData = {
        key: rKey,
        index: rIndex
        };
      this.$store.dispatch('removeRace', removeData)
      this.goTo('races')
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
  margin: 5px;
}
.btnWrapper {
  width: 95%;
  margin: 20px auto auto auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
}
.button {
  background-color: lightgrey;
  padding: 0px 5px 0px 5px;
  height: 30px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 10px;
}
.button:hover {
  background-color: Turquoise;
  cursor: default;
}
.calend {
  height: 15px;
}
.activeBtn {
  background-color: Turquoise;
}
input {
  width: 95%;
  margin: 5px 0 5px 0;
}
/* table */
table {
  table-layout: fixed;
  width: 95%;
  margin: auto;
  white-space: nowrap;
  font-size: 10px;
}
td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
}
.btnTd {
    text-align: center;
}
.btn {
  font-size: 10px;
}
td, th {
  text-align: left;
  pading: 5px;
}
tr:nth-child(even) {
  background: lightblue;
}
.row-name {
  width: 38%;
}
.row-location {
  width: 20%;
}
.row-date {
  width: 20%;
}
.row-distance {
  width: 7%;
}
.row-buttons {
  width: 13%;
}
@media (min-width: 600px) {
  table {
    font-size: 15px;
  }
  input {
    width: 300px;
  }
  .button {
    font-size: 15px;
    padding: 3px 10px 3px 10px;
  }
  .btn {
    font-size: 12px;
  }
  .row-buttons {
    width: 7%;
  }
}
</style>
