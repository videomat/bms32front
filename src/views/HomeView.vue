<template>
  <div class="container text-center">
    <div class="row">
      <div class="col mb-1">
        <div>
          <BridgeNameSearch ref="bridgeNameSearchRef"/>
        </div>
        <div class="navbar bg-body-tertiary">
          <div>
            <BridgeNumberSearch ref="bridgeNumberSearchRef"/>
          </div>
        </div>
        <div class="container text-start">
          <div class="col mb-3">
            <h3>Filter</h3>
            <div class="row mb-1">
              <BridgeTypeDropdown ref="bridgeTypeDropdownRef"/>
            </div>
            <div class="row mb-1">
              <CountyDropdown ref="countyDropdownRef"/>
            </div>
            <div class="row mb-1">
              <BridgeMaterialDropdown ref="bridgeMaterialDropdownRef"/>
            </div>
            <div class="row mb-1">
              <BridgeLengthSearch ref="bridgeLengthSearchRef"/>
            </div>
            <div class="row mb-1">
              <BridgeWidthSearch ref="bridgeWidthSearchRef"/>
            </div>
            <div class="row mb-3">
              <ConditionIndexSearch ref="conditionIndexSearchRef"/>
            </div>
            <div class="row">
              <button @click="sendBridgeSearchRequest" class="btn btn-outline-secondary" type="button">Otsi</button>
            </div>
            <div class="col">
              <div class="form-check form-switch">
                <input id="flexSwitchCheckChecked" checked class="form-check-input" role="switch" type="checkbox">
                <label class="form-check-label" for="flexSwitchCheckChecked">Filter ON/OFF</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <Googlemap/>
      </div>
    </div>
  </div>
</template>

<script>
import Googlemap from "@/components/Googlemap.vue";
import BridgeTypeDropdown from "@/components/dropdown/BridgeTypeDropdown.vue";
import CountyDropdown from "@/components/dropdown/CountyDropdown.vue";
import BridgeMaterialDropdown from "@/components/dropdown/BridgeMaterialDropdown.vue";
import BridgeLengthSearch from "@/components/searchbox/BridgeLengthSearch.vue";
import BridgeWidthSearch from "@/components/searchbox/BridgeWidthSearch.vue";
import ConditionIndexSearch from "@/components/searchbox/ConditionIndexSearch.vue";
import BridgeNameSearch from "@/components/searchbox/BridgeNameSearch.vue";
import BridgeNumberSearch from "@/components/searchbox/BridgeNumberSearch.vue";

export default {
  name: 'HomeView',
  components: {
    BridgeNumberSearch,
    BridgeNameSearch,
    ConditionIndexSearch,
    BridgeWidthSearch,
    BridgeLengthSearch,
    BridgeMaterialDropdown,
    CountyDropdown,
    BridgeTypeDropdown,
    Googlemap
  },
  data() {
    return {
      bridgeSearchRequest: {
        bridgeName: '',
        bridgeNumber: 0,
        bridgeTypeId: 0,
        countyId: 0,
        materialTypeId: 0,
        bridgeLengthStart: 0,
        bridgeLengthEnd: 0,
        bridgeWidthStart: 0,
        bridgeWidthEnd: 0,
        conditionIndexStart: 0,
        conditionIndexEnd: 0
      }
    }
  },
  methods: {


    sendBridgeSearchRequest: function () {
      this.bridgeSearchRequest.bridgeName = this.$refs.bridgeNameSearchRef.bridgeName
      this.bridgeSearchRequest.bridgeNumber = this.$refs.bridgeNumberSearchRef.bridgeNumber
      this.bridgeSearchRequest.bridgeTypeId = this.$refs.bridgeTypeDropdownRef.selectedBridgeTypeId
      this.bridgeSearchRequest.countyId = this.$refs.countyDropdownRef.selectedCountyId
      this.bridgeSearchRequest.materialTypeId = this.$refs.bridgeMaterialDropdownRef.selectedBridgeMaterialId
      this.bridgeSearchRequest.bridgeLengthStart = this.$refs.bridgeLengthSearchRef.bridgeLengthStart
      this.bridgeSearchRequest.bridgeLengthEnd = this.$refs.bridgeLengthSearchRef.bridgeLengthEnd
      this.bridgeSearchRequest.bridgeWidthStart = this.$refs.bridgeWidthSearchRef.bridgeWidthStart
      this.bridgeSearchRequest.bridgeWidthEnd = this.$refs.bridgeWidthSearchRef.bridgeWidthEnd
      this.bridgeSearchRequest.conditionIndexStart = this.$refs.conditionIndexSearchRef.conditionIndexStart
      this.bridgeSearchRequest.conditionIndexEnd = this.$refs.conditionIndexSearchRef.conditionIndexEnd
      this.postBridgeSearchRequest();
    },

    postBridgeSearchRequest: function () {
      this.$http.post("/bridges/location/by-criteria", this.bridgeSearchRequest
      ).then(response => {
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

  }
}
</script>
