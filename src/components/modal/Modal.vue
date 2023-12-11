<template>
  <div v-if="isOpen" class="modal fade show d-block" tabindex="-1" @click="closeModal">
    <div class="modal-dialog" @click.stop>
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            <slot name="header">
              Default title
            </slot>
          </h1>
          <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
          </slot>
          <button type="button" class="btn btn-primary" @click="confirmAction">{{ confirmButtonName }}</button>
          <button type="button" class="btn btn-secondary" @click="closeModal">{{ closeButtonName }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    closeButtonName: {
      type: String,
      default: 'Close'
    },
    confirmButtonName: {
      type: String,
      default: 'Confirm'
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
    confirmAction() {
      this.$emit('confirm')
    }
  }
}
</script>
