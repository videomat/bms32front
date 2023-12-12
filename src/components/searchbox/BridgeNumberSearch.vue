<template>
  <div>
    <form class="container-fluid">
      <div class="input-group">
        <span id="basic-addon1" class="input-group-text">🔍</span>
        <input v-model="bridgeNumber" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
               placeholder="Silla number"
               type="number">
      </div>
    </form>
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
