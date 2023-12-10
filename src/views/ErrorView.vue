
<template>
<h1>VIGA!</h1>
  <div>
    <button class="btn btn-outline-primary" type="submit" @click="goHome">Tagasi</button>
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: 'ErrorView',


  methods: {
    goHome() {
      router.push({name: 'home'})
    }
  }
}
</script>
