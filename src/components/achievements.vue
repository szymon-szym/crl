<template>
  <div class="">
    <button @click="goToMenu">Bak to main menu</button>
    <h2>Here you can find your cool achievements</h2>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: 'achievements',
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
      this.$store.dispatch('setUserRaces')
    },
    methods: {
      goToMenu: function () {
        let menuState = {
          menu: true,
          races: false,
          achievemets: false,
          stats: false,
          form: false
        }
        this.$store.dispatch('setMenuState', menuState)
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
