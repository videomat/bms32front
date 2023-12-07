<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-3">DropDownMenu</div>
      <div class="col-9">
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
