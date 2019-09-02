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
              <section class="feature">
                <img class="feature__icon" src="/images/education/iconCommunityWhite@3x.png">
                <h2>Network with experts and enthusiasts</h2>
                <p>Advocates will be added to a group of quantum experts and will be apart of regular information sharing sessions.</p>
              </section>
              <section class="feature">
                <img class="feature__icon" src="/images/education/iconCommunityWhite@3x.png">
                <h2>Access to Qiskit core members and projects</h2>
                <p>Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas. They will also have the opportunity to work on new Qiskit projects.</p>
              </section>
              <section class="feature">
                <img class="feature__icon" src="/images/education/iconDemoWhite@3x.png">
                <h2>Increased visibility for your work</h2>
                <p>All advocates will have the opportunity to have their work supported and highlighted by IBM. Qiskit advocates will also have a public presence on the advocates landing page.</p>
              </section>
              <section class="feature">
                <img class="feature__icon" src="/images/education/iconEventsWhite@3x.png">
                <h2>Invitation to events</h2>
                <p>Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.</p>
              </section>
            </div>
          </template>
        </GatesHeader>
      </header>
      <div class="inner-navigation-scope">
        <InnerNavigation
          class="inner-navigation"
          :sections="[
            { anchor: 'steps-to-apply', label: 'Become an advocate' },
            { anchor: 'advocate-map' , label: 'Around the world' },
            { anchor: 'meet-the-advocates', label: 'Meet the advocates' },
          ]"
        />
        <PageSection id="steps-to-apply">
          <h2>Steps to apply</h2>
          <p>
            Accompany Abraham Asfaw through a series of video tutorials
            in our YouTube Channel explaining quantum computing through
            the use of Qiskit.
          </p>
          <ul class="actions">
            <li>
              <Cta to="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                View all episodes
              </Cta>
            </li>
          </ul>
        </PageSection>
        <PageSection id="advocates-map" extra-position="start">
          <h2>Around the world</h2>
          <p>
            Leverage the power of quantum computing using Qiskit with this
            university course supplement covering introductory materials,
            advanced algorithms and hardware. Include problem sets and
            exercises for students.
          </p>
          <ul class="actions">
            <li>
              <Cta to="/textbook/">
                Discover more
              </Cta>
            </li>
          </ul>
        </PageSection>
        <PageSection id="meet-the-advocates">
          <h2>Meet the advocates</h2>
          <div class="advocate-cards-container">
            <AdvocateCard
              v-for="(card, index) in advocateCards"
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
import PageFooter from '~/components/footers/PageFooter.vue'
import TextbookPreview from '~/components/education/TextbookPreview.vue'
import Cta from '~/components/ctas/Cta.vue'
// @ts-ignore: Cannot find module
import TextbookTOC from '~/content/education/textbook-toc.md'

@Component({
  layout: 'education',

  components: {
    QiskitOrgMenu,
    InnerNavigation,
    GatesHeader,
    PageSection,
    PageFooter,
    Cta
  },

  head() {
    return {
      title: 'Qiskit Advocates'
    }
  }
})
export default class extends Vue {
  activate(evt: PointerEvent) {
    const thisSelector = evt.currentTarget && evt.currentTarget as HTMLElement
    if (!thisSelector || thisSelector.classList.contains('is-active')) {
      return
    }

    // Change selector enabled
    const previouslyEnabled = document.querySelector('.selector.is-active')
    if (previouslyEnabled) {
      previouslyEnabled.classList.remove('is-active')
    }
    thisSelector.classList.add('is-active')

    // Dismiss the current active section
    const self = this
    function clearOut(evt: Event) {
      if (evt.currentTarget) {
        evt.currentTarget.removeEventListener('transitionend', clearOut)
        self.clearIsOut(evt.currentTarget as HTMLElement)
      }
    }
    const activeSection = document.querySelector('section.is-active')
    if (activeSection) {
      activeSection.addEventListener('transitionend', clearOut)
      activeSection.classList.add('is-out')
      activeSection.classList.remove('is-active')
    }

    // Activate the new one
    const newSection = document.querySelector(`#${thisSelector.dataset.to}`)
    if (newSection) {
      newSection.classList.add('is-active')
    }
  }

  clearIsOut(target: HTMLElement) {
    target.classList.remove('is-out')
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins.scss';
@import '~/assets/scss/theme.scss';
@import '~/assets/scss/layout.scss';

@import url(~/static/css/fonts.css);

#advocates-benefits {
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }
}

.feature {
  padding-right: 1rem;

  &:last-child {
    padding-right: 0;
  }
}

.feature__icon {
  position: relative;
  width: 3rem;
  height: 3rem;
}

.feature p {
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.feature h2 {
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

@media (max-width: 600px) {
  #education-benefits {
    display: block;
  }

  .feature {
    padding-right: 0;
    padding-bottom: 3rem;

    &:last-child {
      padding-bottom: 0;
    }
  }
}

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

#presentation {
  .extra-container {
    margin-right: 1rem;
  }

  .copy-container {
    max-width: 40%;
  }

  .header-video {
    width: 100%;
    max-width: 560px;
    height: 315px;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),
                0 8px 16px -8px rgba(0,0,0,.5),
                0 -6px 16px -6px rgba(0,0,0,.025);
  }
}

#video-series {
  .page-section {
    @include framed();
  }

  .episode {
    margin-left: 2rem;
    transform: perspective(1200px) rotateY(-20deg) rotateX(5deg);
    border-radius: 10px;
    box-shadow: 25px 35px 30px 0 #000f;
  }
}

#textbook {
  color: var(--body-color-dark);
  background-color: white;
  padding-bottom: 0rem;

  .page-section {
    @include framed();
  }

  .copy-container {
    width: 50%;
    background-color: white;
    padding: 4rem 0 4rem 4rem;
  }

  .extra-container {
    width: 60%;
    margin-left: -10%;
  }
}

#host-an-event {
  background-image:
    linear-gradient(#000000a0 0%, #000000a0 100%),
    url('/images/education/host-an-event-bg.jpg');
  background-position: 0, top;
  background-repeat: no-repeat;
  background-size: cover;

  .page-section {
    @include framed();
  }
}

@media (max-width: 600px) {
  .inner-navigation {
    position: static;
  }

  #presentation {
    .intro {
      display: block;
    }

    .copy-container {
      max-width: 100%;
    }

    .header-video {
      display: none;
    }
  }

  #textbook {
    min-height: auto;

    .copy-container {
      width: 100%;
      padding-left: 0;
    }
  }
}
</style>
