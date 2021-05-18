<template>
  <button class="px-8 py-2 rounded">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String, required: true }
  }
})
</script>

<style></style>
