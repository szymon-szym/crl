<template>
  <div class="login">
    <h1> {{ title }} </h1>
    <input type="text" v-model="email" placeholder="user mail" value="">
    <input type="password" v-model="password" placeholder="user password" value="">
    <button v-on:click="login">Enter</button>
    <p>Do not have account? <router-link to="/register"> Create one</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: 'login',
  data () {
    return {
      title: 'This is login page',
      password : "",
      email : ""
    }
  },
  methods : {
    login : function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace("main");
        },
        (error) => {
        alert(error.message);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
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
