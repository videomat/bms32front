<template>
  <GMapMap
      ref="myMapRef"
      :center="center"
      :zoom="7.7"
      map-type-id="terrain"
      style="width: 50vw; height: 700px"
  >
    <GMapMarker
        v-for="(m, index) in markers"
        :key="index"
        :clickable="true"
        :name="String"
        :position="m.position"
        @click="center=m.position,openMarker(m.id)"
        @closeclick="openMarker(null)"
    >

      <GMapInfoWindow
          :closeclick="true"
          :opened="openedMarkerID === m.id"
          @closeclick="openMarker(null)"
      >
        <div>
          <div>
            <table class="table">
              <div class="container text-center">
                <div class="row">
                  {{ m.position.bridgeName }}
                  <button class="btn btn-outline-primary" type="submit">Rohkem infot</button>
                </div>
              </div>
            </table>
          </div>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
</template>

<script>
export default {
  name: 'AllBridgeLocations',
  data() {
    return {
      openedMarkerID: null,
      center: {lat: 58.5746168, lng: 25.044824},
      markers: [
        {
          id: 1,
          position: {
            lat:0,
            lng:0,
            bridgeName: "",
          },
        },
      ],
      allBridgeLocations: {
        bridgeId: 0,
        bridgeName: "string",
        locationLatitude: 0,
        locationLongitude: 0
      }
    }
  },

  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
      if (id === null) {
        this.center = {lat: 58.5746168, lng: 25.044824}
      }
    },

    getAllBridges() {
      this.$http.get('/bridges/location/all').then(response => {
        this.allBridgeLocations = response.data;
        this.processBridgeData();
      })
    },

    processBridgeData() {
      this.markers = this.allBridgeLocations.map(bridge => ({
        id: bridge.bridgeId,
        position: {
          lat: bridge.locationLatitude,
          lng: bridge.locationLongitude,
          bridgeName: bridge.bridgeName,
        }
      }));
    }
  },
  mounted() {
    this.getAllBridges();
  },
}

</script>
