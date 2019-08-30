<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="content-root" tabindex="-1">
    <header id="navigation">
      <QiskitOrgMenu />
    </header>
    <main>
      <header>
        <GatesHeader
          class="presentation"
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
              <MdContent
                :render-fn="tocRenderFn"
                :static-render-fns="tocStaticRenderFns"
              />
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
              <Cta to="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                Request an event
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
    Cta
  },

  head() {
    return {
      title: 'Qiskit for Educators'
    }
  },

  async asyncData() {
    const textbookToc = await import('~/content/education/textbook-toc.md')
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
@import url(~/static/css/fonts.css);

:root {
  --ibm-blue: #0a1d8f;
  --primary-color: #242a2e;
  --primary-color-dark: #161f25;
  --primary-color-darkmost: #0d1a22;
  --primary-color-light: #424c53;
  --primary-color-lightmost: #5d6870;
  --secondary-color: #893ffc;
  --secondary-color-light: #a167fc;
  --secondary-color-lightmost: #bc93fc;
  --secondary-color-dark: #6f16fa;
  --secondary-color-darkmost: #6105f2;
  --body-color-light: #e0e0e0;
  --body-color-dark: #333333;
}

.inner-navigation {
  position: sticky;
  top: 0;
  z-index: 100;
}

.presentation .extra-container {
  margin-right: 1rem;
}

.presentation .copy-container {
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

* {
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}

.content-root * {
  box-sizing: border-box;
}

html {
  background-color: var(--primary-color);
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
  min-height: 100%;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  margin-top: 1.5rem;
}

.content-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

.content-root > main {
  flex-grow: 1;
}

.content-wrapper {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.actions {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: row;
}

main {
  color: var(--body-color-light);
  background-color: var(--primary-color-darkmost);
  background-image: linear-gradient(150deg, var(--primary-color-darkmost) 15%,var(--primary-color-dark) 70%,var(--primary-color) 94%);
}

#video-series {
  .page-section {
    @include framed();
  }
}

.episode {
  margin-left: 2rem;
  transform: perspective(1200px) rotateY(-20deg) rotateX(5deg);
}

.episode iframe {
  border-radius: 10px;
  box-shadow: 0 10px 30px 0 #000000b0;
}

#textbook {
  color: var(--body-color-dark);
  background-color: white;
  min-height: 600px;

  .page-section {
    @include framed();
  }

  .copy-container {
    width: 50%;
    background-color: white;
    padding: 4rem 0 4rem 2rem;
  }

  .extra-container {
    width: 60%;
    margin-left: -10%;
  }
}

#host-an-event {
  .page-section {
    @include framed();
  }
}

@media (max-width: 600px) {
  #intro,
  #video-series .content-wrapper {
    display: block;
  }

  iframe,
  section > aside,
  #textbook aside {
    display: none;
  }

  #highlights {
    display: none;
  }

  #video-series {
    margin-top: 0;
  }

  #textbook {
    min-height: unset;
  }

  #intro .description,
  #video-series .description,
  #textbook .description {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
  }

  footer {
    margin-top: 0;
  }

  footer .content-wrapper {
    display: block;
  }

  footer h2 {
    margin: 4rem 0 0;
  }

  footer .content-wrapper > section:last-child {
    margin-right: 2rem;
  }
}
</style>
