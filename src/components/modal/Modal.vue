<template>
  <div v-if="isOpen" class="modal fade show d-block" tabindex="-1" @click="closeModal">
    <div class="modal-dialog" @click.stop>
      <div class="modal-content">
        <div class="modal-header">
          <h1 id="exampleModalLabel" class="modal-title fs-5">
            <slot name="header">
              Default title
            </slot>
          </h1>
          <button aria-label="Close" class="btn-close" type="button" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
          </slot>
          <button class="btn btn-primary" type="button" @click="confirmAction">{{ confirmButtonName }}</button>
          <button class="btn btn-secondary" type="button" @click="closeModal">{{ closeButtonName }}</button>
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
