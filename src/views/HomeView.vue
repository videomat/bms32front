<template>
  <div class="container text-center">
    <div class="row">
      <div class="col mb-1">
        <BridgeNameSearch ref="bridgeNameSearchRef"/>
        <nav class="navbar bg-body-tertiary">
          <form class="container-fluid">
            <div class="input-group">
              <span id="basic-addon1" class="input-group-text">🔍</span>
              <input aria-describedby="basic-addon1" aria-label="BridgeNr" class="form-control"
                     placeholder="Silla number"
                     type="text">
            </div>
          </form>
        </nav>
        <div class="container text-start">
          <div class="col mb-3">
            <h3>Filter</h3>
            <div class="row mb-1">
              <BridgeTypeDropdown/>
            </div>
            <div class="row mb-1">
              <CountyDropdown/>
            </div>
            <div class="row mb-1">
              <BridgeMaterialDropdown/>
            </div>
            <div class="row mb-1">
              <BridgeLengthSearch/>
            </div>
            <div class="row mb-1">
              <BridgeWidthSearch/>
            </div>
            <div class="row mb-3">
              <ConditionIndexSearch/>
            </div>
            <div class="row">
              <button class="btn btn-outline-secondary" type="button">Otsi</button>
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

export default {
  name: 'HomeView',
  components: {
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
    return{
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
  methods:{


    sendBridgeSearchRequest: function () {
      this.bridgeSearchRequest.bridgeName = this.$refs.bridgeNameSearchRef.bridgeName



      this.postBridgeSearchRequest();
    },

    postBridgeSearchRequest: function () {
      this.$http.post("/some/path", this.bridgeSearchRequest
      ).then(response => {
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

  }
}
</script>
