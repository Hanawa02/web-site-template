<template>
  <div
    class="font-extrabold text-3xl leading-9"
    :class="{ 'text-center': !isLeftAligned }"
  >
    <slot></slot>
    <div :class="`bg-primary h-1 w-20 my-6 ${isLeftAligned ? '' : 'm-auto'}`" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isLeftAligned: {
      type: Boolean
    }
  }
})
</script>

<style></style>
