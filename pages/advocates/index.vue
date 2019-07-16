<template>
  <main>
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
          class="card"
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

async function loadToc(source: string): Promise<any> {
  const toc = (await import(`~/src/${source}/toc.md`)).attributes
  return toc
}

async function embedDocuments(section, source: string, collection: string) {
  if (!section[collection]) { return [] }
  section[collection] = await Promise.all(section[collection].map(
    path => import(`~/src/${source}/${path}`)
  ))
}

@Component({
  layout: 'advocate',

  components: { AdvocateCard },

  async asyncData() {
    const root = 'advocates/index'
    const sections = await loadToc(root)
    for (const aSection of sections) {
      await embedDocuments(aSection, root, 'regular')
    }

    return {
      sections
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

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 1em;
  box-shadow: 10px 10px 11px -10px var(--gray-shadow);
  border: 1px solid var(--gray-shadow);
  width: 25%;
  margin:0.5em;
}

@media (max-width: 800px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 70%;
  }
}
</style>
