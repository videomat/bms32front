<template>

  <div>
    <div class="dropdown btn-group">
      <select v-model="selectedBridgeMaterialId">
        <option value="0">Materjal</option>
        <option v-for="bridgeMaterial in bridgeMaterials" :value="bridgeMaterial.materialId">{{bridgeMaterial.materialName}}</option>
      </select>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BridgeMaterialDropdown',

  data() {
    return {
      selectedBridgeMaterialId: 0,
      bridgeMaterials: [
        {
          materialId: 0,
          materialName: '',
        }
      ]
    }
  },
  methods: {
    getBridgeMaterials() {
      this.$http.get('/material')
          .then(response => {
            this.bridgeMaterials = response.data
      })
    },
  },
  mounted() {
    this.getBridgeMaterials()
  },
}
</script>
