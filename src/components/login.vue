<template>
  <div class="login">
    <h1> {{ title }} </h1>
    <p>Enter with Google</p>
    <img @click="loginGoogle" src="../assets/btn_google_light_normal_ios.svg" alt="googleBtn">
    <p>Enter with email</p>
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
      password : "12345678",
      email : "szymon@test.com"
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
    },
    loginGoogle: function () {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).then( result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        this.$router.replace("main");
        // ...
      }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
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
