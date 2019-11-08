<template>
  <section>
    <div class="menu-container">
      <div class="menu menu--framed">
        <SidebarMenu />
        <a class="link-to-home" :href="baseUrl">Qiskit</a>
        <nav class="navigation-group navigation-group--with-separator">
          <a
            v-for="element in elements"
            :key="element.label"
            class="navigation-group__item"
            :href="element.url">
              {{ element.label }}
            </a>
        </nav>
        <nav class="navigation-group navigation-group--fixed navigation-group--right-aligned">
          <a class="navigation-group__item navigation-group__item--active" href="/">Community</a>
          <a class="navigation-group__item" href="https://quantum-computing.ibm.com/jupyter/tutorial/1_start_here.ipynb" target="_blank">Tutorials</a>
          <a class="navigation-group__item" href="https://qiskit.org/documentation">API&nbsp;Documentation</a>
        </nav>
      </div>
    </div>
    <div class="community-menu menu-container menu-container--light">
      <section class="menu menu--framed">
        <nav class="navigation-group navigation-group--right-aligned navigation-group--fixed">
          <nuxt-link
            v-for="communitySubLink in communitySubLinks"
            :key="communitySubLink.label"
            :class="{
              'navigation-group__item': true,
              'nuxt-link-active': isActive(communitySubLink.to)
            }"
            :to="communitySubLink.to"
          >
            {{ communitySubLink.label }}
          </nuxt-link>
        </nav>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import SidebarMenu from '~/components/menus/SidebarMenu.vue'

import { QISKIT_URL, orderedQiskitElements, orderedCommunitySubLinks } from '~/constants/links'

@Component({
  components: { SidebarMenu }
})
export default class extends Vue {
  @Prop({ type: String, default: QISKIT_URL }) baseUrl
  @Prop({ type: Array, default: () => orderedCommunitySubLinks }) communitySubLinks
  @Prop({ type: Array, default: () => orderedQiskitElements }) elements

  isActive(path) {
    return this.$route.path.startsWith(path)
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.menu-container {
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid black;
  background-color: #21252b;

  --link-color: white;

  &--light {
    --link-color: var(--body-color-dark);
    background-color: var(--secondary-color-lightmost);
    border-bottom: none;
  }
}

.menu {
  height: 60px;
  display: flex;
  font-size: 0.80rem;

  & > * {
    height: 100%;
  }

  &--framed {
    @include framed();
  }
}

.navigation-group {
  display: flex;

  &__item {
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    color: var(--link-color);
    text-decoration: none;

    &.nuxt-link-active {
      font-weight: bold;
      position: relative;
      top: 1px;
      border-bottom: 4px solid var(--secondary-color);
    }

    &--active {
      padding-top: 2px;
      position: relative;
      top: 1px;
      border-bottom: 4px solid var(--secondary-color);
    }
  }

  &--with-separator::before {
    content: "";
    background-color: #fff4;
    width: 2px;
    margin: 12px 10px;
  }

  &--right-aligned {
    margin-left: auto;
  }

  &--fixed {
    /* fixings for mimicing qiskit.org menu */
    margin-right: -0.4rem;
  }

  @include mq($until: wide-desktop) {
    display: none;
  }
}

.link-to-home {
  display: inline-flex;
  align-items: center;
  margin-left: -1.2rem;
  padding: 0 1em;
  color: var(--link-color);
  text-decoration: none;

  @include mq($until: wide-desktop) {
    font-size: 1.1rem;
    margin-left: -0.5rem;
  }
}

@media (max-width: 830px) {

  #navigation {
    min-height: 60px;
  }

  .link-to-home {
    font-size: 1.1rem;
    margin-left: -0.5rem;
  }

  .community-menu,
  .navigation-group {
    display: none;
  }
}
</style>
