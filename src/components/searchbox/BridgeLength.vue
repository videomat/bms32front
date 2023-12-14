<template>
<span><h6>pikkus [m]:</h6></span>
    <div class="col-11">
      <input v-model="bridgeLength" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
             min="0"
             type="number">
    </div>
</template>

<script>
export default {
  name: 'BridgeLengthSearch',
  data() {
    return{
      bridgeLength: 0,
    }
  },

}

</script>
