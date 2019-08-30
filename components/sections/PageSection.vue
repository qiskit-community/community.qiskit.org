<template>
  <article>
    <div class="page-section-container">
      <div
        :class="`
          page-section
          ${extraPosition == 'start' ? 'page-section--reversed' : ''}
        `"
      >
        <div class="copy-container">
          <slot />
        </div>
        <aside
          v-if="this.$slots.extra"
          class="extra-container importance--decoration"
        >
          <slot name="extra" />
        </aside>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'end' }) extraPosition;
}
</script>

<style lang="scss" scoped>
.page-section-container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.page-section {
  display: flex;
  flex-direction: row;

  & > * {
    width: 50%;
  }

  &--reversed {
    flex-direction: row-reverse;
  }
}
</style>
