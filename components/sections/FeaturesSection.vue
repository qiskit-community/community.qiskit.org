<template>
  <article>
    <div class="features-section-container">
      <div class="features-section features-section--framed">
        <slot />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

.features-section-container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.features-section {
  display: flex;
  flex-direction: row;

  &--framed {
    @include framed();
  }
}
</style>
