<template>
  <div>
    <the-header @sidenavToggle="toggleDisplaySideNav()" :menuList="menus" />
    <the-side-nav
      :show="displaySideNav"
      @close="closeSideNav()"
      :menuList="menus"
    />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '~/components/Navigation/TheHeader.vue'
import TheSideNav from '~/components/Navigation/TheSideNav.vue'
import { MenuLink } from '~/models/Navigation/menu-link.model'

export default Vue.extend({
  components: {
    'the-header': TheHeader,
    'the-side-nav': TheSideNav
  },
  props: {
    isLeftAligned: {
      type: Boolean
    }
  },
  data() {
    return {
      menus: [
        new MenuLink('/', 'home', 'home'),
        new MenuLink('/about', 'about', 'file-alt'),
        new MenuLink('/contact', 'contact', 'address-card')
      ],
      displaySideNav: false
    }
  },
  methods: {
    toggleDisplaySideNav(): void {
      this.displaySideNav = !this.displaySideNav
    },
    closeSideNav(): void {
      this.displaySideNav = false
    }
  }
})
</script>

<style></style>
