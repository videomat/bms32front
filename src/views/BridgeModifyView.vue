<template>
  <div class="d-flex flex-column justify-content-center w-100 h-100">
    <div class="container text-start">
      <div class="row">
        <div class="background-box col-3">
          <div>
            <BridgeNumber ref="bridgeNumberRef"/>
          </div>
          <div class="row mb-1">
            <BridgeName ref="bridgeNameRef"/>
            <div class="row mb-1">
              <BridgeLat ref="bridgeLatRef"/>
            </div>
          </div>
          <div class="fade-in container text-start">
            <div class=" row mb-2">
              <BridgeTypeDropdown ref="bridgeTypeDropdownRef"/>
            </div>
            <div class="row mb-2">
              <CountyDropdown ref="countyDropdownRef"/>
            </div>
            <div class="row mb-1">
              <BridgeMaterialDropdown ref="bridgeMaterialDropdownRef"/>
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <BridgeLength ref="bridgeLengthRef"/>
              </div>
              <div class="col-6">
                <BridgeWidth ref="bridgeWidthRef"/>
              </div>
            </div>
            <div class="row mb-3">
              <ConditionIndex ref="conditionIndexRef"/>
            </div>
            <div class="row mb-3">
            <ImageInput @event-emit-base64="setImageData"/>
          </div>
          </div>
          <button class="button btn-outline-secondary" type="button" @click="addNewBridge">Lisa
          </button>
        </div>
        <div class="col-3">
          <img :src="bridgeAddRequest.imageData">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountyDropdown from "@/components/dropdown/CountyDropdown.vue";
import BridgeWidth from "@/components/searchbox/BridgeWidth.vue";
import ConditionIndex from "@/components/searchbox/ConditionIndex.vue";
import BridgeTypeDropdown from "@/components/dropdown/BridgeTypeDropdown.vue";
import BridgeMaterialDropdown from "@/components/dropdown/BridgeMaterialDropdown.vue";
import BridgeLength from "@/components/searchbox/BridgeLength.vue";
import BridgeNumber from "@/components/searchbox/BridgeNumber.vue";
import BridgeName from "@/components/searchbox/BridgeName.vue";
import BridgeLat from "@/components/searchbox/BridgeLat.vue";
import BridgeLng from "@/components/searchbox/BridgeLng.vue";
import BridgeImage from "@/components/BridgeImage.vue";
import ImageInput from "@/components/ImageInput.vue";

export default {
  name: 'BridgeModifyView',
  components: {
    ImageInput,
    BridgeName,
    BridgeNumber,
    BridgeLength,
    BridgeMaterialDropdown,
    BridgeTypeDropdown,
    ConditionIndex,
    BridgeWidth,
    CountyDropdown,
    BridgeLat,
    BridgeLng,
    BridgeImage,
  },
  data() {
    return {
      bridgeAddRequest: {
        bridgeNumber: 0,
        bridgeName: "string",
        length: 0,
        width: 0,
        bridgeTypeId: 0,
        conditionIndex: 0,
        locationCountyId: 0,
        locationLatitude: 0,
        locationLongitude: 0,
        materialId: 0,
        imageData: "string",
        specialImageData: "string",
        interestingFactData: "string"

      }
    }
  },
  methods: {
    getAndSetBridgeAddRequestValues: function () {
      let str = this.bridgeAddRequest.locationLatitude = this.$refs.bridgeLatRef.bridgelat;
      const numbers = str.split(", ");
      const decimalNumbers = numbers.map(num => {
        const [integral, fractional] = num.split(".");
        const scale = BigInt(fractional.length);
        const bigintNum = BigInt(integral) * BigInt(10) ** scale + BigInt(fractional);
        return { bigint: bigintNum, scale };
      });

      this.bridgeAddRequest.bridgeNumber = this.$refs.bridgeNumberRef.bridgeNumber;
      this.bridgeAddRequest.bridgeName = this.$refs.bridgeNameRef.bridgeName;
      this.bridgeAddRequest.length = this.$refs.bridgeLengthRef.bridgeLength;
      this.bridgeAddRequest.width = this.$refs.bridgeWidthRef.bridgeWidth;
      this.bridgeAddRequest.bridgeTypeId = this.$refs.bridgeTypeDropdownRef.selectedBridgeTypeId;
      this.bridgeAddRequest.conditionIndex = this.$refs.conditionIndexRef.conditionIndex;
      this.bridgeAddRequest.locationCountyId = this.$refs.countyDropdownRef.selectedCountyId;
      this.bridgeAddRequest.locationLatitude = numbers[0]
      this.bridgeAddRequest.locationLongitude = numbers[1]
      this.bridgeAddRequest.materialId = this.$refs.bridgeMaterialDropdownRef.selectedBridgeMaterialId;
    },


    addNewBridge() {
      this.getAndSetBridgeAddRequestValues();
      // this.specialImageData = this.$refs.
      // this.interestingFactData = this.$refs.
      if (this.validateInput()) {
        this.postBridge();
      } else {
        alert('Palun täida kõik väljad');
      }
    },

    postBridge() {
      this.$http.post('/bridge', this.bridgeAddRequest)
          .then(response => {
            this.bridgeAddRequest = response.data;
            alert('Sild edukalt lisatud');
          })
          .catch(error => {
            console.error('Error:', error);
            alert('Uue silla lisamine ebaõnnestus');
          });
    },

    validateInput() {
      return this.bridgeAddRequest.bridgeNumber && this.bridgeAddRequest.bridgeName;
    },
    setImageData(imageData){
      this.bridgeAddRequest.imageData = imageData
    }
  }
}
</script>