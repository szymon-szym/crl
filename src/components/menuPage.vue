<template>
  <div class="main">
    <h1>This is menu page</h1>
    <button @click="goToRaces">Your races</button>
    <button @click="goToAch">Achievements</button>
    <button @click="goToStats">Stats</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'menuPage',
  data () {
    return {
    }
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
    goToAch: function () {
      let menuState = {
        menu: false,
        races: false,
        achievements: true,
        stats: false,
        form: false,
        calendar: false
      }
        this.$store.dispatch('setMenuState', menuState)
      },
      goToStats: function () {
        let menuState = {
          menu: false,
          races: false,
          achievements: false,
          stats: true,
          form: false,
          calendar: false
        }
          this.$store.dispatch('setMenuState', menuState)
        }
    },
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
