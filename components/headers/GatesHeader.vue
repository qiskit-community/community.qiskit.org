<template>
  <div>
    <div class="header-container">
      <div class="decoration" aria-hidden="true" />
      <section class="intro-container">
        <article
          :class="`
            intro
            intro--framed
            ${extraPosition == 'start' ? 'intro--reversed' : ''}
          `"
        >
          <section class="copy-container">
            <h1 class="main-title">
              {{ mainTitle }}
            </h1>
            <div class="description">
              <slot />
            </div>
          </section>
          <aside
            v-if="this.$slots.extra"
            class="extra-container importance--decoration"
          >
            <slot name="extra" />
          </aside>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) mainTitle;
  @Prop({ type: String, default: 'end' }) extraPosition;
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

.header-container {
  position: relative;
  z-index: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.decoration {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  height: 100%;
  background-image: linear-gradient(150deg,
    var(--secondary-color) 15%,
    var(--secondary-color-light) 70%,
    var(--secondary-color-lightmost) 94%);
}

.intro {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  color: white;

  &--framed {
    @include framed()
  }

  &--reversed {
    flex-direction: row-reverse;
  }
}

.copy-container,
.extra-container {
  flex: 1;
}
</style>