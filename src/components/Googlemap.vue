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
                  {{ m.position.bridgeType }}
                </div>
                <div class="row">
                  Silla pikkus: {{ m.position.bridgeLength }} meetrit
                </div>
                <div class="row">
                  Silla laius: {{ m.position.bridgeWidth }} meetrit
                  <div/>
                  <div class="row">
                  </div>
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

  data() {
    return {
      openedMarkerID: null,
      center: {lat: 58.5746168, lng: 25.044824},


      markers: [
        {
          id: 1,
          position: {
            lat: 57.729548,
            lng: 26.917039,
            bridgeName: "Ala-rõuge",
            bridgeLength: '11.8',
            bridgeWidth: '11',
            bridgeType: 'Sild'

          },
        },
        {
          id: 2,
          position: {
            lat: 58.731887,
            lng: 23.992332,
            bridgeName: "Kaskari",
            bridgeLength: '307.8',
            bridgeWidth: '7',
            bridgeType: 'Sild'

          },
        },
      ],
    };
  },

  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
      if (id === null) {
        this.center = {lat: 58.5746168, lng: 25.044824}
      }
    },
  },
}

</script>

<style>
body {
}
</style>
