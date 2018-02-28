<template>
  <div class="main">
    <h1>This is main page</h1>
    <button v-on:click="singout">singout</button>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: 'main',
  data () {
    return {
      // currentRace: {
      //   race.ID = "",
      //   race.name = "",
      //   race.location = "",
      //   race.distance = 0,
      //   race.date = ""
      // }
    }
  },
  methods: {
    singout: function () {
      firebase.auth().signOut().then(() => {
          this.$router.replace("login")
        }).catch(function(error) {
          // An error happened.
        });
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
