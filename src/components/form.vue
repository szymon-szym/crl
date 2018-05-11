<template>
  <div>
    <navbar></navbar>
    <h1 v-if="addFormState">Add new race</h1>
    <h1 v-if="!addFormState">Edit a race</h1>
    <div class="addRaceForm" >
      <div class="button" @click="goTo('races')">Back to your races</div>
      <!-- <h3>Add custom race</h3> -->
      <br>
      <label>Add race name</label>
      <div class="inputCont">
        <input type="text" placeholder="Add race name" v-model="tempRace.name">
      </div>
      <span class="err" v-if="err.name"> {{errMessage.name}} </span>
      <label>Add race date</label>
      <div class="inputCont">
        <datepicker :format="pickerFormat" v-model="tempDate" ></datepicker>
      </div>
      <span class="err" v-if="err.date"> {{errMessage.date}} </span>
      <label>Add race location</label>
      <div class="inputCont">
        <input type="text" placeholder="Add race location" v-model="tempRace.location">
      </div>
      <span class="err" v-if="err.location"> {{errMessage.location}} </span>
      <label>Add race distance</label>
      <div class="inputCont" >
        <input type="number" name="distance" placeholder="Add race distance" v-model="tempRace.distance">
      </div>
      <span class="err" v-if="err.distance"> {{errMessage.distance}} </span>
      <br>
      <div class="button" v-if="addFormState" @click="addRace()">Add race to your list</div>
      <div class="button" v-if="!addFormState" @click="updateRace(tempRace)">Update race</div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import navbar from './navbar.vue'
//date object from datepicker sored in tempDate. parsed to string with moment js and add/update with race
export default {
  name: 'addRaceForm',
  components: {
    Datepicker,
    navbar
  },
  data () {
    return {
      tempRace : {},
      tempDate: '',
      errMessage: {
        name: '',
        date: '',
        location: '',
        distance: ''
        },
      err: {
        name: false,
        date: false,
        distance: false,
        location: false
      }
    }
  },
  computed: {
      raceToAdd () {
        return this.$store.getters.getRaceToAdd
      },
      addFormState () {
        return this.$store.getters.getAddFormState
      },
    },
  created: function () {
      this.tempRace = this.raceToAdd
      if (this.raceToAdd.date) {
        this.tempDate = moment(this.raceToAdd.date, 'l').toDate()
      }
      this.tempRace.key = this.tempRace['.key']
      console.log(this.tempRace.key)
    },
  methods: {
    pickerFormat: function(date) {
      return moment(date).format('l')
    },
    goTo: function(location) {
      this.$store.dispatch('clearRaceToAdd')
      this.$router.push(`/${location}`)
    },
    validate: function () {
      //check name
      if (this.tempRace.name==='') {
        this.errMessage.name = "race name is required"
        this.err.name = true
      }
      else { this.err.name = false }
      //check date
      if (this.tempDate==='') {
        this.errMessage.date = "race date is required"
        this.err.date = true
      }
      else { this.err.date = false }
      //check location
      if (this.tempRace.location==='') {
        this.errMessage.location = "race location is required"
        this.err.location = true
      }
      else { this.err.location = false }
      //check distance
      if (isNaN(this.tempRace.distance)) {
        this.errMessage.distance = "race distance is required as a number"
        this.err.distance = true
      }
      else if (this.tempRace.distance===0){
        this.errMessage.distance = "race distance should be minimum 1 km"
        this.err.distance = true
      }
      else {
        this.tempRace.distance = Math.floor(this.tempRace.distance)
        console.log(this.tempRace.distance);
        this.err.distance = false
      }
    },
    addRace: function() {
      this.validate();
      if ((this.err.name==false)&&(this.err.date==false)&&(this.err.location==false)&&(this.err.distance==false)) {
        // convert data obj to string and pass to tempRace
        this.tempRace.date = moment(this.tempDate).format('l')
        this.$store.dispatch('setRaceToAdd', this.tempRace)
        this.$store.dispatch('addRace', this.tempRace)
        this.$notify({
          group: 'races',
          title: 'Race added',
          text: this.tempRace.name,
          type: 'success'
        })
        this.$store.dispatch('setUserRef')
        this.goTo('races')
      }
      else {console.log('error')}
    },
    updateRace: function (race) {
      this.validate();
      if ((this.err.name==false)&&(this.err.date==false)&&(this.err.location==false)&&(this.err.distance==false)) {
        this.tempRace.date = moment(this.tempDate).format('l')
        //after parsing firebase ref to json key is lef in .key format. I need to delete it to update this record in database
        delete this.tempRace['.key']
        this.$store.dispatch('setRaceToAdd', this.tempRace)
        this.$store.dispatch('updateRace')
        this.$notify({
          group: 'races',
          title: 'Race updated',
          text: this.tempRace.name,
          type: 'warn'
        })
        this.goTo('races')
      }
      else {console.log('error')}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* * {
  border: solid thin red;
} */

h1, h3 {
  font-weight: normal;
}
.inputCont {
  padding-bottom: 5px;
  background: linear-gradient(0deg, turquoise, turquoise) center calc(100% - 2px) no-repeat;
  background-size: 0px 3px;
  transition: .5s;
  text-decoration: none;
}
.inputCont:hover {
  background-size: 100% 3px;
}
.addRaceForm {
  width: 80%;
  max-width: 250px;
  margin: auto;
  padding: 20px;
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
.err {
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
}
.button {
  background-color: lightgrey;
  padding: 3px 10px 3px 10px;
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

</style>
