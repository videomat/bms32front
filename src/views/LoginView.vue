<template>
  <div class="container text-center background-image">

      <div class="row justify-content-center row-position">

        <div class="col col-2">
          <div class="col mb-2">
            <input v-model="username" type="text" class="form-control" placeholder="Kasutaja">
          </div>

          <div class="col mb-2">
            <input v-model="password" type="text" class="form-control" placeholder="Parool">
          </div>
          <button @click=login type="submit" class="btn btn-outline-primary">Logi sisse</button>
        </div>

      </div>



  </div>


</template>


<script>


</script>

