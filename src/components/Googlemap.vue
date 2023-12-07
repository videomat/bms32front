<template>
  <div class="Googlemap">
    <GMapMap :center="center" :zoom="7.7" map-type-id="terrain" style="width: 50vw; height: 700px">
    </GMapMap>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 58.5746168, lng: 25.044824 },
    }
  },
}
</script>

<style>
</style>
