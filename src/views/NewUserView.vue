<template>
  <div class="text-center text-primary"><h4>LOO UUS KONTO!</h4></div>
  <div class="container text-center new-user-background-image" @keydown.enter="addUser">
    <div class="row justify-content-center new-user-row-position">
      <SuccessAlert :error-message="successMessage"/>
      <ErrorAlert :error-message="errorMessage"/>
      <div class="col col-2">
        <div class="col mb-2">
          <input v-model="username" class="form-control" placeholder="Kasutajanimi" type="text">
        </div>
        <div class="col mb-2">
          <input v-model="password" class="form-control" placeholder="Parool" type="text">
        </div>
      </div>
      <div>
        <button class="btn btn-outline-primary new-user-button mb-2" type="submit" @click="addUser" >Lisa kasutaja </button>
      </div>
      <div>
        <button class="btn btn-outline-primary new-user-button" type="submit" @click="goLogin">Tagasi</button>
      </div>
    </div>
  </div>


</template>


<script>
import router from "@/router";
import ErrorAlert from "@/components/alert/ErrorAlert.vue";
import SuccessAlert from "@/components/alert/SuccessAlert.vue";

export default {
  name: "NewUserView",
  components: {ErrorAlert,SuccessAlert},
   data() {
    return {
      errorMessage: '',
      successMessage: '',
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

    addUser() {
      if (this.allRequiredFieldsAreFilled()) {
        this.addUserRequest();
      } else {
        this.handleRequiredFieldsAlert();
      }
    },
    goLogin() {
        router.push({name: 'loginRoute'})
    },
    allRequiredFieldsAreFilled() {
      return this.username.length > 0 && this.password.length > 0
    },

    addUserRequest() {
      this.$http.get("/adduser", {
        params: {
          username: this.username,
          password: this.password
        },
      }).then(response => {
        this.loginResponse = response.data
        this.handleSuccessfulAdd();
      }).catch(error => {
        this.handleUnsuccessfulAdd(error);
      })
    },
    handleSuccessfulAdd() {
      //sessionStorage.setItem('userId', this.loginResponse.userId)
      //sessionStorage.setItem('roleName', this.loginResponse.roleName)
      this.successMessage= 'Kasutaja '+this.username+' lisamine õnnestus'
      setTimeout(this.resetErrorMessage, 3000)
      setTimeout(()=>router.push({name: 'loginRoute'}),3000)
    },
    handleUnsuccessfulAdd(error) {
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
      this.successMessage = ''
      this.errorMessage = ''
    }
  }
}

</script>


