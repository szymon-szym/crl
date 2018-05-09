<template>
  <div class="login">
    <div class="svgWrapper" v-if="intro">
      <svg viewBox="0 0 320.04 320.04" xmlns="http://www.w3.org/2000/svg">
        <path id="background" d="M319.4 160.02a158.7 158.7 0 0 1-158.7 158.7A158.7 158.7 0 0 1 2 160.02 158.7 158.7 0 0 1 160.7 1.32a158.7 158.7 0 0 1 158.7 158.7z" fill="none" stroke="navy" stroke-width=".6"/>
        <path id="runner" d="M149.45 78.74s1.39-8.83 5.6-10.78c0 0 6.9-4.85 12.74 2.72 0 0 2.77 2.97 2.3 7.82-.03.26-.63 2.37-.4 2.3 2.5-.67.86 2.95.25 3.6-1.2 1.3-1.2 1.3-2.01 1.04 0 0-2.97 3.93-3.59 5.97-.68 2.24.46 2.99.46 2.99s2.93-.18 5.02 1.26c2.1 1.45 10.76-1.08 14.9 1.45 4.16 2.52 22.25 1.27 23.87 1.27 1.62 0 12.77-7.95 12.77-7.95s8.42-5.02 9.87-6.56c1.14-1.2 20.09-10.1 18.65-6.68 0 0-6.56 3.33-7.28 3.5-.2.06 1.27.46 1.2 1.44-.06.65-1.64.91-1 1.33 2.43 1.57 0 2.03.52 2.45 2.32 1.88-1.19 2.9-1.19 2.9s-2.36.72-3.26.72c-.9 0-2.71.36-2.71.36s-.72.36-1.8.72c-1.09.36-2.53.72-2.53.72s-.18 0-1.09.9c-.9.9-4.83 5.29-6.13 6.55-1.51 1.46-8.09 5.77-8.09 5.77s-2.46 1.45-3.94 2.53c-.44.32-.4 1.25-5.11.57-1.2-.17-6.26.26-6.26.26s-8.59 3.82-19.37-.82c0 0-3.07-.4-3.25 1.57-.18 1.98-1.08 4.14-1.62 6.67-.55 2.53 1.08 7.22 1.08 7.22s-5.78 21.3-5.96 22.74c-.18 1.44 5.06 5.77 5.24 7.04.18 1.26.54 10.82.54 10.82s-1.63 7.58-.36 8.85c0 0 .9.54-.9 1.98-1.81 1.45-1.63 2.17-1.63 2.17s.18 11.19-.54 14.98c-.72 3.79-1.99 20.57-6.14 21.47 0 0-3.24.72-5.41-2.53 0 0-2.35-1.8-2.17-3.06l.18-1.27s-2.16-4.15-1.44-6.13l-.36-5.6s-1.26-.9-1.62-1.62c-.37-.72-.73-2.17-.73-2.17s-2.34 9.39-1.9 11.2c.46 1.8 0 6.13 0 6.13s1 3.2 0 5.12c-.98 1.92-1.16 4.62-1.16 4.62s1.8 4.88 1.17 7.58c-.63 2.71-2.26 13.9-2.26 13.9s-.54 15.16 0 16.24c.54 1.08 3.61 4.15 3.25 5.6-.36 1.44.72 2.34 1.26 3.6.55 1.27-.36 3.8-.36 3.8s1.99 2.52 1.09 2.88c-.9.36-7.58 2.53-8.49 3.25-.9.72-3.6-.54-3.97-1.62-.36-1.09.36-2.71 0-3.43a9.97 9.97 0 0 1-.59-2.17l-.58-2.7v-2.71s1.26-1.08.45-2.17c-.81-1.08.23-2.52.23-2.52l.74-1.09s-3.91-27.97-3.73-30.5c.18-2.52.39-9.38 1.29-9.38s.92-7.76.74-9.38c-.18-1.63-.97-2.47-1.69-4.27-.72-1.8-5.36-15.43-4.26-26.41.45-4.43-.17 3.16-3.79-1.2-1.2-1.45-3.02-.23-3.02-.23s-6.26 1.23-1.23-5.59c1.63-2.2 2.01-7.06 2-7.69-.02-1.06 1.17-.81 1.17-.81s4.2-10.11 5.28-10.11 2.14-1.8 2.14-1.8l-.64-1.99s-1.82-2.53-3.09-3.79c-1.26-1.26-1.28-13.17-1.28-13.17v-10.83s.92-5.6.92-6.32c0-.72-3.74-7.76-4.82-8.48-1.09-.72-14.3-1.05-23.3-9.5 0 0-1.26-.47-3.9-1.52-.54-.22-1.85-2.55-2.46-2.91-6.25-3.74-14.17-12.96-16.81-21.37 0 0-1.5-2.6-2.03-2.6-.54 0-5.17-2.1-6.29-2.77-2.8-1.68-5.21-4.61-3.7-5.65.47-.32-.53-1.5-.03-2.52.2-.43.48-.43.75-.82.35-.5.03-1.78.27-2.22.43-.8 1.57-.55 1.59-.32l-4.28-5.24s.51-2.1 3.75 1.19c1.34 1.35 4.75 3.86 7.43 7.1 3.61 4.38 6.47 9.5 6.47 9.5s6.11 5.07 10.69 9.69c5.6 5.65 9.9 11.11 10.42 11.58 1.43 1.28 5.1.97 18.6 6.66 1.1.48 4.45-1.64 14.97 3.43 0 0 2.84-1.56 5.6-2.71 1.7-.72.54-3.43.54-3.43s-.57-4-1.08-4.16c-.27-.08-1.09-1.26-1.09-1.26s-.81-4.05-.18-4.51c.58-.43 1.63.18 1.63.18z" fill="none" stroke="navy" stroke-width=".7"/>
        <g id="filledLogo" transform="translate(.67)">
          <circle cx="160.02" cy="160.02" r="158.7" fill="#0ff" opacity=".36" stroke="#f9f9f9" stroke-width="2.63"/>
          <path d="M148.78 78.74s1.39-8.83 5.6-10.78c0 0 6.9-4.85 12.74 2.72 0 0 2.77 2.97 2.3 7.82-.03.26-.63 2.37-.4 2.3 2.5-.67.86 2.95.25 3.6-1.2 1.3-1.2 1.3-2.01 1.04 0 0-2.97 3.93-3.59 5.97-.68 2.24.46 2.99.46 2.99s2.93-.18 5.02 1.26c2.1 1.45 10.76-1.08 14.9 1.45 4.16 2.52 22.25 1.27 23.87 1.27 1.62 0 12.77-7.95 12.77-7.95s8.42-5.02 9.87-6.56c1.14-1.2 20.09-10.1 18.65-6.68 0 0-6.56 3.33-7.28 3.5-.2.06 1.27.46 1.2 1.44-.06.65-1.64.91-1 1.33 2.43 1.57 0 2.03.52 2.45 2.32 1.88-1.19 2.9-1.19 2.9s-2.36.72-3.26.72c-.9 0-2.71.36-2.71.36s-.72.36-1.8.72c-1.09.36-2.53.72-2.53.72s-.18 0-1.09.9c-.9.9-4.83 5.29-6.13 6.55-1.51 1.46-8.09 5.77-8.09 5.77s-2.46 1.45-3.94 2.53c-.44.32-.4 1.25-5.11.57-1.2-.17-6.26.26-6.26.26s-8.59 3.82-19.37-.82c0 0-3.07-.4-3.25 1.57-.18 1.98-1.08 4.14-1.62 6.67-.55 2.53 1.08 7.22 1.08 7.22s-5.78 21.3-5.96 22.74c-.18 1.44 5.06 5.77 5.24 7.04.18 1.26.54 10.82.54 10.82s-1.63 7.58-.36 8.85c0 0 .9.54-.9 1.98-1.81 1.45-1.63 2.17-1.63 2.17s.18 11.19-.54 14.98c-.72 3.79-1.99 20.57-6.14 21.47 0 0-3.24.72-5.41-2.53 0 0-2.35-1.8-2.17-3.06l.18-1.27s-2.16-4.15-1.44-6.13l-.36-5.6s-1.26-.9-1.62-1.62c-.37-.72-.73-2.17-.73-2.17s-2.34 9.39-1.9 11.2c.46 1.8 0 6.13 0 6.13s1 3.2 0 5.12c-.98 1.92-1.16 4.62-1.16 4.62s1.8 4.88 1.17 7.58c-.63 2.71-2.26 13.9-2.26 13.9s-.54 15.16 0 16.24c.54 1.08 3.61 4.15 3.25 5.6-.36 1.44.72 2.34 1.26 3.6.55 1.27-.36 3.8-.36 3.8s1.99 2.52 1.09 2.88c-.9.36-7.58 2.53-8.49 3.25-.9.72-3.6-.54-3.97-1.63-.36-1.08.36-2.7 0-3.42a9.97 9.97 0 0 1-.59-2.17l-.58-2.7v-2.71s1.26-1.09.45-2.17c-.81-1.08.23-2.52.23-2.52l.74-1.09s-3.91-27.97-3.73-30.5c.18-2.52.39-9.38 1.29-9.38s.92-7.76.74-9.38c-.18-1.63-.97-2.47-1.69-4.27-.72-1.8-5.36-15.43-4.26-26.41.45-4.43-.17 3.15-3.79-1.2-1.2-1.45-3.02-.23-3.02-.23s-6.26 1.23-1.23-5.59c1.63-2.2 2.01-7.06 2-7.69-.02-1.06 1.17-.81 1.17-.81s4.2-10.11 5.28-10.11 2.14-1.8 2.14-1.8l-.64-1.99s-1.82-2.53-3.09-3.79c-1.26-1.26-1.28-13.17-1.28-13.17v-10.83s.92-5.6.92-6.32c0-.72-3.74-7.76-4.82-8.48-1.09-.72-14.3-1.05-23.3-9.5 0 0-1.26-.47-3.9-1.52-.54-.22-1.85-2.55-2.46-2.91-6.25-3.74-14.17-12.96-16.81-21.37 0 0-1.5-2.6-2.03-2.6-.55 0-5.17-2.1-6.29-2.77-2.8-1.68-5.21-4.61-3.7-5.65.47-.32-.54-1.5-.03-2.52.2-.43.48-.43.75-.82.35-.5.03-1.78.27-2.22.43-.8 1.56-.55 1.59-.32l-4.28-5.24s.51-2.1 3.75 1.19c1.34 1.35 4.74 3.86 7.42 7.1 3.62 4.38 6.48 9.5 6.48 9.5s6.11 5.07 10.69 9.69c5.6 5.65 9.9 11.11 10.42 11.58 1.43 1.28 5.1.97 18.6 6.66 1.1.48 4.45-1.64 14.97 3.43 0 0 2.84-1.56 5.6-2.71 1.7-.72.54-3.44.54-3.44s-.57-3.98-1.09-4.15c-.27-.08-1.08-1.26-1.08-1.26s-.81-4.05-.18-4.51c.58-.43 1.63.18 1.63.18z" fill="navy" stroke="navy" stroke-width=".7"/>
          <path d="M171.43 296.88c-7.95-7.66-16.4-15.86-18.78-18.21l-4.33-4.3 4.62-1.76c3.2-1.23 4.55-2.03 4.39-2.6a48.4 48.4 0 0 1-.69-3.8c-.71-4.76-1.45-6.98-3.17-9.58-1.62-2.45-1.62-2.46-1.37-11.2.15-4.81.76-11.86 1.36-15.66.89-5.58.98-7.52.46-10.04-.49-2.4-.46-3.72.15-5.78.51-1.73.7-4.62.54-8.28-.23-4.93.45-11.8 1.28-13.15.16-.26.8.18 1.43.97.83 1.06 1.13 2.39 1.13 5 0 1.96.3 4.31.66 5.23.36.91.7 2.25.74 2.96.04.72 1.1 2.38 2.34 3.7 2.79 2.93 5.67 3.3 7.23.93 2.44-3.72 4.97-18.49 4.98-29.01 0-6.02.1-6.64 1.33-7.79 1.28-1.2 1.33-1.62 1.33-11.77v-10.52l-5.53-6.73 2.33-8.74 2.98-11.23c.44-1.7.46-3.53.06-5.85-.32-1.86-.37-4.18-.1-5.2l1.13-4.33c.56-2.18.86-2.51 2.25-2.5.88 0 2.9.4 4.5.88 3.37 1.02 10.95 1.16 13.94.26 1.14-.35 4.32-.64 7.08-.65l5.03-.03 6.4-4.19c3.95-2.58 7.8-5.71 10.09-8.18 3.7-3.99 6.8-5.74 10.38-5.84.81-.03 2.4-.36 3.54-.75 1.86-.63 2.08-.94 2.13-2.94.04-1.23-.19-2.39-.5-2.58-.34-.2-.26-.55.2-.83.55-.34.58-.68.11-1.25-.5-.62.04-1.09 2.57-2.2l3.21-1.4 4.56 4.37c26.76 25.72 62.37 64.25 62.65 65 10.51 78.03-47.74 147.81-124.06 167.1-.52 0-12.63-9.87-20.58-17.53z" fill="teal" opacity=".36"/>
        </g>
      </svg>
    </div>
    <transition name="fade">
      <div class="contentWrapper" v-if="!intro">
        <h1> Charity Running League!</h1>
        <h2> Please log in </h2>
        <div class="form">
          <button class="enterBtn" @click="loginGoogle" >
            <img src="../assets/login/Google-favicon-2015.png" alt="googleBtn">
            <div class="btnTxt">Continue with Google</div>
          </button>        
          <button class="enterBtn" @click="emailForm = !emailForm" >
            <img src="../assets/login/email1.svg" alt="emailBtn">
            <div class="btnTxt">Use your login</div>
          </button>
          <transition name="fade">
            <div class="emailForm" v-if="emailForm">
              <input type="text" v-model="email" placeholder="user login (no special chars)" value="">
              <input type="password" v-model="password" placeholder="user password (min 6 chars)" value="">
              <div class="buttonsWrapper">
                <div class="button" @click="login">Enter</div>
                <span>or</span>
                <div class="button register" @click="registerF">Register</div>
              </div>
            </div>
          </transition>
        </div>
          <div class="buttonSlide"  @click="onboard = !onboard">Click to see introduction</div>
          <!-- <transition name="fade"> -->
            <onboard v-if="onboard"></onboard>
          <!-- </transition> -->
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from 'firebase'
import anime from 'animejs'
// import onboard from "./onboard.vue"
export default {
  name: 'login',
  components: {
    // 'onboard': onboard
  },
  data () {
    return {
      password : '',
      email : '',
      rpassword : '',
      remail : '',
      emailForm: false,
      register: false,
      intro: true,
      onboard: false
    }
  },
  mounted: function () {
    this.animLogo()
  },
  computed: {
  //
  },
  methods : {
    login : function () {
      firebase.auth().signInWithEmailAndPassword((this.email + '@mail.com'), this.password).then(
        (user) => {
          this.$router.replace("home");
        },
        (error) => {
        alert(error.message);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },
    registerF: function () {
      
      firebase.auth().createUserWithEmailAndPassword((this.email + '@mail.com'), this.password).then(
        (user) => {
            this.$router.replace("home")
          },
        (error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(error.message);
        });
    },
    animLogo: function () {
      let timeline = anime.timeline()
      timeline
        .add({
        targets: '#background',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
        })
        .add({
        targets: '#runner',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
        })
        .add({
          targets: '#runner, #background',
          duration: 500
        })
        // .add({
        //   targets: '#filledLogo',
        //   opacity: 1,
        //   duration: 1500
        // })
        // .add({
        //   targets: '#background',
        //   opacity: 0,
        //   duration: 1500,
        //   offset: '-=1500'
        // })
      timeline.finished.then(()=> {
        this.intro = false;
      })
    },
    loginGoogle: function () {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
      .then( result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin: auto;
}
h1, h2, h3 {
  font-weight: normal;
  font-family: Avenir, sans-serif;
}
a {
  color: #42b983;
  cursor: default;
}
/* loginform */
.form {
  width: 290px;
  margin: auto;
  padding: 20px;
  border: solid thin lightgrey;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  -webkit-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  -moz-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
}
/* google btn */
button {
  all: unset;
}
.enterBtn {
  font-family: 'Roboto', sans-serif;
  margin: 0px 0px 10px 0px;
  width: 250px;
  height: 45px;
  border: solid thin lightgrey;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: default;
}
.enterBtn:hover  {
  border-color: darkBlue;
  cursor: default;
}
.enterBtn:active  {
  border-color: darkBlue;
  cursor: default;
}
.btnTxt {
  padding: 10px;
}
.emailForm {
  width: 250px;
  max-width: 250px;
  border: solid thin lightgrey;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items:center;
  -webkit-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  -moz-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
}
.buttonsWrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.button {
  background-color: lightgrey;
  padding: 3px 8px 3px 8px;
  margin: 10px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 13px;
  cursor: default;
}
.button.register {
  background-color: aquamarine;
}
.button:hover {
  background-color: Turquoise;
  cursor: default;
}
input {
  width: 230px;
  margin: 10px 10px 10px 10px;
}
/* svg animation */
.svgWrapper{
  width: 300px;
  margin:auto;
}
#runner {
  stroke-dasharray: 871;
  stroke-dashoffset: -871;
}
#shadow {
  stroke-dasharray: 694;
  stroke-dashoffset: -694;
}
#background {
  stroke-dasharray: 998;
  stroke-dashoffset: -998;
}
#filledLogo {
  opacity: 0;
}
/* transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/* Introduction */
.buttonSlide {
  background-color: lightgrey;
  padding: 3px 10px 3px 10px;
  height: 30px;
  width: 290px;
  margin: 20px auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: default;
}
.buttonSlide:hover {
  background-color: Turquoise;
  cursor: default;
}
</style>
