<template>
  <div>
    <banner-section />
    <introduction />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BannerSection from '~/components/Home/BannerSection.vue'
import Introduction from '~/components/Home/Introduction.vue'

export default Vue.extend({
  components: {
    'banner-section': BannerSection,
    introduction: Introduction
  }
})
</script>

<style></style>
