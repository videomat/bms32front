
<template>
<h1>VIGA!</h1>
  <div>
    <button class="btn btn-outline-primary" type="submit" @click="goLogin">Tagasi</button>
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: 'ErrorView',


  methods: {
    goLogin() {
      router.push({name: 'loginRoute'})
    }
  }
}
</script>
