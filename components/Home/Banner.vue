<template>
  <div
    class="w-full bg-accent bg-opacity-5 min-h-80 md:h-96 banner-image"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    backgroundImageSrc: {
      type: String
    }
  },
  computed: {
    style() {
      if (!this.backgroundImageSrc) {
        return ''
      }

      return `background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${this.backgroundImageSrc}");`
    }
  }
})
</script>

<style>
.banner-image {
  object-fit: cover;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
</style>
