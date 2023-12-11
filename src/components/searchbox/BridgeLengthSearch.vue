<template>
<span>Silla pikkus [m]:</span>
    <div class="col-2">
      <span id="basic-addon1" class="input-group-text">🔍</span>
    </div>
    <div class="col-5">
      <input aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
             min="0"
             placeholder="Alates"
             type="number">
    </div>
    <div class="col-5">
      <input aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
             placeholder="Kuni"
             type="number">
    </div>
</template>

<script>
export default {
  name: 'BridgeLengthSearch',

}

</script>
