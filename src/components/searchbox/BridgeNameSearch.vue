<template>
  <div>
      <div class="search input-group">
        <span id="basic-addon1" class="input-group-text">🔍</span>
        <input v-model="bridgeName" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
               placeholder="Silla nimi"
               type="text">
      </div>
  </div>
</template>

<script>
export default {
  name: 'BridgeNameSearch',
  data() {
    return {
      bridgeName: ''
    }
  },

}

</script>
