<template>
  <div v-if="errorMessage.length > 0" class="alert alert-success" role="alert">
    {{errorMessage}}
  </div>
</template>

<script>
export default{

  name:'SuccessAlert',
  props:{
    errorMessage: String
  }
}
</script>
