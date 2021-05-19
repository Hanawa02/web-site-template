<template>
  <div class="lg:hidden p-1" role="button" @click="$emit('toggle')">
    <div
      v-for="barNumber in numberOfBars"
      :key="barNumber"
      class="w-6 bar-height bg-primary-contrast my-1"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheSideNavToggle',
  data() {
    return {
      numberOfBars: 3
    }
  }
})
</script>

<style scoped>
.bar-height {
  height: 2px;
}
</style>
