<template>
  <div class="d-flex flex-column justify-content-center w-100 h-100">
    <div class="container text-start">
      <div class="row">
        <div class="background-box2 col-2">
          <h2> {{ bridgeDetail.bridgeName }}</h2>
          <p>Nr: {{ bridgeDetail.bridgeNumber }}</p>
          <p>Pikkus {{ bridgeDetail.length }} meetrit</p>
          <p>Laius {{ bridgeDetail.width }} meetrit</p>
          <p>{{ bridgeDetail.materialName }} {{ bridgeDetail.bridgeTypeName }}</p>
          <p>{{ bridgeDetail.locationCountyName }}</p>
          <p>Latitude: {{ bridgeDetail.locationLatitude }}</p>
          <p>Longitude: {{ bridgeDetail.locationLongitude }}</p>
          <p>Seisundiindeks: {{ bridgeDetail.conditionIndex }}</p>
        </div>
        <div class="col-8">
          <img :src="bridgeDetail.imageData">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BridgeImage from "@/components/BridgeImage.vue";

export default {
  name: 'BridgeDetailsInfo',
  components: {BridgeImage},
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
        materialName: "string",
        imageData: "string"
      }
    }
  },
  methods: {
    fetchBridgeDetails() {
      const bridgeId = this.$route.params.id;
      this.$http.get(`/bridge/${bridgeId}`).then(response => {
        this.bridgeDetail = response.data;
      });
    },
  },
  mounted() {
    this.fetchBridgeDetails();
  }
}
</script>
