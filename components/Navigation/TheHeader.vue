<template>
  <div
    class="
      w-full
      bg-primary
      text-primary-contrast
      py-2
      shadow-md
      h-16
      flex
      items-center
    "
  >
    <header
      class="
        default-section-constraints
        mx-auto
        flex
        justify-center
        lg:justify-between
        items-center
      "
    >
      <the-side-nav-toggle
        @toggle="$emit('sidenavToggle')"
        class="absolute left-0 ml-6"
      />
      <div class="text-center lg:text-left">
        <nuxt-link to="/">{{ $t('components.navigation.pageName') }}</nuxt-link>
      </div>

      <ul class="hidden lg:flex lg:items-center">
        <li v-for="menu of menuList" :key="menu.link" class="mx-2">
          <nuxt-link :to="menu.link">
            {{ $t(`components.navigation.menu.${menu.menu}`) }}
          </nuxt-link>
        </li>
        <li class="mx-1">|</li>
        <li class="my-1 lg:my-0"><language-selector /></li>
      </ul>
      <div class="w-1 h-1 lg:hidden" />
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LanguageSelector from '~/components/LanguageSelector.vue'
import TheSideNavToggleVue from '~/components/Navigation/TheSideNavToggle.vue'

import { MenuLink } from '~/models/Navigation/menu-link.model'

export default Vue.extend({
  name: 'TheHeader',
  components: {
    'the-side-nav-toggle': TheSideNavToggleVue,
    'language-selector': LanguageSelector
  },
  props: {
    menuList: {
      type: Array,
      required: true,
      validator: function (value: MenuLink[]) {
        return (
          value &&
          value.length > 0 &&
          value.every((item) => item.link && item.menu)
        )
      }
    }
  }
})
</script>

<style scoped></style>
