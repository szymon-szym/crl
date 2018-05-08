<template>
  <div class="">
    <div class="wrapper">
      <div class="header">
        <div @click="goTo('home')" class="menuBtn">Menu</div>
        <div @click="goTo('races')" class="menuBtn">Races</div>
        <div @click="goTo('achievements')" class="menuBtn">Achievements</div>
        <div @click="goTo('stats')" class="menuBtn">Stats</div>
      </div>
      <div class="header user">
        <div class="menuBtn user" @click="user = !user">User</div>
      </div>
    </div>
    <div v-if="!verUsers" class="verifBar">
      <span>You are not verified. Please apply via Intranet</span>
    </div>
    <div class="dropdown usMenu" ref= "dropdownMenu" v-if="user">
      <span> {{ userName }}</span>
      <div class="button" @click="singout">Singout</div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  data () {
    return {
      user: false,
      ver: false
    }
  },
  computed: {
      currentUser () {
        return this.$store.getters.getUser
      },
      verUsers () {
        let verUsers = JSON.parse(JSON.stringify(this.$store.getters.getVerUsers))
        for (let user of verUsers) {
          if ((user['.key']).includes(this.currentUser.uid)) {return true }
        }
        return false
      },
      userName () {
        let i = this.currentUser.email.indexOf('@')
        let name = this.currentUser.email.substring(0, i)
        return name
      }
      // emailMsg () {
      //   let msg = "szymon_mich?subject=Charity Running League&body=Hi, I want to verify my account (login: " + this.currentUser.email + "my Id: " + this.currentUser.uid + ")"
      //   return msg
      // }
    },
    created: function () {
      document.addEventListener('click', this.documentClick)
    },
    destroyed () {
      document.addEventListener('click', this.documentClick)
    },
  methods: {
    goTo: function(location) {
      this.$router.push(`/${location}`)
    },
    singout: function () {
      firebase.auth().signOut().then(() => {
          this.$router.replace('login')
          this.$store.dispatch('clearData')
      }).catch(function(error) {
          // error
      });
    },
    documentClick: function(e) {
        let el = this.$refs.dropdownMenu
        let target = e.target
        if (el !== undefined) {
          if ((el !== target) && !el.contains(target)) {
            this.user = false
          }
        }
      },
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 40px;
  padding: 5px;
  color: white;
  background-color: cadetblue;
}
.header {
  /* font-weight: bold; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: default;
}
.menuBtn {
  margin: 5px;
}
.user {
  padding: 5px;
}
.menuBtn:hover {
  margin-bottom: 4px;
  border-bottom: solid thin white;
  cursor: default;
}
/* dropdown */
.dropdown {
  position: absolute;
  top: 50px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: white;
  border: solid thin lightgrey;
  -webkit-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  -moz-box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  box-shadow: 10px 10px 15px -5px rgba(194,190,194,1);
  cursor: default;
}
.dropdown.usMenu{
  right:5px;
}
.dropdown.ver{
  left:5px;
  align-items: flex-start;
}
.button {
  background-color: PaleTurquoise;
  padding: 3px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-top: 5px;
}
.button:hover {
  background-color: Turquoise;
  cursor: default;
}
/* ver */
.verifBar {
  display: flex;
  flex-flow: row nowrap;
  padding: 5px;
  cursor: default;
  background-color: white;
}
.verMsgCont {
  width: 200px;
  /* border: solid thin red; */
}

@media (min-width: 800px) {
  .wrapper {
    height: 50px;
  }
  .menuBtn, .dropdown {
    /* font-size: 20px; */
  }
}

</style>

