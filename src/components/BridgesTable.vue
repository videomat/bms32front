<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Silla nr</th>
        <th scope="col">Nimi</th>
        <th scope="col">Pikkus [m]</th>
        <th scope="col">Laius [m]</th>
        <th scope="col">Seisundiindeks</th>
        <th scope="col">Materjal</th>
        <th scope="col">Tüüp</th>
        <th scope="col">Maakond</th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <tr v-for="(bridge, index) in allBridges" :key="index"> <!--      pole kindel milleks key index peab olema-->
        <th scope="row">{{index + 1}}</th>
        <td>{{bridge.bridgeNumber}}</td>
        <td>{{bridge.bridgeName}}</td>
        <td>{{bridge.bridgeLength}}</td>
        <td>{{bridge.bridgeWidth}}</td>
        <td>{{bridge.conditionIndex}}</td>
        <td>{{bridge.bridgeMaterial}}</td>
        <td>{{bridge.bridgeType}}</td>
        <td>{{bridge.locationCounty}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: 'BridgesTableInfo',
  data() {
    return {
      allBridges: {
        bridgeId: 0,
        bridgeNumber: 0,
        bridgeName: '',
        bridgeLength: 0,
        bridgeWidth: 0,
        bridgeType: '',
        conditionIndex: 0,
        locationCounty: '',
        bridgeMaterial: ''
      }
    }
  },

  methods: {
    getAllBridges() {
      this.$http.get('/bridges/overview/all').then(response => {
        this.allBridges = response.data
      })
    }
  },
  mounted() {
    this.getAllBridges()
  }


}
</script>


