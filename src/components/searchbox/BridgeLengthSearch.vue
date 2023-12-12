<template>
<span>Silla pikkus [m]:</span>
    <div class="col-5">
      <input v-model="bridgeLengthStart" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
             min="0"
             placeholder="Alates"
             type="number">
    </div>
    <div class="col-5">
      <input v-model="bridgeLengthEnd" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
             placeholder="Kuni"
             type="number">
    </div>
</template>

<script>
export default {
  name: 'BridgeLengthSearch',
  data() {
    return{
      bridgeLengthStart: 0,
      bridgeLengthEnd: 0,
    }
  },

}

</script>
