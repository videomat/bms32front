<template>
  <LogOutModal ref="logOutModalRef" @event-execute-logout="executeLogOut"/>
  <nav>
    <template v-if="isLoggedIn">
      <router-link to="/home">Kodu</router-link>|
      <router-link to="/allbridges">Kõik sillad</router-link>|
      <template v-if="isAdmin">
        <router-link to="/changebridges">Muuda sillad</router-link>|
      </template>
      <a ref="#" class="link-underline-opacity-100-hover cursor-pointer" @click="handleLogOut">Logi välja</a>
    </template>
    <router-link v-if="!isLoggedIn" to="/"></router-link>
  </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>

import router from "@/router";
import LogOutModal from "@/components/modal/LogOutModal.vue";

export default {
  components: {LogOutModal},
  data() {
    return {
      isLoggedIn: false,
      isAdmin: false
    }
  },
  methods: {

    updateNavMenu() {
      const userId = sessionStorage.getItem('userId');
      this.isLoggedIn = userId !== null;
      console.log("isLoggedIn updated to:", this.isLoggedIn); // Debugging log

      const roleName = sessionStorage.getItem('roleName');
      this.isAdmin = roleName === 'admin';
      console.log("isAdmin updated to:", this.isAdmin); // Debugging log
    },

    handleLogOut() {
      this.$refs.logOutModalRef.$refs.modalRef.openModal()
    },

    executeLogOut() {
      sessionStorage.clear();
      this.updateNavMenu();
      router.push({ name: 'loginRoute' });
    }
  },
  watch: {
    '$route'() {
      this.updateNavMenu();
    },
    isLoggedIn(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateNavMenu();
      }
    }
  },
  mounted() {
    this.updateNavMenu();
  }
}

</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
