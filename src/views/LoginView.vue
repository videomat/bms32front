<template>

  <div>


    <div class="input-group flex-nowrap">
      <input v-model="username" type="text" class="form-control" placeholder="Kasutaja">
    </div>

    <div class="input-group flex-nowrap">
      <input v-model="password" type="text" class="form-control" placeholder="Parool">
    </div>

    <button @click=login type="submit" class="btn btn-outline-primary">Logi sisse</button>

  </div>

</template>


<script>



</script>

