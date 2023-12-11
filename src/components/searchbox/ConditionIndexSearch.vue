<template>
  <span>Seisundiindeks [0-100]:</span>
  <div class="col-2">
    <span id="basic-addon1" class="input-group-text">🔍</span>
  </div>
  <div class="col-5">
    <input aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
           min="0"
           placeholder="Alates"
           type="number">
  </div>
  <div class="col-5">
    <input aria-describedby="basic-addon1" aria-label="BridgeName" class="form-control"
           max="{{maxConditionIndexValue}}"
           placeholder="Kuni"
           type="number">
  </div>
</template>

<script>
export default {
  name: 'ConditionIndexSearch',

  data() {
    return {
      setConditionIndex: 0,
      conditionIndexes: [
        {
          conditionIndex: 0,
        }
      ]
    }
  },

  methods: {
    maxConditionIndexValue() {
      if (this.setConditionIndex > 100) {
        this.setConditionIndex = 100
      }
    },
  },
  tempMethod() {
    alert(this.setConditionIndex)
  },

}

</script>
