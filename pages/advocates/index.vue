<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="content-root" tabindex="-1">
    <header id="navigation">
      <QiskitOrgMenu />
    </header>
    <main>
      <header>
        <CanvasHeader
          id="presentation"
          main-title="Qiskit Advocates"
        >
          <p>A global program that provides support to the individuals who actively work on assisting and contributing to the Qiskit Community.</p>
          <template #features>
            <div id="advocates-benefits">
              <CompactFeature
                icon="Community"
              >
                <h2>Network with experts and enthusiasts</h2>
                <p>Advocates will be added to a group of quantum experts and will be apart of regular information sharing sessions.</p>
              </CompactFeature>
              <CompactFeature
                icon="Qiskit"
              >
                <h2>Access to Qiskit core members and projects</h2>
                <p>Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas. They will also have the opportunity to work on new Qiskit projects.</p>
              </CompactFeature>
              <CompactFeature
                icon="Visibility"
              >
                <h2>Increased visibility for your work</h2>
                <p>All advocates will have the opportunity to have their work supported and highlighted by IBM. Qiskit advocates will also have a public presence on the advocates landing page.</p>
              </CompactFeature>
              <CompactFeature
                icon="Events"
              >
                <h2>Invitation to events</h2>
                <p>Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.</p>
              </CompactFeature>
            </div>
          </template>
        </CanvasHeader>
      </header>
      <div class="inner-navigation-scope">
        <InnerNavigation
          class="inner-navigation"
          :sections="[
            { anchor: 'steps-to-apply', label: 'Become an advocate' },
            { anchor: 'around-the-world' , label: 'Around the world' },
            { anchor: 'meet-the-advocates', label: 'Meet the advocates' },
          ]"
        />
        <PageSection id="steps-to-apply">
          <h2>Steps to apply</h2>
          <p>
            <ol>
              <li>Click on the "Apply now" button below.</li>
              <li>Complete the test attached to the application form.</li>
              <li>Upload the test results to the application form and hit submit.</li>
            </ol>
          </p>
          <ul class="actions">
            <li>
              <Cta to="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                Apply now
              </Cta>
            </li>
          </ul>
        </PageSection>
        <PageSection id="around-the-world" extra-position="start">
          <h2>Around the world</h2>
          <div id="advocates-map" />
        </PageSection>
        <PageSection id="meet-the-advocates">
          <h2>Meet the advocates</h2>
          <div class="advocate-cards-container">
            <AdvocateCard
              v-for="(card, index) in profiles"
              :key="`advocate-${index}`"
              :name="card.attributes.name"
              :image="`/images/advocates/${card.attributes.image}`"
              :location="card.attributes.location"
              :areas="card.attributes.areas"
            />
          </div>
        </PageSection>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import QiskitOrgMenu from '~/components/menus/QiskitOrgMenu.vue'
import InnerNavigation from '~/components/menus/InnerNavigation.vue'
import CanvasHeader from '~/components/headers/CanvasHeader.vue'
import PageSection from '~/components/sections/PageSection.vue'
import PageFooter from '~/components/footers/PageFooter.vue'
import Cta from '~/components/ctas/Cta.vue'
import AdvocateCard from '~/components/cards/AdvocateCard.vue'
import CompactFeature from '~/components/features/CompactFeature.vue'

@Component({
  layout: 'education',

  components: {
    QiskitOrgMenu,
    InnerNavigation,
    CanvasHeader,
    PageSection,
    PageFooter,
    Cta,
    AdvocateCard,
    CompactFeature
  },

  head() {
    return {
      title: 'Qiskit Advocates'
    }
  },

  async asyncData(ctx) {
    const index = await import(`~/content/advocates/index/${'master.md'}`)
    const sections = await ctx.app.deepLoadCardToc('profiles.md', {
      basePath: 'advocates/index/'
    })
    return {
      profiles: sections[0].collections.regular,
      attributes: index.attributes,
      renderFn: index.vue.render,
      staticRenderFns: index.vue.staticRenderFns
    }
  },

  mounted() {
    require('d3')
    require('topojson')
    const Datamap = require('datamaps')
    const map = new Datamap({
      element: document.getElementById('advocates-map'),
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
        popupTemplate(_, data) {
          return `<div class="map-tip">${data.name}</div>`
        },
        highlightFillColor: 'var(--secondary-color-lightmost)'
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
  }
})
export default class extends Vue { }
</script>

<style lang="scss">
@import '~/assets/scss/mixins.scss';
@import '~/assets/scss/theme.scss';
@import '~/assets/scss/layout.scss';

@import url(~/static/css/fonts.css);

html {
  background-color: var(--primary-color);
}

main {
  color: var(--body-color-light);
  background-color: var(--primary-color-darkmost);
  background-image: linear-gradient(150deg, var(--primary-color-darkmost) 15%,var(--primary-color-dark) 70%,var(--primary-color) 94%);
}

.inner-navigation {
  position: sticky;
  top: 0;
  z-index: 100;
}

.actions {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: row;
}

#advocates-benefits {
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }

  .compact-feature {
    padding-right: 1rem;

    &:last-child {
      padding-right: 0;
    }
  }
}

#steps-to-apply {
  color: var(--body-color-dark);
  background-color: white;

  .page-section {
    @include framed();
  }
}

#around-the-world {
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 0.3em;
  }

  .page-section {
    width: calc(100% - 4rem);
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .copy-container {
    position: relative;
  }

  .map-tip {
    position: relative;
    font-size: 0.8rem;
    font-weight: 200;
    color: white;
    background-color: var(--secondary-color);
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
      border-bottom: 8px solid var(--secondary-color);
      transform: translate(-50%);
    }
  }
}

#meet-the-advocates {
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 0.3em;
  }

  .page-section {
    @include framed();
  }

  .advocate-cards-container {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    .advocate-card {
      width: 100%;
      border: 1px solid var(--secondary-color);
    }

    & > *:nth-child(3n - 1) {

    }
  }
}

@media (max-width: 600px) {
  .inner-navigation {
    position: static;
  }
}
</style>
