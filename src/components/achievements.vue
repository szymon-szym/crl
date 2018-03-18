<template>
  <div class="">
    <h2>Here you can find your cool achievements</h2>
    <button @click="goToMenu">Bak to main menu</button>
    <div class="badges">
      <div class="achCont">
        <img src="../assets/trophy_color.svg" alt="3stars">
      </div>
      <div class="achCont">
        <img src="../assets/trophy_color.svg" alt="3stars">
      </div>
      <div class="achCont">
        <img src="../assets/trophy_color.svg" alt="3stars">
      </div>
    </div>
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
      userRaces () {
        return this.$store.getters.getUserRaces
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
h2 {
  font-weight: normal;
}
.badges {
  display: flex;
  flex-wrap: row wrap;
  align-items: center;
  justify-content: space-around;
}
.achCont {
  margin-top: 30px;
}
</style>
