<template>
  <banner
    class="flex flex-col justify-end"
    backgroundImageSrc="//images01.nicepage.com/2c/aa/2caae017a61202f87bc36fab57e85a63.png"
  >
    <div
      class="
        text-primary-contrast
        default-section-constraints
        py-8
        sm:py-12
        md:py-16
      "
    >
      <div class="font-bold pb-1 text-primary-light text-lg">
        {{ $t('pages.home.banerSection.pagePreTitle') }}
      </div>
      <app-headline :isLeftAligned="true">
        <h1 class="text-3xl">
          {{ $t('pages.home.banerSection.pageTitle') }}
        </h1>
      </app-headline>
      <h2 class="text-2xl leading-7">
        {{ $t('pages.home.banerSection.pageSubTitle') }}
      </h2>
      <div class="flex flex-col sm:flex-row mt-4">
        <button
          class="
            w-max
            px-4
            py-2
            mb-3
            sm:mr-4
            sm:mb-0
            bg-primary
            text-primary-contrast
            rounded
            font-semibold
          "
        >
          {{ $t('pages.home.banerSection.coloredButtonText') }}
        </button>
        <button
          class="
            w-max
            px-4
            py-2
            bg-transparent
            border-2 border-primary-contrast
            text-primary-contrast
            rounded
            font-semibold
          "
        >
          {{ $t('pages.home.banerSection.transparentButtonText') }}
        </button>
      </div>
    </div>
  </banner>
</template>

<script lang="ts">
import Vue from 'vue'

import Banner from '~/components/Home/Banner.vue'
import AppHeadline from '~/components/UI/AppHeadline.vue'

export default Vue.extend({
  components: {
    'app-headline': AppHeadline,
    banner: Banner
  },
  props: {},
  computed: {}
})
</script>

<style scoped></style>
