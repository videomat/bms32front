<template>

  <div>
    <div class="btn-group">
      <select>
        <option value="0">Kõik materjalid</option>
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
