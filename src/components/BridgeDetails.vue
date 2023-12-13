<template>
  <div class="background-box2 row">
  <h2> {{ bridgeDetail.bridgeName }}</h2>
    <p>Nr: {{ bridgeDetail.bridgeNumber }}</p>
    <p>Pikkus {{ bridgeDetail.length }} meetrit</p>
    <p>Laius {{ bridgeDetail.width }} meetrit</p>
    <p>{{ bridgeDetail.materialName }} {{ bridgeDetail.bridgeTypeName }}</p>
    <p>Condition Index: {{ bridgeDetail.conditionIndex }}</p>
    <p>{{ bridgeDetail.locationCountyName }}</p>
    <p>Latitude: {{ bridgeDetail.locationLatitude }}</p>
    <p>Longitude: {{ bridgeDetail.locationLongitude }}</p>
  </div>
</template>


<script>
export default {
  name: 'BridgeDetailsInfo',
  data() {
    return {
      bridgeDetail: {
        bridgeId: 0,
        bridgeNumber: 0,
        bridgeName: "string",
        length: 0,
        width: 0,
        bridgeTypeName: "string",
        conditionIndex: 0,
        locationCountyName: "string",
        locationLatitude: 0,
        locationLongitude: 0,
        materialName: "string"
      }
    }
  },
  methods: {
    fetchBridgeDetails() {
      const bridgeId = this.$route.params.id;
      this.$http.get(`/bridge/${bridgeId}`).then(response => {
        this.bridgeDetail = response.data;
      });
    }
  },
  mounted() {
    this.fetchBridgeDetails();
  }
}
</script>