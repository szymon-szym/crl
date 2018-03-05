<template>
  <div class="">
    <h1>This is root page</h1>
    <menuPage v-bind:navigationStatus = "navigationStatus"></menuPage>
    <yourRaces v-bind:userRaceRef="userRaceRef" v-if="navigationStatus.showYourRaces"></yourRaces>
    <button v-on:click="singout">singout</button>
    <p> {{ navigationStatus.showYourRaces }}</p>
  </div>
</template>

<script>
import firebase from "firebase"
import {EventBus} from '../helpers/event-bus'
import yourRaces from "./yourRaces.vue"
import menuPage from "./menuPage.vue"
export default {
  name: 'main',
  components : {
    "yourRaces" : yourRaces,
    "menuPage" : menuPage
  },
  data () {
    return {
      userRaceRef : {},
      navigationStatus: {
        showYourRaces: false,
        showAchievements: false,
        showStats: false
      }
    }
  },
  created: function () {
    console.log("Main is created");
    let user = firebase.auth().currentUser;
    let uid = user.uid;
    this.userRaceRef = firebase.database().ref(user.uid);
    this.userRaceRef.on("value", snap => {
      ///just to snap all races into cache
    })
  },
  // created: function () {
  //   EventBus.$on('navigation', newNav => {
  //     this.navigationStatus = newNav;
  //     console.log(this.navigationStatus);
  //   })
  // },
  methods: {
    singout: function () {
      firebase.auth().signOut().then(() => {
          this.$router.replace("login")
        }).catch(function(error) {
          // An error happened.
        });
    },
    addRace : function () {
      this.userRaceRef.push({name : "testing VF"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
