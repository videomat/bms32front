<template>


  <div class="container text-center">
    <div class="row">
      <div class="col">

      </div>
      <div class="col">
        <nav>
          <router-link to="/login">Login</router-link>|
          <router-link to="/home">Home</router-link>|
          <router-link to="/allbridges">Kõik sillad</router-link>
        </nav>
      </div>
      <div class="col offset-md-1 align-content-end">
        <nav>
          <router-link to="/addUser">Uus kasutaja</router-link>|
          <a href="#">Logi välja </a>
        </nav>
      </div>
    </div>
  </div>


  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>