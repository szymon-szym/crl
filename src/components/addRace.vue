<template>
  <div class="">
    <h1>Add races page</h1>
    <h2>Add custom race</h2>
    <button v-on:click="addRace">Add another parkrun from child comp</button>

  </div>
</template>

<script>
import firebase from "firebase"
export default {
  props: ["userRaceRef"],
  name: 'addRace',
  data () {
    return {
      userRaces: []
    }
  },
  created: function () {
    this.userRaceRef.on("child_added", snap => {
    let tempRace = snap.val();
    tempRace.key = snap.key;
    this.userRaces.push(tempRace)
    // console.log(tempRace.name);
    }),
    this.userRaceRef.on("child_removed", snap => {
      const raceToRemove = document.getElementById(snap.key);
      raceToRemove.remove();
      console.log("Race removed");
    })
  },
  methods: {
    singout: function () {
      firebase.auth().signOut().then(() => {
          this.$router.replace("login")
        }).catch(function(error) {
          // An error happened.
        });
    },
    addRace : function () {
      this.userRaceRef.push({
        name : "another parkrun ;)",
        location: "Pzn",
        distance: 10,
        date: "01/01/2018"
      })
    },
    LogKey: function (key) {
      console.log(key);
    },
    RemoveRace: function(key) {
      this.userRaceRef.child(key).remove()
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
