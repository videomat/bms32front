<template>
  <GMapMap
      ref="myMapRef"
      :center="center"
      :zoom="7.7"
      map-type-id="terrain"
      style="width: 55vw; height: 700px"
  >
    <GMapMarker
        v-for="(bridge, index) in bridges"
        :key="index"
        :clickable="true"
        :name="String"
        :position="bridge.position"
        @click="center=bridge.position,openMarker(bridge.bridgeId)"
        @closeclick="openMarker(null)"
    >

      <GMapInfoWindow
          :closeclick="true"
          :opened="openedMarkerID === bridge.bridgeId"
          @closeclick="openMarker(null)"
      >
        <div>
          <div>
            <table class="table">
              <div class="container text-center">
                <div class="row">

                  <button class="btn btn-primary" type="button" @click="navigateToBridgeDetailsView(bridge.bridgeId)">
                    {{ "Vaata " + bridge.bridgeName }}
                  </button>
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
import router from "@/router";

export default {
  name: 'Googlemap',
  props:{
    bridgeSearchRequest:{}
  },
  data() {
    return {
      openedMarkerID: null,
      center: {lat: 58.5746168, lng: 25.044824},
      bridges: [
        {
          bridgeId: 0,
          bridgeName: '',
          position: {
            lat: 0,
            lng: 0
          }
        }
      ]
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
        this.bridges = response.data;
      })
    },

    getFilteredBridges() {
      this.$http.post("/bridges/location/by-criteria", this.bridgeSearchRequest
      ).then(response => {
        this.bridges = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },


    navigateToBridgeDetailsView(bridgeId) {
      router.push({path:'/details/' + bridgeId})
    }
  },
  mounted() {
    this.getAllBridges();
  },
}

</script>
