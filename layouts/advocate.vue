<template>
  <div class="wrapper">
    <Menu>
      <li><a href="/">Home</a></li>
      <li><a href="/events">Events</a></li>
      <!-- <li><a href="/advocates">Advocates</a></li> -->
    </Menu>
    <header>
      <section>
        <div>
          <h1>Qiskit Advocates</h1>
          <p class="header-subtitle">
            A global program that provides support to the individuals who actively work on assisting and growing the Qiskit Community
          </p>
        </div>
      </section>
    </header>
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    Menu,
    Footer
  }
})
export default class extends Vue { };
</script>

<style>
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url("/fonts/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Regular.woff") format("woff");
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url("/fonts/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Italic.woff") format("woff");
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url("/fonts/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff") format("woff");
}

:root {
  --secondary-color: rgb(103, 58, 183);
  --dark-color: rgb(30, 20, 60);
  --gray-color: rgba(71, 71, 71, 0.9);
}

* {
  margin: 0;
  padding: 0;
}

ul {
  margin: 1rem 0 1rem 3rem;
}

a {
  text-decoration: none;
  color: #4A90E2;
}

a:hover {
  opacity: 0.6;
}

html {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: calc(10px + (18 - 10) * ((900px - 340px) / (900 - 340)));
  background-image: url('/images/events/deco/dots.svg'),
                    url('/images/events/deco/dots.svg'),
                    url('/images/events/deco/dots.svg'),
                    url('/images/events/deco/lines.svg'),
                    url('/images/events/deco/lines.svg'),
                    url('/images/events/deco/lines.svg');
  background-repeat:  repeat-x,
                      repeat-x,
                      repeat-x,
                      repeat-y,
                      repeat-y,
                      repeat-y;
  background-position:  top calc(100vh + 890px) left 0,
                        top calc(100vh + 930px) left 0,
                        top calc(100vh + 970px) left 0,
                        top 0 right 100px, top 0 right 0,
                        top 0 right -100px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

header {
  position: relative;
  top: 63px;
  height: calc(100vh - 63px);
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/images/advocates/advocates.jpg);
}

header > section {
  position: relative;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

header > section > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header img {
  height: 100vw;
  position: absolute;
  width: auto;
  top: 10px;
}

header h1 {
  font-size: 50px;
  margin-left: 1.5rem;
  text-align: center;
}

header .header-subtitle {
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  max-width: 30rem;
  margin: 0 auto;
}

@media (max-width: 800px) {

  header section {
    display: block;
    text-align: center;
  }

  header h1 {
    margin: 0;
    margin-top: 2rem;
  }

}

@media (max-height: 390px) {
  header h1 {
    margin: 0;
    margin-top: 0.5rem;
  }

  header section {
    padding: 1rem;
  }
}
</style>
