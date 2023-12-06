<template>
  <div class="Googlemap">
    <GMapMap :center="center" :zoom="8" map-type-id="terrain" style="width: 50vw; height: 800px">
    </GMapMap>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 58.7746168, lng: 25.344824 },
    }
  },
}
</script>

<style>
</style>
