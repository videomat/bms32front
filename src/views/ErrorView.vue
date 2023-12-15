<template>
    <div class="container text-start">
          <h1>God damn it (sad Rain)....something went very wrong..</h1>
          <img height="495" src="../assets/Error.png" width="720"/>
          <div>
            <button class="btn btn-outline-primary" type="submit" @click="goLogin">Tagasi</button>
          </div>
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
