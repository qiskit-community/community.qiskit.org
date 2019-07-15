<template>
  <div class="wrapper">
    <Menu>
      <li><a href="/">Home</a></li>
      <li><a href="#whyJoin">Why Join</a></li>
      <li><a href="#applySteps">Apply</a></li>
      <li><a href="#meet-advocates">Advocates</a></li>
    </Menu>
    <header>
      <section>
        <div>
          <h1>Qiskit Advocates Program</h1>
          <p class="header-subtitle">
            A global program that provides support to the individuals<br>who actively work on assisting and growing the Qiskit Community
          </p>
        </div>
      </section>
    </header>
    <section id="whyJoin" class="join">
      <h3>Why Join</h3>
      <div class="gallery-text">
        <div class="gallery-text-column">
          <div class="gallery-text-content">
            <img src="images/icons/apply01.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Funding for your projects and work
              </h3>
              <p>Advocates can request funding or events and projects</p>
            </div>
          </div>
          <div class="gallery-text-content">
            <img src="images/icons/apply03.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Prioritized access to hardware
              </h3>
              <p>Advocates will receive prioritized access to publicly available hardware</p>
            </div>
          </div>
        </div>
        <div class="gallery-text-column">
          <div class="gallery-text-content">
            <img src="images/icons/apply02.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Network with experts and enthusiasts
              </h3>
              <p>Advocates will be added to a group of quantum experts and will receive ~~~~(??).</p>
            </div>
          </div>
          <div class="gallery-text-content">
            <img src="images/icons/apply04.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Increased visibility for your work
              </h3>
              <p>All advocates will have the opportunity to have their work supported by IBM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="apply">
      <h3>Steps to apply</h3>
      <ol>
        <li>Fill the form below</li>
        <li>Click the link to attend test</li>
        <li>Learn, Do the test and get certified!</li>
      </ol>
      <div class="button-container">
        <button onclick="alert('Redirect to apply form')">
          Apply Now!
        </button>
      </div>
    </section>
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

h3 {
  font-size: 1.5em;
  margin-bottom: 1.5em;
  margin-top: 1em;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
.join {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--secondary-color);
  padding-top: 5em;
  padding-left: 50px;
  color: #FFFFFF;
}

.join img {
  padding-right: 1rem;
  height: 40px;
}
.join img {
  display:inline-block;
  vertical-align:middle;
}

.applySteps{
  margin-left: 33.33%;
}

.apply {
  background-color: var(--gray-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  color: #FFFFFF;
}
.apply ol {
  max-width: 320px;
  counter-reset: my-awesome-counter;
  list-style: none;
  padding-left: 40px;
  margin: 0 auto;
}
.apply ol li {
  margin: 0.5em;
  counter-increment: my-awesome-counter;
  position: relative;
}
.apply ol li::before {
  content: counter(my-awesome-counter);
  color: var(--gray-color);
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  --size: 25px;
  left: calc(-1 * var(--size) - 10px);
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  top: 0;
  background: white;
  border-radius: 50%;
  text-align: center;
}
.apply .button-container {
  margin: 0 auto;
  text-align: center;
}
.apply .button-container button {
  padding: 0.5em 1em;
  margin: 1.5em;
  font-size: 1em;
  outline: 0;
  border: 2px solid white;
  border-radius: 5px;
  background: var(--gray-color);
  color: white;
  cursor: pointer;
}

.apply h1 {
  margin-top: 1.5em;
  margin-bottom: .5em;
}

.apply button{
  background-color: white;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.apply img{
  padding-right: 1rem;
  height: 30px;
}

.apply .button {
  margin: 1em;
  text-align: center;
}

.gallery-apply-content {
  display: flex;
  flex-direction: row;
  margin: 2vw;
}

.apply img {
  display: inline-block;
  vertical-align: middle;
}
.gallery-text {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.gallery-text-column {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.gallery-text-subtitle {
  font-size: 1.25em !important;
  margin-bottom: 0 !important;
}

.gallery-text-content {
  display: flex;
  flex-direction: row;
  margin: 1em 1em 2em 1em;
}

.gallery-text-content p {
  font-size: 0.9em;
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
  margin-left: 1.5rem;
  font-weight: bold;
  text-align: center;
}

h2::before {
  content: "";
  float: left;
  width: 5%;
  margin-top: 0.5rem;
  margin-right: 5%;
  border-top: 1px solid #0A1D8F;
}

h2 {
  margin: 2rem 0 2.5rem;
  color: #0A1D8F;
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

  .gallery-text {
    flex-direction: column;
  }
  .gallery-text-column {
    width: 100%;
  }
  .gallery-text-content {
    flex-direction: column;
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
