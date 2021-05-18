<template>
  <div>
    <div class="flex flex-col p-12" :style="bannerStyle">
      <p class="text-primary mt-32 mb-4 text-2xl font-semibold">
        WE ARE BUILDERS
      </p>
      <app-headline :is-left-aligned="true"
        ><span class="text-primary-contrast text-3xl font-semibold"
          >WE WILL BUILD YOUR DREAM</span
        ></app-headline
      >
      <p class="text-primary-contrast">
        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
        nullam nunc justo sagittis suscipit ultrices.
      </p>

      <div class="flex flex-col">
        <app-button
          text="Our Portfolio"
          class="
            text-primary-contrast
            bg-primary
            border border-primary
            hover:bg-primary-dark
            hover:border-primary-dark
            font-semibold
            w-max
          "
        />
        <app-button
          text="About Us"
          class="
            text-primary-contrast
            hover:bg-primary-contrast
            hover:text-accent
            border border-primary-contrast
            font-semibold
            w-max
          "
        />
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppButtonVue from '~/components/Template-01/UI/AppButton.vue'
import AppHeadlineVue from '~/components/Template-01/UI/AppHeadline.vue'

export default Vue.extend({
  components: {
    'app-button': AppButtonVue,
    'app-headline': AppHeadlineVue
  },
  data() {
    return {
      imageUrl:
        'https://images01.nicepage.com/2c/aa/2caae017a61202f87bc36fab57e85a63.png'
    }
  },
  computed: {
    bannerStyle(): string {
      return `background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${this.imageUrl}); background-position:50% 50%; background-size:cover`
    }
  }
})
</script>

<style></style>
