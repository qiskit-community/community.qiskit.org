<template>
  <main>
    <MdContent
      :render-fn="renderFn"
      :static-render-fns="staticRenderFns"
    />
    <section
      v-for="(section, index) in sections"
      :key="`section-${index}`"
    >
      <h2
        v-if="!!section.title"
        :id="section.anchor"
        class="section-title"
      >
        {{ section.title }}
      </h2>
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
import MdContent from '~/components/MdContent.vue'

async function loadToc(source: string): Promise<any> {
  return (await import(`~/content/${source}`)).attributes
}

async function embedDocuments(section, basepath: string, collection: string) {
  if (!section[collection]) { return [] }
  section[collection] = await Promise.all(section[collection].map(
    path => import(`~/content/${basepath}${path}`)
  ))
}

@Component({
  layout: 'advocate',

  components: { AdvocateCard, Button, MdContent },

  async asyncData() {
    const root = 'advocates/index/advocates.md'
    const index = await import(`~/content/advocates/index/${'toc.md'}`)
    const sections = await loadToc(root)
    for (const aSection of sections) {
      await embedDocuments(aSection, 'advocates/index/', 'regular')
    }

    return {
      sections,
      renderFn: index.vue.render,
      staticRenderFns: index.vue.staticRenderFns
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

.join > h2,
.apply > h2 {
  color: white;
  font-size: 1.5em;
  margin-bottom: 1.5em;
  margin-top: 1em;
}

.join > h2::before,
.apply > h2::before {
  content: none;
}

.join {
  display: flex;
  padding: 0 5%;
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
  margin: 1rem 3rem 1rem 0;
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
  padding: 0 5% 3rem;
}

.apply > ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  margin-bottom: 2rem;
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
