<template>
  <div class="content-root">
    <header class="global-nav">
      <nav class="content">nav</nav>
    </header>
    <main>
      <header>
        <div class="gates" aria-hidden="true" />
        <section id="intro" class="content">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/a1NZC5rqQD8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div>
            <h1>Qiskit for Educators</h1>
            <p>Qiskit makes it easy to start learning quantum software to run on real quantum hardware. Teach your students with the same tools used by scientists and engineers worldwide to accelerate research towards practical applications for quantum computing.</p>
            <ul>
              <li><a class="button" href="#">Contact Us</a></li>
            </ul>
          </div>
        </section>
      </header>
    </main>
    <footer>footer</footer>
  </div>
</template>

<style>
@import url(~/static/css/fonts.css);

:root {
  --dark-color: #242a2e;
  --secondary-color: #893ffc;
}

* {
  padding: 0;
  margin: 0;
}

.content-root * {
  box-sizing: border-box;
}

html {
  background-color: var(--dark-color);
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
  min-height: 100%;
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
  max-width: 1040px;
  margin: 0 auto;
}

.button {
  padding: 0.66rem 1rem;
  background-color: var(--dark-color);
  border: 2px solid var(--secondary-color);
  font-size: 0.75em;
  font-weight: 100;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  white-space: nowrap;
}

.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  background-color: var(--dark-color);
  z-index: 100;
}

main > header {
  position: relative;
  top: 50px;
}

.gates {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: linear-gradient(150deg,#893ffc 15%,#a167fc 70%,#bc93fc 94%);
  z-index: -1;
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
}

#intro p {
  margin-top: 1.5rem;
}

#intro ul {
  list-style: none;
  margin-top: 2.5rem;
}

#intro ul li {
  display: inline-block;
}
</style>
