<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/races">Races</router-link> |
      <router-link to="/achievements">Ach</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link to="/calendar">Calendar</router-link> |
    </div> -->
    <router-view/>
    <notifications group="races" position="bottom right" />
  </div>
</template>

<script>
export default {
  //
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
