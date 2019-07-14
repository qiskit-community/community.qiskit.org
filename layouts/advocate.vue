<template>
    <div class="wrapper">
        <Menu>
            <li><a href="#whyJoin">Why Join</a></li>
            <li><a href="#applySteps">Apply</a></li>
            <li>Advocates</li>
        </Menu>
        <header>
          <section>
            <div>
                <h1>
                    <center>Qiskit Advocates Program</center>
                </h1>
                <p>
                    <center><strong>A global program that provides support to the individuals
                        <br>who actively work on assisting and growing the Qiskit Community</strong></center>
                </p>
            </div>
          </section>
        </header>
        <section class="join">
          <div id="whyJoin">
            <h1>Why Apply</h1>
            <div id="gallery-text">
              <div id="gallery-text-left">
                <img src="images/icons/apply01.svg">
                <h3>Funding for your projects and work</h3>
                <p>Advocates can request funding or events and projects</p>
              </div>
              <div id="gallery-text-left">
                <img src="images/icons/apply03.svg">
                <h3>Prioritized access to hardware</h3>
                <p>Advocates will receive prioritized access to publicly available hardware</p>
              </div>
              <div id="gallery-text-right">
                <img src="images/icons/apply02.svg">
                <h3>Network with experts and enthusiasts</h3>
                <p>Advocates will be added to a group of quantum experts and will receive ~~~~(??).</p>
              </div>
              <div id="gallery-text-right">
                <img src="images/icons/apply04.svg">
                <h3>Increased visibility for your work</h3>
                <p>All advocates will have the opportunity to have their work supported by IBM</p>
              </div>
            </div>
          </div>
        </section>
        <section class="apply">
          <div id="applySteps">
            <h1>Steps to apply</h1>
            <ol>
              <li>Fill the form below</li>
              <li>Click the link to attend test</li>
              <li>Learn, Do the test and get certified!</li>
            </ol>
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
import AdvocateCard from '~/components/AdvocateCard.vue'
import { Component } from 'vue-property-decorator'

@Component({
    components: {
        Menu,
        AdvocateCard,
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
  --dark-color: Hex(FFFFFF);
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
  /* min-fs + (max-fs - min-fs) * ((viewport-width - min-vw) / (max-vw - min-vw)) */
  font-size: calc(10px + (18 - 10) * ((900px - 340px) / (900 - 340)));
  background-image: url('/img/dots.svg'), url('/img/dots.svg'), url('/img/dots.svg'),
    url('/img/lines.svg'), url('/img/lines.svg'), url('/img/lines.svg');
  background-repeat: repeat-x, repeat-x, repeat-x, repeat-y, repeat-y, repeat-y;
  background-position: top calc(100vh + 890px) left 0, top calc(100vh + 930px) left 0, top calc(100vh + 970px) left 0,
    top 0 right 100px, top 0 right 0, top 0 right -100px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
.join {
  position: relative;
  width: 100%;
  background-color: rgb(138, 43, 226, 0.9);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  color: #FFFFFF;
}
.join h3 {
  color: #FFFFFF;
  margin-top: 1rem;
}
.join img {
  padding-right: 1rem;
  height: 4vw;
  min-height: 4rem;
  max-height: 4rem;
}
.join h3, .join img {
  display:inline-block;
  vertical-align:middle;
}
.apply{
  position: relative;
  width: 100%;
  background-color: rgb(71, 71, 71, 0.9);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  color: #FFFFFF;
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
  background-color: var(--dark-color)
}

header video {
  position: absolute;
  left: 50%;
  top: 0;
  height: 100vh;
  width: auto;
  transform: translateX(-50%);
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
  height: 10vw;
  min-height: 10rem;
  max-height: 14rem;
}

header h1 {
  font-size: 50px;
  margin-left: 1.5rem;
}

header p{
  margin-left: 1.5rem;
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
