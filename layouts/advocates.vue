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

@Component({ components: { Menu, Footer } })
export default class extends Vue {}
</script>

<style>
@import url(../static/css/fonts.css);
@import url(../static/css/config.css);
@import url(../static/css/theme.css);

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
