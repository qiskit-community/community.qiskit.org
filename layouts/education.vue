<template>
  <div class="content-root">
    <header class="global-nav">
      <div class="content">
        <a href="https://qiskit.org">Qiskit ™</a>
        <nav id="elements-navigation">
          <a href="https://qiskit.org/terra">Terra</a>
          <a href="https://qiskit.org/aer">Aer</a>
          <a href="https://qiskit.org/aqua">Aqua</a>
          <a href="https://qiskit.org/ignis">Ignis</a>
        </nav>
        <nav id="section-navigation">
          <a href="/education" class="active">Education</a>
          <a href="/advocates">Advocates</a>
          <a href="/events">Events</a>
          <a href="/experiments">Experiments</a>
        </nav>
      </div>
    </header>
    <main>
      <header>
        <div class="gates" aria-hidden="true" />
        <section id="intro" class="content">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_EweJlth2Sk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div>
            <h1>Qiskit for Educators</h1>
            <p>Qiskit makes it easy to start learning quantum software to run on real quantum hardware. Teach your students with the same tools used by scientists and engineers worldwide to accelerate research towards practical applications for quantum computing.</p>
            <ul class="actions">
              <li><a class="button" href="#">Contact Us</a></li>
            </ul>
          </div>
        </section>
      </header>
      <section id="highlights" class="content">
        <section class="feature">
          <img src="/images/education/event.svg">
          <h2>Attend Exclusive Events</h2>
          <p>Lorem ipsum dolor amet...</p>
        </section>
        <section class="feature">
          <img src="/images/education/event.svg">
          <h2>Join a Global Community</h2>
          <p>Lorem ipsum dolor amet...</p>
        </section>
        <section class="feature">
          <img src="/images/education/event.svg">
          <h2>Teach with Live Demos</h2>
          <p>Lorem ipsum dolor amet...</p>
        </section>
      </section>
      <section id="video-series">
        <div class="content">
          <div class="description">
            <h2>Coding With Qiskit Video Series</h2>
            <p>
              Accompany Abraham Asfaw through a series of video tutorials
              in our YouTube Channel explaining quantum computing through
              the use of Qiskit.
            </p>
            <ul class="actions">
              <li>
                <a class="button" href="https://www.youtube.com/watch?v=a1NZC5rqQD8">
                  Last Episode: Installing Qiskit
                </a>
              </li>
              <li>
                <a class="button" href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                  All the episodes
                </a>
              </li>
            </ul>
          </div>
          <aside class="episode">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/M4EkW4VwhcI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </aside>
        </div>
      </section>
      <section id="textbook">
        <div class="content">
          <aside />
          <div class="description">
            <h2>Qiskit Textbook</h2>
            <p>
              Leverage the power of quantum computing using Qiskit with this
              university course supplement covering introductory materials,
              advanced algorithms and hardware. Include problems and
              exercises.
            </p>
            <ul class="actions">
              <li>
                <a class="button" href="/textbook/">
                  Go to index
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="content">
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
  font-size: 2.2rem;
}

h2 {
  font-size: 1.2rem;
}

p {
  margin-top: 1.5rem;
}

.content-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
}

.content-root > main {
  flex-grow: 1;
}

.content {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
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

.global-nav {
  min-height: 60px;
  border: none;
  border-bottom: 1px solid black;
  background-color: var(--primary-color);
}

.global-nav .content {
  height: 100%;
  display: flex;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--body-color-light);
}

.global-nav .content > * {
  height: 100%;
}

.global-nav nav {
  display: flex;
}

.global-nav a {
  display: inline-flex;
  align-items: center;
  padding: 0 1em;
  color: inherit;
  text-decoration: none;
}

.global-nav .active {
  position: relative;
  top: 1px;
  border-bottom: 4px solid var(--secondary-color-light);
}

#elements-navigation::before {
  content: "";
  background-color: var(--body-color-light);
  width: 1px;
  margin: 12px 10px;
}

#section-navigation {
  margin-left: auto;
}

main {
  color: var(--body-color-light);
  background-color: var(--primary-color-darkmost);
  background-image: linear-gradient(150deg, var(--primary-color-darkmost) 15%,var(--primary-color-dark) 70%,var(--primary-color) 94%);
}

main > header {
  position: relative;
  z-index: 1;
}

.gates {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  min-width: 560px;
  max-width: 560px;
  height: 315px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),
              0 8px 16px -8px rgba(0,0,0,.5),
              0 -6px 16px -6px rgba(0,0,0,.025);
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

#video-series {
  margin-top: 5rem;
  margin-bottom: 4rem;
}

#video-series .content {
  display: flex;
  padding-top: 5rem;
  border-top: 2px solid var(--primary-color);
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
  background-image: linear-gradient(to right, #f2f4f8 0, #f2f4f8 50%, white 50.01%);
}

#textbook aside {
  background-image: url('/images/education/illustration-ibmq-experience.png');
  background-repeat: no-repeat;
  background-size: contain;
}

#textbook .content {
  display: flex;
}

#textbook .content > * {
  flex: 1;
  box-sizing: border-box;
}

#textbook .description {
  background-color: white;
  padding: 6rem 0 4rem 2rem;
}

#highlights {
  display: flex;
  flex-direction: row;
  padding-top: 8rem;
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
  width: 20%;
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

footer .content {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: var(--primary-color-lightmost);
}

footer .content > section {
  flex: 1;
  margin-right: 2rem;
}

footer .content > section:last-child {
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
</style>
