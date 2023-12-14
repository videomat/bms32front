<template>
  <img v-if="imageDataBase64 === '' || imageDataBase64 === null" class="rounded float-start"
       src="@/assets/defaultBridge.jpg"/>
  <img v-else :src="imageDataBase64" class="img-thumbnail">
</template>
<script>
console.log("Olen siin BridgeImage.vue")
import {watch} from "vue";

export default {
  name: 'BridgeImage',
  props: {
    imageDataBase64: String
  },
  methods: {
    handleImageError() {
      this.imageDataBase64 = '@/assets/defaultBridge.jpg';
    }
  },
  mounted() {
    // Vue 3 Syntax
    watch(() => this.imageDataBase64, (newValue, oldValue) => {
      console.log('imageDataBase64 changed from', oldValue, 'to', newValue);
    });
  }
}
</script>