<template>
  <div class="h-full w-full">
    <div
      v-if="show"
      class="h-full w-full bg-accent bg-opacity-50 z-40 fixed top-0 left-0"
      @click="$emit('close')"
    ></div>
    <transition name="slide-side">
      <div
        v-if="show"
        class="h-full w-72 bg-primary-contrast z-50 fixed top-0 left-0 p-6"
      >
        <ul class="p-0 m-0">
          <li
            v-for="menu of menuList"
            :key="menu.link"
            class="
              text-primary
              py-2
              flex
              font-semibold
              border-b border-primary-light
            "
            @click="$emit('close')"
          >
            <nuxt-link class="flex" :to="menu.link">
              <div class="w-8 text-center">
                <font-awesome-icon
                  v-if="menu.icon"
                  :icon="menu.icon"
                  class="mx-1 text-primary-dark text-base"
                />
              </div>

              {{ $t(`components.navigation.menu.${menu.menu}`) }}
            </nuxt-link>
          </li>

          <li class="text-primary-dark font-semibold py-1">
            <language-selector />
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LanguageSelector from '~/components/LanguageSelector.vue'

import { MenuLink } from '~/models/Navigation/menu-link.model'

export default Vue.extend({
  components: { 'language-selector': LanguageSelector },
  name: 'TheSideNav',
  props: {
    show: {
      type: Boolean,
      default: false
    },
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

<style scoped>
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
