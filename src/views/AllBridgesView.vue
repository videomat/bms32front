<template>
  <div class="allbridges">
    <h1>Siia tuleb sildade tabel</h1>
    <div>
      <BridgesTable/>
    </div>


  </div>
</template>



<script>

console.log("Olen siin AllBridgesView.vue")
import BridgesTable from "@/components/BridgesTable.vue";

export default {
  name: 'AllBridgesView',
  components: {BridgesTable},

}
</script>