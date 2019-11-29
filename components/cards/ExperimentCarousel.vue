<template>
  <section class="relative h-88">
    <ul class="-bottom-16 absolute right-0 left-0 flex justify-between list-none">
      <li
        class="w-8 h-8 cursor-pointer text-gray-100 hover:text-purple-200"
        @click="previous"
      >
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18" class="h-8">
          <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
          <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
        </svg>
      </li>
      <li
        class="w-8 h-8 cursor-pointer text-gray-100 hover:text-purple-200"
        @click="next"
      >
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18" transform="rotate(180)" class="h-8">
          <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
          <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
        </svg>
      </li>
    </ul>
    <transition
      v-for="(experiment, index) in experiments"
      :key="`deck-experiment-${index}`"
      name="experiment-deck__slide"
    >
      <nuxt-link
        v-if="active == index"
        class="absolute text-white bg-gray-300 text-sm flex flex-col sm:flex-row z-10 shadow inset-0"
        :to="experiment.to"
      >
        <div
          class="flex-grow bg-no-repeat bg-cover bg-center sm:w-8/12"
          :style="`background-image: url(${experiment.image});`"
        />
        <div class="mt-2 mr-4 mb-2 ml-4 sm:w-4/12">
          <h3 class="mt-6">
            {{ experiment.title }}
          </h3>
          <p class="text-purple-100 mt-2">
            <span class="text-gray-100">by</span>
            {{ experiment.author }}
          </p>
          <p>
            {{ experiment.description }}
          </p>
        </div>
      </nuxt-link>
    </transition>
    <div class="-bottom-6 absolute w-full h-full bg-gray-400 shadow scale-95"></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(Array) experiments

  active: number = 0

  previous() {
    const count = this.experiments.length
    this.active = this.active === 0 ? count - 1 : this.active - 1
  }

  next() {
    const count = this.experiments.length
    this.active = this.active === count - 1 ? 0 : this.active + 1
  }
}
</script>

<style lang="css">
/* Transition styles */
.experiment-deck__slide-enter-active {
  transition: transform .8s;
}

.experiment-deck__slide-leave-active {
  transition: transform .8s, opacity .4s .3s;
}

.experiment-deck__slide-enter {
  z-index: 1;
  transform: scale(0.95) translateY(1rem);
}

.experiment-deck__slide-enter-to {
  z-index: 1;
  transform: scale(1) translateY(0);
}

.experiment-deck__slide-leave-to {
  opacity: 0;
  transform: scale(1.3) translateY(-2rem);
}
</style>
