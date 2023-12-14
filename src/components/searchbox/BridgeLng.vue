<template>
  <div>
      <div class="search input-group">
        <span id="basic-addon1"></span>
        <input v-model="bridgelng" aria-describedby="basic-addon1" aria-label="BridgeLng" class="form-control"
               placeholder="Longitude"
               type="number">
      </div>
  </div>
</template>

<script>
export default {
  name: 'BridgeLng',
  data() {
    return {
      bridgelng: ''
    }
  },

}

</script>
