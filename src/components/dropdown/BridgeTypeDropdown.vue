<template>
  <div>
    <div class="dropdown btn-group">
      <select v-model="selectedBridgeTypeId" >
        <option value="0">Sillatüüp</option>
        <option v-for="bridgeType in bridgeTypes" :key="bridgeType.bridgeTypeId" :value="bridgeType.bridgeTypeId">
          {{ bridgeType.bridgeType }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BridgeTypeDropdown',
  data() {
    return {
      selectedBridgeTypeId: 0,
      bridgeTypes: [
        {
          bridgeTypeId: 0,
          bridgeType: ''
        }
      ]
    }
  },
  methods: {
    getBridgeTypes() {
      this.$http.get("/types")
          .then(response => {
            this.bridgeTypes = response.data
          }).catch(error => {
        const errorResponseBody = error.response.data
      })
    }
  },

  mounted() {
    this.getBridgeTypes()
  },
}

</script>
