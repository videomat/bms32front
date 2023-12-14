<template>
  <div class="d-flex flex-column justify-content-center w-100 h-100">
    <div class="container text-start">
      <div class="row">
        <div class="background-box col-3 mb-1">
          <div>
            <BridgeNameSearch ref="bridgeNameSearchRef"/>
            <div>
              <BridgeNumberSearch ref="bridgeNumberSearchRef"/>
            </div>
          </div>
          <div class="fade-in container text-start">
            <div class="col mb-2">
              <h4>Filter</h4>
              <div class=" row mb-1">
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
              <div class="row mb-3">
                <button class="button btn-outline-secondary" type="button" @click="sendBridgeSearchRequest">Otsi
                </button>
              </div>
              <div class="row mb-3">
                <button class="button btn-filter btn-outline-secondary" type="button" @click="handleResetFilter">Reset
                  filter
                </button>
              </div>
              <div class="flexswitch row mb-3">
                <div class="form-check form-switch">
                  <input id="flexSwitchCheckChecked" v-model="searchPerformed" checked class="form-check-input"
                         role="switch" type="checkbox"
                  >
                  <label class="form-check-label" for="flexSwitchCheckChecked">Filter OFF/ON</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <Googlemap ref="googlemapRef" :bridge-search-request="bridgeSearchRequest"/>
        </div>
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
      searchPerformed: false,
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
    sendBridgeSearchRequest() {
      this.getAndSetBridgeSearchRequestValues()
      this.$refs.googlemapRef.getFilteredBridges()

    },

    getAndSetBridgeSearchRequestValues: function () {
      this.bridgeSearchRequest.bridgeName = this.$refs.bridgeNameSearchRef.bridgeName
      this.bridgeSearchRequest.bridgeNumber = this.$refs.bridgeNumberSearchRef.bridgeNumber
      this.bridgeSearchRequest.countyId = this.$refs.countyDropdownRef.selectedCountyId
      this.bridgeSearchRequest.bridgeTypeId = this.$refs.bridgeTypeDropdownRef.selectedBridgeTypeId
      this.bridgeSearchRequest.materialTypeId = this.$refs.bridgeMaterialDropdownRef.selectedBridgeMaterialId
      this.bridgeSearchRequest.bridgeLengthStart = this.$refs.bridgeLengthSearchRef.bridgeLengthStart
      this.bridgeSearchRequest.bridgeLengthEnd = this.$refs.bridgeLengthSearchRef.bridgeLengthEnd
      this.bridgeSearchRequest.bridgeWidthStart = this.$refs.bridgeWidthSearchRef.bridgeWidthStart
      this.bridgeSearchRequest.bridgeWidthEnd = this.$refs.bridgeWidthSearchRef.bridgeWidthEnd
      this.bridgeSearchRequest.conditionIndexStart = this.$refs.conditionIndexSearchRef.conditionIndexStart
      this.bridgeSearchRequest.conditionIndexEnd = this.$refs.conditionIndexSearchRef.conditionIndexEnd
    },

    temporaryResetFilter() {
      if (!this.searchPerformed) {
        this.handleResetFilter();
      } else {
        this.sendBridgeSearchRequest();
      }
    },


    handleResetFilter() {
      this.resetAllFields();
      this.$refs.googlemapRef.getAllBridges()
    },

    resetAllFields: function () {
      this.$refs.bridgeNameSearchRef.bridgeName = '',
          this.$refs.bridgeNumberSearchRef.bridgeNumber = 0,
          this.$refs.countyDropdownRef.selectedCountyId = 0,
          this.$refs.bridgeTypeDropdownRef.selectedBridgeTypeId = 0,
          this.$refs.bridgeMaterialDropdownRef.selectedBridgeMaterialId = 0,
          this.$refs.bridgeLengthSearchRef.bridgeLengthStart = 0,
          this.$refs.bridgeLengthSearchRef.bridgeLengthEnd = 0,
          this.$refs.bridgeWidthSearchRef.bridgeWidthStart = 0,
          this.$refs.bridgeWidthSearchRef.bridgeWidthEnd = 0,
          this.$refs.conditionIndexSearchRef.conditionIndexStart = 0,
          this.$refs.conditionIndexSearchRef.conditionIndexEnd = 0,
          this.searchPerformed = false
    },
  }
}
</script>
