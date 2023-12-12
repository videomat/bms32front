<template>
  <div class="container text-center background-image" @keydown.enter="login">
    <div class="row justify-content-center row-position">
      <ErrorAlert :error-message="errorMessage"/>
      <div class="col col-2">
        <div class="col mb-2">
          <input v-model="username" class="form-control" placeholder="Kasutaja" type="text">
        </div>

        <div class="col mb-2">
          <input v-model="password" class="form-control" placeholder="Parool" type="text">
        </div>
        <button class="btn btn-outline-primary" type="submit" @click="login">Logi sisse</button>

      </div>
    </div>
  </div>


</template>


<script>
import router from "@/router";
import ErrorAlert from "@/components/alert/ErrorAlert.vue";

export default {
  name: "Loginview",
  components: {ErrorAlert},
  data() {
    return {
      errorMessage: '',
      username: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: '',
        errorResponse: {
          message: '',
          errorCode: 0
        }
      }
    }
  },
  methods: {

    login() {
      if (this.allRequiredFieldsAreFilled()) {
        this.sendLoginRequest();
      } else {
        this.handleRequiredFieldsAlert();
      }
    },
    adduser() {
      router.push({name: 'newUserRoute'})
    },
    allRequiredFieldsAreFilled() {
      return this.username.length > 0 && this.password.length > 0
    },

    sendLoginRequest() {
      this.$http.get("/login", {
        params: {
          username: this.username,
          password: this.password
        },
      }).then(response => {
        this.loginResponse = response.data
        this.handleSuccessfulLogin();
      }).catch(error => {
        this.handleUnsuccessfulLogin(error);
      })
    },
    handleSuccessfulLogin() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
      router.push({name: 'home'})
    },
    handleUnsuccessfulLogin(error) {
      this.errorResponse = error.response.data
      const httpStatusCode = error.response.status
      if (httpStatusCode === 403 && this.errorResponse.errorCode === 111) {
        this.errorMessage = this.errorResponse.message
        setTimeout(this.resetErrorMessage, 4000)
      } else {
        router.push({name: 'errorRoute'})
      }
    },
    handleRequiredFieldsAlert() {
      this.errorMessage = 'Täida kõik väljad!'
      setTimeout(this.resetErrorMessage, 5000)
    },
    resetErrorMessage() {
      this.errorMessage = ''
    }
  }
}

</script>

