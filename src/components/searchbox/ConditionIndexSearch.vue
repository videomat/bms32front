<template>
  <span><h6>Seisundiindeks [0-100]</h6></span>
  <div class="colsize">
    <input v-model="conditionIndexStart" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
           min="0"
           placeholder="Alates"
           type="number">
  </div>
  <div class="colsize">
    <input v-model="conditionIndexEnd" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
           placeholder="Kuni"
           type="number">
  </div>
</template>

<script>
export default {
  name: 'ConditionIndexSearch',

  data() {
    return {
      conditionIndexStart: 0,
      conditionIndexEnd: 0,
    }
  },

  methods: {
    maxConditionIndexValue() {
      if (this.setConditionIndex > 100) {
        this.setConditionIndex = 100
      }
    },
  },

}

</script>
