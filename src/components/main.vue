<template>
  <div class="mainPage">
    <div class="header">
      <p> {{ currentUser.email }} </p>
      <button class="outBtn" @click="singout">Singout</button>
    </div>
    <menuPage v-if="menuSate.menu"></menuPage>
    <yourRaces v-if="menuSate.races"></yourRaces>
    <addRaceForm v-if="menuSate.form"></addRaceForm>
    <calendar v-if="menuSate.calendar"></calendar>
    <achievements v-if="menuSate.achievements"></achievements>
    <stats v-if="menuSate.stats"></stats>
  </div>
</template>

<script>
import firebase from "firebase"
import yourRaces from "./yourRaces.vue"
import addRaceForm from "./addRaceForm.vue"
import menuPage from "./menuPage.vue"
import calendar from "./calendar.vue"
import achievements from "./achievements.vue"
import stats from "./stats.vue"
export default {
  name: 'main',
  components : {
    "yourRaces" : yourRaces,
    "menuPage" : menuPage,
    "addRaceForm" : addRaceForm,
    "calendar" : calendar,
    "achievements" : achievements,
    "stats" : stats
  },
  data () {
    return {
        //
    }
  },
    computed: {
      currentUser () {
        return this.$store.getters.getUser
      },
      menuSate () {
        return this.$store.getters.getMenuState
      },
      getMsg () {
        return this.$store.getters.getMsg
      }
    },
    created: function () {
        this.$store.dispatch('setUser');
    },
    methods: {
    singout: function () {
      firebase.auth().signOut().then(() => {
          this.$router.replace("login")
          this.$store.dispatch('clearData')
        }).catch(function(error) {
          // error
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: cadetblue;
  padding: 5px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
}
.outBtn {
  margin: 5px 5px 5px 5px;
}
a {
  color: #42b983;
}
</style>
