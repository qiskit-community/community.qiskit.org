<template>
  <main v-html="html">
    <section class="apply">
      <h3 class="section-title">
        Steps to apply
      </h3>
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
    <section
      v-for="(section, index) in sections"
      :key="`section-${index}`"
    >
      <h3
        v-if="!!section.title"
        :id="section.anchor"
        class="section-title"
      >
        {{ section.title }}
      </h3>
      <div class="card-container">
        <AdvocateCard
          v-for="(card, cardIndex) in section.regular"
          :key="`card-${cardIndex}`"
          :name="card.attributes.name"
          :image="`/images/advocates/${card.attributes.image}`"
          :location="card.attributes.location"
          :areas="card.attributes.areas"
          major
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AdvocateCard from '~/components/AdvocateCard.vue'
import Button from '~/components/Button.vue'

function loadToc(source: string): Promise<any> {
  return import(`~/content/${source}/toc.md`)
}

async function embedDocuments(section, source: string, collection: string) {
  if (!section[collection]) { return [] }
  section[collection] = await Promise.all(section[collection].map(
    path => import(`~/content/${source}/${path}`)
  ))
}

@Component({
  layout: 'advocate',

  components: { AdvocateCard, Button },

  async asyncData() {
    const root = 'advocates/index'
    const sections = await loadToc(root)
    /* for (const aSection of sections.attributes) {
      await embedDocuments(aSection, root, 'regular')
    } */

    return {
      sections: sections.attributes,
      html: sections.html
    }
  }
})

export default class extends Vue { }
</script>

<style>
main {
  position: relative;
  top: 60px;
}
</style>

<style>
h2 {
  font-size: 1.5em;
  margin-left: 5%;
  margin-bottom: 1.5em;
  margin-top: 1em;
}

.join {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--secondary-color);
  color: #FFFFFF;
}

.join > ul {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  margin: 1rem 3rem 1rem 3rem
}

.join > ul > li {
  margin: 1em 1em 2em;
}

.join > ul > li > p:first-of-type {
  float: left;
}

.join > ul > li > p > img {
  padding-right: 1rem;
  height: 3rem;
  width: 3rem;
  border-radius: 0;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.advocate-card {
  padding: 1em;
  box-shadow: 10px 10px 11px -10px var(--gray-shadow);
  border: 1px solid var(--gray-shadow);
  width: 25%;
  margin: 0.5em;
}

.apply {
  background-color: var(--gray-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
}
.apply > ol {
  list-style: none;
  margin-left: 5%;
  counter-reset: my-awesome-counter;
}

.apply > ol > li {
  margin: 0.5em;
  position: relative;
  counter-increment: my-awesome-counter;
  --size: 1.5rem;
}

.apply > ol > li::before {
  content: counter(my-awesome-counter);
  color: var(--gray-color);
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  margin-right: 0.5rem;
  display: inline-block;
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  text-align: center;
}

@media (max-width: 800px) {
  .join > ul {
    display: block;
  }

  .card-container {
    flex-direction: column;
    align-items: center;
  }
  .advocate-card {
    width: 70%;
  }
}
</style>
