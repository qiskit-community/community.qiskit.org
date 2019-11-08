<template>
  <section class="drawer" tabindex="-1">
    <svg class="drawer-toggle" height="24" viewBox="0 0 24 24" width="24">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
    <div class="overlay" />
    <nav class="vertical-navigation">
      <h2>Elements</h2>
      <a
        v-for="element in elements"
        :key="element.label"
        class="vertical-navigation__item"
        :href="element.url"
      >{{ element.label }}</a>
      <h2>Learn more</h2>
      <a class="vertical-navigation__item vertical-navigation__item--active" href="/">Community</a>
      <div class="vertical-community-navigation">
        <nuxt-link
          v-for="communitySubLink in communitySubLinks"
          :key="communitySubLink.label"
          :class="{
                  'vertical-community-navigation__item': true,
                  'nuxt-link-active': isActive(communitySubLink.to)
                }"
          :to="communitySubLink.to"
        >{{ communitySubLink.label }}</nuxt-link>
      </div>
      <a
        class="vertical-navigation__item"
        href="https://quantum-computing.ibm.com/jupyter/tutorial/1_start_here.ipynb"
        target="_blank"
      >Tutorials</a>
      <a
        class="vertical-navigation__item"
        href="https://qiskit.org/documentation"
      >API&nbsp;Documentation</a>
    </nav>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import { orderedQiskitElements, orderedCommunitySubLinks } from '~/constants/links'

@Component
export default class extends Vue {
  @Prop({ type: Array, default: () => orderedCommunitySubLinks }) communitySubLinks
  @Prop({ type: Array, default: () => orderedQiskitElements }) elements

  isActive(path) {
    return this.$route.path.startsWith(path)
  }
}
</script>

<style lang="scss" scoped>
@mixin vertical-navigation-item() {
  font-size: 0.9rem;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1.5em;
}

* {
  box-sizing: border-box;
}

.drawer {
  display: none;
}

.drawer-toggle {
  fill: white;
  height: 100%;
  cursor: pointer;
  margin: 0 0 0 1.5rem;
}

.overlay {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 150;
  background-color: black;
  opacity: 0;
  transition: opacity 200ms;
  pointer-events: none;
}

.vertical-navigation {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0; bottom: 0; left: 0;
  z-index: 200;
  width: 256px;
  padding: 1.3rem;
  background-color: var(--primary-color);
  transform: translateX(-100%);
  transition: transform 200ms;
  overflow-y: auto;

  h2 {
    font-size: 0.8rem;
    font-weight: normal;
    color: var(--primary-color-lightmost);
    padding: 1em;
  }

  &__item {
    @include vertical-navigation-item();
  }
}

.vertical-community-navigation {
  display: flex;
  flex-direction: column;
  margin: 0 -1.3rem;
  padding: 1rem 0;
  background-color: var(--secondary-color-lightmost);

  &__item {
    @include vertical-navigation-item();
    padding: 0.5rem 3rem;
    color: var(--body-color-dark);

    &.nuxt-link-active {
      font-weight: bold;
      border-left: 4px solid var(--secondary-color);
      padding-left: calc(3rem - 4px);
    }
  }
}

.drawer:focus-within {
  .vertical-navigation {
    transform: translateX(0);
  }

  .overlay {
    opacity: 0.5;
  }
}

@media (max-width: 830px) {

  #navigation {
    min-height: 60px;
  }

  .drawer {
    display: unset;
    margin-left: -2rem;
  }
}
</style>
