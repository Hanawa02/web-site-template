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
import TheHeaderVue from '~/components/Navigation/TheHeader.vue'
import TheSideNavVue from '~/components/Navigation/TheSideNav.vue'
import { MenuLink } from '~/models/Navigation/menu-link.model'

export default Vue.extend({
  components: {
    'the-header': TheHeaderVue,
    'the-side-nav': TheSideNavVue
  },
  props: {
    isLeftAligned: {
      type: Boolean
    }
  },
  data() {
    return {
      menus: [
        new MenuLink('/', 'Home', 'home'),
        new MenuLink('/about', 'About', 'file-alt'),
        new MenuLink('/contact', 'Contact', 'address-card')
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
