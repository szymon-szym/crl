<template>
  <div class="main">
    <h1>This is menu</h1>
    <button>Add race</button>
    <button>Your races</button>
    <button>Achievements</button>
    <button>Stats</button>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: 'yourRaces',

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
