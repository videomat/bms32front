<template>
  <div>
      <div class="search input-group">
        <span id="basic-addon1"></span>
        <input v-model="bridgelat" aria-describedby="basic-addon1" aria-label="BridgeLat" class="form-control"
               placeholder="longitude, latitude"
               type="text">
      </div>
  </div>
</template>

<script>
export default {
  name: 'BridgeLat',
  data() {
    return {
      bridgelat: ''
    }
  },

}

</script>
