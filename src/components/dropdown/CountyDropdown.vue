<template>
  <div>
    <div>
      <select v-model="selectedCountyId" >
        <option value="0">Kõik maakonnad</option>
        <option v-for="county in counties" :key="county.countyId" :value="county.countyId">{{
            county.countyName
          }}
        </option>

      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountyDropdown',
  data() {
    return {
      selectedCountyId: 0,
      counties: [
        {
          countyId: 0,
          countyName: '',
        }
      ]
    }
  },
  methods: {
    getCountiesName() {
      this.$http.get('/counties')
          .then(response => {
            this.counties = response.data
          })
    }
  },
  mounted() {
    this.getCountiesName()
  },
}

</script>

