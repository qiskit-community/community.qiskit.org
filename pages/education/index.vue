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
          main-title="Qiskit for Educators"
          extra-position="start"
        >
          <p>Qiskit makes it easy to start learning quantum software to run on real quantum hardware. Teach your students with the same tools used by scientists and engineers worldwide to accelerate research towards practical applications for quantum computing.</p>
          <template #extra>
            <iframe
              class="header-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NHTDqdGfzcc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </template>
          <!--<template #features>
            <div id="education-benefits">
              <section class="feature">
                <img class="feature__icon" src="/images/education/iconEventsWhite@3x.png">
                <h2>Attend Exclusive Events</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusantium ducimus. Iure quae quos labore eaque, reiciendis eius exercitationem possimus, aliquid doloremque nesciunt eum qui sed dicta. Eligendi, itaque sunt.</p>
              </section>
              <section class="feature">
                <img class="feature__icon" src="/images/education/iconCommunityWhite@3x.png">
                <h2>Join a Global Community</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusantium ducimus. Iure quae quos labore eaque, reiciendis eius exercitationem possimus, aliquid doloremque nesciunt eum qui sed dicta. Eligendi, itaque sunt.</p>
              </section>
              <section class="feature">
                <img class="feature__icon" src="/images/education/iconDemoWhite@3x.png">
                <h2>Teach with Live Demos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusantium ducimus. Iure quae quos labore eaque, reiciendis eius exercitationem possimus, aliquid doloremque nesciunt eum qui sed dicta. Eligendi, itaque sunt.</p>
              </section>
            </div>
          </template>-->
        </GatesHeader>
      </header>
      <div class="inner-navigation-scope">
        <InnerNavigation
          class="inner-navigation"
          :sections="[
            { anchor: 'video-series', label: 'Coding With Qiskit Series' },
            { anchor: 'textbook', label: 'Qiskit Textbook' },
            { anchor: 'host-an-event', label: 'Host Qiskit Events' }
          ]"
        />
        <PageSection id="video-series">
          <h2>Coding With Qiskit Video Series</h2>
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
          <template #extra>
            <iframe
              class="episode"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RrUTwq5jKM4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </template>
        </PageSection>
        <PageSection id="textbook" extra-position="start">
          <h2>Qiskit Textbook</h2>
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

          <template #extra>
            <TextbookPreview>
              <TextbookTOC />
            </TextbookPreview>
          </template>
        </PageSection>
        <PageSection id="host-an-event">
          <h2>Host Qiskit Events</h2>
          <p>
            Bring Qiskit experts to your campus for guest lectures, hackathons, and other events. Guest lecture topics can range from quantum basics to advanced algorithms.
          </p>
          <ul class="actions">
            <li>
              <Cta to="mailto:hello@qiskit.org">
                Request an event
              </Cta>
            </li>
          </ul>
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
import MdContent from '~/components/MdContent.vue'
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
    TextbookPreview,
    MdContent,
    Cta,
    TextbookTOC: TextbookTOC.vue.component,
  },

  head() {
    return {
      title: 'Qiskit for Educators'
    }
  },

  async asyncData() {
    const filename = 'textbook-toc.md'
    const textbookToc = await import(`~/content/education/${filename}`)
    return {
      tocRenderFn: textbookToc.vue.render,
      tocStaticRenderFns: textbookToc.vue.staticRenderFns
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

#education-benefits {
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
