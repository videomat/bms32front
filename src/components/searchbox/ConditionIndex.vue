<template>
  <span><h6>Seisundiindeks</h6></span>
  <div class="colsize">
    <input v-model="conditionIndex" aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
           min="0"
           type="number">
  </div>
</template>

<script>
export default {
  name: 'ConditionIndexSearch',

  data() {
    return {
      conditionIndex: 0,
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
