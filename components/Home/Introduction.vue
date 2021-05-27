<template>
  <div
    class="
      default-section-constraints
      flex flex-col
      md:flex-row
      md:justify-between
      my-8
      md:my-24
    "
  >
    <div class="flex flex-col py-6 md:w-45-p md:py-0">
      <div class="font-bold pb-1 text-primary text-lg">
        {{ $t('pages.home.indroduction.preHeadline') }}
      </div>
      <app-headline :isLeftAligned="true">
        <h2 class="text-3xl font-black">
          {{ $t('pages.home.indroduction.headline') }}
        </h2>
      </app-headline>
      <div class="italic text-accent-light text-lg">
        {{ $t('pages.home.indroduction.subHeadline') }}
      </div>
    </div>
    <div class="text-center text-accent-dark md:w-45-p">
      <div
        class="py-4"
        v-html="$t('pages.home.indroduction.longDescription')"
      ></div>
      <button
        class="px-4 py-2 bg-primary text-primary-contrast rounded font-semibold"
      >
        {{ $t('pages.home.indroduction.buttonText') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppHeadline from '~/components/UI/AppHeadline.vue'

export default Vue.extend({
  components: {
    'app-headline': AppHeadline
  },
  props: {},
  computed: {}
})
</script>

<style scoped></style>
