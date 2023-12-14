<template>
  <span><h6>laius [m]:</h6></span>
  <div class="col-11">
    <input v-model="bridgeWidth" aria-describedby="basic-addon1" class="form-control"
           min="0"
           type="number">
  </div>
</template>

<script>
export default {
  name: 'BridgeWidthSearch',
  data() {
    return {
      bridgeWidth: 0,

  }
  },
}

</script>
