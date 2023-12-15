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
          <button v-if="isAdmin" @click="updateBridgeDetails">Muuda</button>
          <button v-if="isAdmin" @click="deleteBridge">Kustuta</button>
        </div>
        <div class="col-8">
          <img :src="bridgeDetail.imageData" alt="">
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
        imageData: "string",
        isAdmin: false
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
    deleteBridge() {
      if (confirm("Kas oled kindel, et soovid silla info kustutada?")) {
        const bridgeId = this.bridgeDetail.bridgeId;
        if (!bridgeId) {
          alert("Silla ID on puudu");
          return;
        }

        this.$http.delete(`/bridge?bridgeId=${bridgeId}`)
            .then(response => {
              alert("Silla info kustutamine õnnestus");
              this.$router.push('/home');
            })
            .catch(error => {
              console.error("Error Silla kustutamisel:", error);
              alert("Silla kustutamine ebaõnnestus");
            });
      }
    },

    checkAdminStatus() {
      const roleName = sessionStorage.getItem('roleName');
      this.isAdmin = roleName === 'admin';
    },
    updateBridgeDetails() {
      const bridgeId = this.bridgeDetail.bridgeId;
      if (!bridgeId) {
        alert("Silla ID on puudu");
        return;
      }

      this.$http.put(`/bridge/${bridgeId}`, {
        bridgeNumber: this.bridgeDetail.bridgeNumber,
        bridgeName: this.bridgeDetail.bridgeName,
        length: this.bridgeDetail.length,
        width: this.bridgeDetail.width,
        bridgeTypeId: this.bridgeDetail.bridgeTypeId,
        conditionIndex: this.bridgeDetail.conditionIndex,
        locationCountyId: this.bridgeDetail.locationCountyId,
        locationLatitude: this.bridgeDetail.locationLatitude,
        locationLongitude: this.bridgeDetail.locationLongitude,
        materialId: this.bridgeDetail.materialId,
        imageData: this.bridgeDetail.imageData,
        specialImageData: this.bridgeDetail.specialImageData,
        interestingFactData: this.bridgeDetail.interestingFactData
      })
          .then(response => {
            alert("Silla info uuendamine õnnestus");
            // You might want to do something here, like redirecting the user
          })
          .catch(error => {
            console.error("Error Silla uuendamisel:", error);
            alert("Silla uuendamine ebaõnnestus");
          });
    }
  },
  mounted() {
    this.fetchBridgeDetails();
    this.checkAdminStatus();
  }
}
</script>