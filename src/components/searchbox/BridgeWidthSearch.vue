<template>
  <span>Silla laius [m]:</span>
  <div class="col-5">
    <input v-model="bridgeWidthStart" aria-describedby="basic-addon1" class="form-control"
           min="0"
           placeholder="Alates"
           type="number">
  </div>
  <div class="col-5">
    <input v-model="bridgeWidthEnd" aria-describedby="basic-addon1" class="form-control"
           placeholder="Kuni"
           type="number">
  </div>
</template>

<script>
export default {
  name: 'BridgeWidthSearch',
  data() {
    return{
      bridgeWidthStart: 0,
      bridgeWidthEnd: 0,
    }
  },

}

</script>
