<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="content-root" tabindex="-1">
    <header id="navigation">
      <QiskitOrgMenu />
    </header>
    <main>
      <header>
        <GatesHeader
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
        </GatesHeader>
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
          <ol>
            <li>Click on the "Apply now" button below.</li>
            <li>Complete the test attached to the application form.</li>
            <li>Upload the test results to the application form and hit submit.</li>
          </ol>
          <ul class="actions">
            <li>
              <Cta to="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                Apply now
              </Cta>
            </li>
          </ul>
        </PageSection>
        <MapSection id="around-the-world">
          <h2>Around the world</h2>
        </MapSection>
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
import GatesHeader from '~/components/headers/GatesHeader.vue'
import PageSection from '~/components/sections/PageSection.vue'
import MapSection from '~/components/advocates/MapSection.vue'
import PageFooter from '~/components/footers/PageFooter.vue'
import Cta from '~/components/ctas/Cta.vue'
import AdvocateCard from '~/components/cards/AdvocateCard.vue'
import CompactFeature from '~/components/features/CompactFeature.vue'

@Component({
  layout: 'education',

  components: {
    QiskitOrgMenu,
    InnerNavigation,
    GatesHeader,
    PageSection,
    MapSection,
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

  ol {
    margin-top: 1rem;
    list-style-position: inside
  }
}

#around-the-world {
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 0.3em;
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
  }
}

@media (max-width: 600px) {
  #advocates-benefits {
    display: flex;
    flex-direction: column;

    & > * {
      text-align: center;
      margin-top: 2rem;
    }
  }

  .inner-navigation {
    position: static;
  }

  #around-the-world {
    display: none;
  }

  #meet-the-advocates {
    .advocate-cards-container {
      display: block;

      & > * {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
