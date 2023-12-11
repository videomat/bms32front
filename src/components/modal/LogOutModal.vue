<template>
  <Modal ref="modalRef" close-button-name="Ei" confirm-button-name="Jah" @confirm="executeLogout">
    <template #header>
      Logi välja?
    </template>
    <template #body>
      Kas oled kindel, et soovid välja logida?
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'LogOutModal',
  components: { Modal },
  methods: {
    executeLogout() {
      // Emit the logout event and close the modal
      this.$emit('event-execute-logout')
      this.$refs.modalRef.closeModal()
    },
  }
}
</script>