<template>
  <div>
    Test123

  </div>

</template>


<script>

import {useRoute} from "vue-router";

export default {
  name: 'BridgesDetailsView',
  data() {
    return {
      bridgeId: Number(useRoute().query.bridgeId)
    }
  },
  methods:{
    alertBridgeId() {
      alert(this.bridgeId)
    },
  },
  mounted() {
    this.alertBridgeId()
  }

}
</script>