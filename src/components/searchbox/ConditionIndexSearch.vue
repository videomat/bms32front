<template>
  <span>Seisundiindeks [0-100]:</span>
  <div class="col-5">
    <input v-model="conditionIndexStart" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
           min="0"
           placeholder="Alates"
           type="number">
  </div>
  <div class="col-5">
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
