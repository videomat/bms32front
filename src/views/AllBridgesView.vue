<template>
  <div class="allbridges">
    <div>
      <BridgesTable/>
    </div>


  </div>
</template>



<script>

import BridgesTable from "@/components/BridgesTable.vue";

export default {
  name: 'AllBridgesView',
  components: {BridgesTable},

}
</script>