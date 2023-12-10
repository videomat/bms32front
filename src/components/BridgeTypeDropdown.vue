<template>
  <div>
    <div class="btn-group">
      <button aria-expanded="false" class="btn btn-secondary dropdown-toggle" data-bs-auto-close="true"
              data-bs-toggle="dropdown" type="button">
        Silla materjal
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" v-for="bridgeType in bridgeTypes" :key="bridgeType.bridgeTypeId"
               :value="bridgeType.bridgeTypeId">{{ bridgeType.bridgeType }}</a></li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BridgeTypeDropdown',
  data() {
    return {
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
          })
    },
  },


  mounted() {
    this.getBridgeTypes()
  }
}

</script>
