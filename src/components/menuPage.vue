<template>
  <div class="main">
    <h1>This is menu page</h1>
    <button v-on:click="gotoYourRaces">Your races</button>
    <button>Achievements</button>
    <button>Stats</button>
  </div>
</template>

<script>
import firebase from "firebase";
import {EventBus} from '../helpers/event-bus'
export default {
  props: ["navigationStatus"],
  name: 'menuPage',
  data () {
    return {
    }
  },
  methods: {
    singout: function () {
      firebase.auth().signOut().then(() => {
          this.$router.replace("login")
        }).catch(function(error) {
          // An error happened.
        });
    },
    gotoYourRaces: function () {
      this.navigationStatus.showYourRaces = !(this.navigationStatus.showYourRaces);
      // EventBus.$emit("navigation", this.navigationStatus);
    },
    gotoAchievements: function () {
      this.navigationStatus.showAchievements = !(this.navigationStatus.showAchievements);
      // EventBus.$emit("navigation", this.navigationStatus);
    },
    gotoStats: function () {
      this.navigationStatus.showStats = !(this.navigationStatus.showStats);
      // EventBus.$emit("navigation", this.navigationStatus);
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
