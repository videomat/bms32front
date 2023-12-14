<template>
  <div>
      <div class="search input-group">
        <span id="basic-addon1" class="input-group-text">🔍</span>
        <input v-model="bridgeNumber" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
               placeholder="Silla number"
               type="number">
      </div>
  </div>
</template>

<script>
export default {
  name: 'BridgeNumberSearch',
  data() {
    return{
      bridgeNumber: 0,
    }
  },

}

</script>
