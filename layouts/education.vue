<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="content-root" tabindex="-1">
    <header id="navigation">
      <QiskitOrgMenu
        :links="[
          { to: '/education', label: 'Education' },
          { to: '/advocates', label: 'Advocates' }
        ]"
      />
    </header>
    <main>
      <header>
        <div class="gates" aria-hidden="true" />
        <section id="intro" class="content-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NHTDqdGfzcc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div class="description">
            <h1>Qiskit for Educators</h1>
            <p>Qiskit makes it easy to start learning quantum software to run on real quantum hardware. Teach your students with the same tools used by scientists and engineers worldwide to accelerate research towards practical applications for quantum computing.</p>
          </div>
        </section>
      </header>
      <div>
        <section id="inner-navigation">
          <nav class="content-wrapper">
            <a href="#video-series">Coding With Qiskit Series</a>
            <a href="#textbook">Qiskit Textbook</a>
          </nav>
        </section>
        <section id="video-series">
          <div class="content-wrapper">
            <div class="description">
              <h2>Coding With Qiskit Video Series</h2>
              <p>
                Accompany Abraham Asfaw through a series of video tutorials
                in our YouTube Channel explaining quantum computing through
                the use of Qiskit.
              </p>
              <ul class="actions">
                <li>
                  <a class="button" href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                    View all episodes
                  </a>
                </li>
              </ul>
            </div>
            <aside class="episode">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RrUTwq5jKM4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </aside>
          </div>
        </section>
        <section id="textbook">
          <div class="content-wrapper">
            <aside>
              <section id="textbook-features">
                <div
                  class="selector is-active"
                  data-to="toc"
                  @click.capture="activate"
                >
                  <img src="/images/education/iconTab.svg">
                  <p>Table of Contents</p>
                </div>
                <div
                  class="selector"
                  data-to="live-code"
                  @click.capture="activate"
                >
                  <img src="/images/education/iconTab.svg">
                  <p>Code Samples</p>
                </div>
                <section id="live-code">
                  <div class="content">
                    <iframe
                      height="600px"
                      width="100%"
                      src="https://repl.it/@delapuente/BellState?lite=true"
                      scrolling="no"
                      frameborder="no"
                      allowtransparency="true"
                      allowfullscreen="true"
                      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
                    />
                  </div>
                </section>
                <section id="toc" class="is-active">
                  <img class="bookmark" src="/images/education/iconBookmark.svg">
                  <div class="content">
                    <h2>Table of Contents:</h2>
                    <h3>Chapter 0. Introduction and Prerequisites</h3>
                    <ul>
                      <li>Hello World</li>
                      <li>Python and Jupyter Notebooks</li>
                      <li>Qiskit</li>
                    </ul>
                    <h3>Chapter 1. Quantum States and Qubits</h3>
                    <ul>
                      <li>Introduction</li>
                      <li>The Atoms of Computation</li>
                      <li>The Unique Properties of Qubits</li>
                      <li>Writing Down Qubit States</li>
                      <li>Pauli Matrices and the Bloch Sphere</li>
                      <li>States for Many Qubits</li>
                    </ul>
                    <h3>Chapter 2. Single-Qubit and Multi-Qubit Gates</h3>
                    <ul>
                      <li>Introduction</li>
                      <li>Quantum Gates</li>
                      <li>Fun with Matrices</li>
                      <li>The Stardard Gate Set</li>
                      <li>Proving Universality</li>
                      <li>Basic Circuit Identities</li>
                    </ul>
                    <h3>Chapter 3. Quantum Algorithms</h3>
                    <ul>
                      <li>Quantum Teleportation</li>
                      <li>Deutsch-Josza Algorithm</li>
                      <li>Bernstain-Vazirani Algorithm</li>
                      <li>Simon's Algorithm</li>
                      <li>Quantum Fourier Transform</li>
                      <li>Quantum Phase Estimation</li>
                      <li>Grover's Algorithm</li>
                      <li>Shor's Algorithm</li>
                    </ul>
                  </div>
                </section>
              </section>
            </aside>
            <div class="description">
              <h2>Qiskit Textbook</h2>
              <p>
                Leverage the power of quantum computing using Qiskit with this
                university course supplement covering introductory materials,
                advanced algorithms and hardware. Include problem sets and
                exercises for students.
              </p>
              <ul class="actions">
                <li>
                  <a class="button" href="/textbook/">
                    Discover more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="host-an-event">
          <div class="content-wrapper">
            <div class="description">
              <h2>Host Qiskit Events</h2>
              <p>
                Bring Qiskit experts to your campus for guest lectures, hackathons, and other events. Guest lecture topics can range from quantum basics to advanced algorithms.
              </p>
              <ul class="actions">
                <li>
                  <a class="button" href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                    Request an event
                  </a>
                </li>
              </ul>
            </div>
            <aside class="episode">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RrUTwq5jKM4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </aside>
          </div>
        </section>
        <section id="highlights" class="content-wrapper">
          <section class="feature">
            <img src="/images/education/iconEventsBase@3x.png">
            <h2>Attend Exclusive Events</h2>
          </section>
          <section class="feature">
            <img src="/images/education/iconCommunityBase@3x.png">
            <h2>Join a Global Community</h2>
          </section>
          <section class="feature">
            <img src="/images/education/iconDemoBase@3x.png">
            <h2>Teach with Live Demos</h2>
          </section>
        </section>
      </div>
    </main>
    <footer>
      <div class="content-wrapper">
        <section id="elements-links">
          <h2>Qiskit Elements</h2>
          <ul>
            <li><a href="https://qiskit.org/terra">Terra</a></li>
            <li><a href="https://qiskit.org/aer">Aer</a></li>
            <li><a href="https://qiskit.org/aqua">Aqua</a></li>
            <li><a href="https://qiskit.org/ignis">Ignis</a></li>
          </ul>
        </section>
        <section id="community-links">
          <h2>Qiskit for Educators</h2>
          <ul>
            <li><a href="/textbook">Textbook</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">Coding With Qiskit</a></li>
          </ul>
        </section>
        <section id="social-media-links">
          <h2>Social Media</h2>
          <ul>
            <li><a href="https://github.com/Qiskit">GitHub</a></li>
            <li><a href="https://qiskit.slack.com/">Slack</a></li>
            <li><a href="https://twitter.com/Qiskit">Twitter</a></li>
            <li><a href="https://medium.com/Qiskit">Medium</a></li>
            <li><a href="https://www.youtube.com/Qiskit">YouTube</a></li>
            <li><a href="https://quantumcomputing.stackexchange.com/questions/tagged/qiskit">Stack Exchange</a></li>
            <li><a href="https://www.facebook.com/Qiskit">Facebook</a></li>
          </ul>
        </section>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import QiskitOrgMenu from '~/components/menus/QiskitOrgMenu.vue'

@Component({
  components: {
    QiskitOrgMenu
  },

  head() {
    return {
      title: 'Qiskit for Educators'
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

<style>
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

.button {
  padding: 0.66rem 1rem;
  background-color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  font-size: 0.75em;
  font-weight: 100;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  white-space: nowrap;
  line-height: 4rem;
}

main {
  color: var(--body-color-light);
  background-color: var(--primary-color-darkmost);
  background-image: linear-gradient(150deg, var(--primary-color-darkmost) 15%,var(--primary-color-dark) 70%,var(--primary-color) 94%);
}

main > header {
  position: relative;
  z-index: 0;
}

.gates {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  background-image: linear-gradient(150deg,#893ffc 15%,#a167fc 70%,#bc93fc 94%);
}

#intro {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  position: relative;
  color: white;
  padding: 2rem;
}

#intro iframe {
  position: relative;
  margin-right: 2rem;
  max-width: 560px;
  height: 315px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),
              0 8px 16px -8px rgba(0,0,0,.5),
              0 -6px 16px -6px rgba(0,0,0,.025);
}

#intro .description {
  max-width: 40%;
}

.actions {
  list-style: none;
  margin-top: 1.5rem;
}

.actions li {
  display: inline-block;
  margin-right: 1rem;
}

.actions li:last-child {
  margin-right: 0;
}

#inner-navigation {
  background-color: #fffe;
  position: sticky;
  top: 0;
  z-index: 100;
}

#inner-navigation nav {
  display: flex;
  justify-content: center;
  height: 90px;
}

#inner-navigation a {
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--body-color-dark);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: calc(100% / 2);
  border-right: 1px solid #3334;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.8rem;
}

#inner-navigation a:last-child {
  border-right: none;
}

#video-series {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

#video-series .content-wrapper {
  display: flex;
  padding-top: 4rem;
  border-top: 2px solid var(--primary-color);
}

#video-series .content-wrapper > * {
  width: 50%;
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
}

#textbook .content-wrapper {
  display: flex;
}

#textbook aside {
  width: 60%;
  margin-left: -10%;
}

#textbook .description {
  width: 50%;
  background-color: white;
  padding: 4rem 0 4rem 2rem;
}

#textbook-features {
  position: relative;
  min-height: calc(600px + 8rem);
  padding: 4rem 0;
}

#textbook-features > section {
  position: absolute;
  width: 100%;
}

#textbook-features::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 4rem;
  width: 100%;
  height: 100px;
  box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
  border-radius: 8px;
  transform-origin: center bottom;
  transform: scale(0.95);
  z-index: 1;
}

#textbook-features > section {
  opacity: 0;
  position: absolute;
  bottom: 5rem;
  height: 600px;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  transform-origin: center bottom;
  transform: scale(0.95) translateY(1rem);
  transition: transform 300ms, opacity 300ms;
}

#textbook-features > section.is-active {
  opacity: 1;
  z-index: 2;
  transform: scale(1);
  box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
}

#textbook-features > .is-out {
  opacity: 0;
  z-index: 2;
  transform: scale(1.3) translateY(-2rem);
  transition: transform 400ms, opacity 400ms;
}

#textbook-features .bookmark {
  position: absolute;
  top: -16px;
  left: 1rem;
  z-index: 3;
  width: 3.8rem;
  height: auto;
}

#textbook-features .selector {
  position: absolute;
  bottom: 5rem;
  left: calc(100% - 2.8rem);
  transition: transform 200ms;
  cursor: pointer;
}

#textbook-features .selector img {
  height: 4rem;
  width: auto;
}

#textbook-features .selector p {
  margin: 0;
  position: absolute;
  bottom: 0.7rem;
  right: 1rem;
  writing-mode: vertical-rl;
  height: 100%;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  transform: rotate(180deg);
}

#textbook-features .selector:nth-child(2) {
  bottom: 9rem;
  left: calc(100% - 2.8rem);
}

#textbook-features .selector.is-active,
#textbook-features .selector:hover {
  transform: translateX(1rem);
}

#textbook-features .content {
  z-index: 1;
  max-height: 100%;
  overflow-y: auto;
  padding-left: 3.5rem;
  font-size: 0.8rem;
}

#textbook-features .content ul {
  margin: 0.5rem 0 0 2rem;
}

#textbook-features .content h3 {
  margin: 1rem 0 0 0;
  color: var(--secondary-color);
}

#textbook-features #live-code,
#textbook-features #live-code * {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#highlights {
  display: flex;
  flex-direction: row;
  padding-top: 6rem;
}

#highlights .feature {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature {
  box-sizing: border-box;
  border: 4px solid var(--secondary-color);
  border-radius: 10px;
  margin: 0 1rem 0 0;
  padding: 2rem 1rem;
}

.feature:last-child {
  margin-right: 0;
}

.feature img {
  width: 50%;
  padding-bottom: 2rem;
}

.feature h2 {
  font-size: 1.1rem;
  text-align: center;
}

.feature p {
  text-align: center;
  margin-top: 1rem;
}

footer {
  margin-top: 4rem;
  padding-bottom: 4rem;
}

footer .content-wrapper {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: var(--primary-color-lightmost);
}

footer .content-wrapper > section {
  flex: 1;
  margin-right: 2rem;
}

footer .content-wrapper > section:last-child {
  margin-right: 0;
}

footer h2 {
  font-size: inherit;
  font-weight: normal;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--primary-color-lightmost);
}

footer ul {
  list-style: none;
  margin-top: 1.5rem;
}

footer a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  width: 100%;
}

footer a:hover {
  color: var(--body-color-light);
}

footer ul li {
  margin-top: 0.5rem;
  display: inline-block;
  width: 100%;
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
