<template>
  <app-select
    class="w-min"
    icon="globe"
    :initialValue="currentLanguage"
    :options="languageOptions"
    @change="setLanguage($event)"
  />
</template>

<script lang="ts">
import Vue from 'vue'

import AppSelectVue from '~/components/UI/AppSelect.vue'

// import { SelectItem } from '~/models/UI/select-item.model'

export default Vue.extend({
  name: 'LanguageSelector',
  components: {
    'app-select': AppSelectVue
  },
  data() {
    return {
      languageOptions: [
        {
          value: 'en',
          description: 'components.languageSelector.options.en'
        },
        {
          value: 'pt',
          description: 'components.languageSelector.options.pt'
        }
      ]
    }
  },
  methods: {
    setLanguage(language: string) {
      this.$i18n.setLocale(language)
    }
  },
  computed: {
    currentLanguage(): string {
      return this.$i18n.locale
    }
  }
})
</script>

<style scoped></style>
