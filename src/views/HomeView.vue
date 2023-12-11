<template>
  <div class="container text-center">
    <div class="row">
      <div class="col mb-1">
        <nav class="navbar bg-body-tertiary">
          <form class="container-fluid">
            <div class="input-group">
              <span id="basic-addon1" class="input-group-text">🔍</span>
              <input aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
                     placeholder="Silla nimi"
                     type="text">
            </div>
          </form>
        </nav>
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
            <div class="col mb-1">
              <BridgeTypeDropdown/>
            </div>
            <div class="col mb-1">
              <CountyDropdown/>
            </div>
            <div class="row mb-1">
              <div class="btn-group">
                <BridgeMaterialDropdown/>
              </div>
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
            <div class="row" >
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

export default {
  name: 'HomeView',
  components: {
    ConditionIndexSearch,
    BridgeWidthSearch,
    BridgeLengthSearch,
    BridgeMaterialDropdown,
    CountyDropdown,
    BridgeTypeDropdown,
    Googlemap
  },
}
</script>
