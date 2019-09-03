<template>
  <article class="map-section">
    <div class="map-section__map-container" />
    <div class="map-section__content">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  mounted() {
    require('d3')
    require('topojson')
    const Datamap = require('datamaps')
    const map = new Datamap({
      element: this.$el.querySelector('.map-section__map-container'),
      responsive: true,
      projection: 'mercator',
      geographyConfig: {
        highlightOnHover: false,
        popupOnHover: false,
        borderColor: 'var(--primary-color-lightmost)'
      },
      fills: {
        defaultFill: '#0000',
        city: 'var(--secondary-color)'
      },
      bubblesConfig: {
        borderWidth: 0,
        highlightBorderWidth: 0,
        highlightFillColor: 'var(--secondary-color-light)',
        popupTemplate(_, data) {
          return `<div class="map-tip">${data.name}</div>`
        }
      },
      done() {
        // fix cutting the bottom of the map.
        this.element.style.paddingBottom = '60%'
      }
    })
    map.bubbles([
      { name: 'Madrid', latitude: 40.41, longitude: -3.7, fillKey: 'city', radius: 5 },
      { name: 'New York', latitude: 40.71, longitude: -74, fillKey: 'city', radius: 5 },
      { name: 'Basel', latitude: 47.56, longitude: 7.5, fillKey: 'city', radius: 5 },
      { name: 'Whashington D.C.', latitude: 38.89, longitude: -77.01, fillKey: 'city', radius: 5 },
      { name: 'Surrey', latitude: 51.31, longitude: -0.55, fillKey: 'city', radius: 5 },
      { name: 'Tokyo', latitude: 35.68, longitude: 139.69, fillKey: 'city', radius: 5 },
      { name: 'Rome', latitude: 41.90, longitude: 12.49, fillKey: 'city', radius: 5 },
      { name: 'Miami', latitude: 25.76, longitude: -80.19, fillKey: 'city', radius: 5 },
      { name: 'Pawnee', latitude: 36.33, longitude: -96.80, fillKey: 'city', radius: 5 }
    ])
    window.onresize = () => {
      requestAnimationFrame(() => {
        map.resize()
      })
    }
  }
})
export default class extends Vue {
  @Prop({ type: String, default: 'end' }) extraPosition;
  @Prop(Array) cities;
}
</script>

<style lang="scss" scoped>
.map-section {
  position: relative;

  &__content {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    padding-top: 4rem;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    & * {
      pointer-events: initial;
    }
  }
}
</style>

<style lang="scss">
.map-tip {
  position: relative;
  font-size: 0.8rem;
  font-weight: 200;
  color: white;
  background-color: var(--secondary-color-light);
  padding: 0.2rem 0.6rem;
  transform: translateX(-50%);

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    font-size: 0;
    border: 8px solid transparent;
    border-bottom: 8px solid var(--secondary-color-light);
    transform: translate(-50%);
  }
}
</style>
