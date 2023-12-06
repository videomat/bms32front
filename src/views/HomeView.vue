<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-4">DropDownMenu</div>
      <div class="col-8">
        <Googlemap/>
      </div>
    </div>
  </div>
</template>

<script>
import Googlemap from "@/components/Googlemap.vue";

export default {
  name: 'HomeView',
  components: {
    Googlemap
  }
}
</script>
