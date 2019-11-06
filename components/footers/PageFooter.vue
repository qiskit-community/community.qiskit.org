<template>
  <footer>
    <div class="page-footer-container">
      <div class="page-footer page-footer--framed">
        <section class="footer-column">
          <h2 class="footer-column__title">
            Qiskit Elements
          </h2>
          <ul>
            <li v-for="element in elements" :key="element.label" >
              <a class="footer-column__link" :href="element.url">
                {{element.label}}
              </a>
            </li>
          </ul>
        </section>
        <section class="footer-column">
          <h2 class="footer-column__title">
            Qiskit for Educators
          </h2>
          <ul>
            <li><nuxt-link class="footer-column__link" to="/textbook">Textbook</nuxt-link></li>
            <li><a class="footer-column__link" href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY" target="_blank" rel="noopener">Coding With Qiskit</a></li>
            <li><a class="footer-column__link" href="mailto:hello@qiskit.camp" target="_blank" rel="noopener">Host an Event</a></li>
          </ul>
          <h2 class="footer-column__title">
            Qiskit Advocates
          </h2>
          <ul>
            <li><nuxt-link class="footer-column__link" to="/advocates#become-an-advocate">Become an Advocate</nuxt-link></li>
          </ul>
          <h2 class="footer-column__title">
            Qiskit Experiments
          </h2>
          <ul>
            <li><nuxt-link class="footer-column__link" to="/experiments#browse-the-experiments">Browse the experiments</nuxt-link></li>
          </ul>
        </section>
        <section class="footer-column">
          <h2 class="footer-column__title">
            Social Media
          </h2>
          <ul>
            <li v-for="socialMedia in socialMediaList" :key="socialMedia.label" >
              <a class="footer-column__link" :href="socialMedia.url" target="_blank" rel="noopener">
                {{socialMedia.label}}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import { orderedQiskitElements, orderedSocialMedia } from '~/constants/links'

@Component
export default class extends Vue {
  @Prop({ type: Array, default: () => orderedQiskitElements }) elements
  @Prop({ type: Array, default: () => orderedSocialMedia }) socialMediaList
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

.page-footer-container {
  margin-top: 4rem;
  padding-bottom: 4rem;
}

.page-footer {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: var(--primary-color-lightmost);

  ul {
    list-style: none;
    margin-top: 1.5rem;
  }

  li {
    margin-top: 0.5rem;
    display: inline-block;
    width: 100%;
  }

  &--framed {
    @include framed();
  }
}

.footer-column {
  flex: 1;
  margin-right: 2rem;

  &__title {
    margin-top: 2rem;
    font-size: inherit;
    font-weight: normal;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--primary-color-lightmost);

    &:first-child {
      margin-top: 0;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    width: 100%;

    &:hover {
      color: var(--body-color-light);
    }
  }

  &:last-child {
    margin-right: 0;
  }
}

@media (max-width: 600px) {
  .page-footer {
    display: block;
  }

  .footer-column {
    margin-top: 2rem;
    margin-right: 0;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
