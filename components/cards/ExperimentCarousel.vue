<template>
  <section class="experiment-deck">
    <article
      v-for="(experiment, index) in experiments"
      :key="`deck-experiment-${index}`"
      class="experiment-deck__slide"
    >
      <div
        class="experiment-deck__slide-picture"
        :style="`background-image: url(${experiment.image});`"
      />
      <div class="experiment-deck__slide-copy">
        <h3>
          {{ experiment.title }}
        </h3>
        <p class="experiment-deck__slide-author">
          {{ experiment.author }}
        </p>
        <p class="experiment-deck__slide-summary">
          {{ experiment.description }}
        </p>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(Array) experiments

  activate(evt: PointerEvent) {
    const thismarker = evt.currentTarget && evt.currentTarget as HTMLElement
    if (!thismarker || thismarker.classList.contains('marker--active')) {
      return
    }

    // Change marker enabled
    const previouslyEnabled = document.querySelector('.marker--active')
    if (previouslyEnabled) {
      previouslyEnabled.classList.remove('marker--active')
    }
    thismarker.classList.add('marker--active')

    // Dismiss the current active section
    const self = this
    function clearOut(evt: Event) {
      if (evt.currentTarget) {
        evt.currentTarget.removeEventListener('transitionend', clearOut)
        self.clearIsOut(evt.currentTarget as HTMLElement)
      }
    }
    const activeSection = document.querySelector('.textbook-features__page--active')
    if (activeSection) {
      activeSection.addEventListener('transitionend', clearOut)
      activeSection.classList.add('textbook-features__page--out')
      activeSection.classList.remove('textbook-features__page--active')
    }

    // Activate the new one
    const newSection = document.querySelector(`#${thismarker.dataset.to}`)
    if (newSection) {
      newSection.classList.add('textbook-features__page--active')
    }
  }

  clearIsOut(target: HTMLElement) {
    target.classList.remove('textbook-features__page--out')
  }
}
</script>

<style lang="scss" scoped>
.experiment-deck {
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -1rem;
    z-index: 1;
    width: 100%;
    height: 100px;
    background-color: var(--primary-color);
    box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
    transform-origin: center bottom;
    transform: scale(0.95);
  }
}

.experiment-deck__slide {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: var(--body-color-light);
  background-color: var(--primary-color);

  &-picture {
    flex: 2;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover, cover, cover;
    background-position: top center;

    /* Keep it square */
    &::before {
      content: "";
      display: block;
      padding-bottom: 50%;
    }
  }

  &-copy {
    flex: 1;
    margin: 0.5rem 1rem 1em;
  }

  h3 {
    margin-top: 1.5rem;
  }

  &-author {
    color: var(--secondary-color-lightmost);
    margin-top: 0.5rem;

    &:before {
      content: "by ";
      color: var(--primary-color-lightmost);
    }
  }
}

/* Transition styles */
.experiment-deck__slide {
  position: relative;
  width: 100%;
  opacity: 0;
  transform-origin: center bottom;
  transform: scale(0.95) translateY(1rem);
  transition: transform 300ms, opacity 300ms;

  &.is-active {
    opacity: 1;
    z-index: 2;
    transform: scale(1);
    box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
  }

  &.is-out {
    opacity: 0;
    z-index: 2;
    transform: scale(1.3) translateY(-2rem);
    transition: transform 400ms, opacity 400ms;
  }
}
</style>
