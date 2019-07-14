<template>
  <main>
    <section
      v-for="(section, index) in sections"
      :key="`section-${index}`"
    >
      <h2
        v-if="!!section.title"
        :id="section.anchor"
      >
        {{ section.title }}
      </h2>
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
}
.card {
  box-shadow: 0 1.6px 3.6px 0 hsla(0,0%,0%,.132), 0 0.3px 0.9px 0 hsla(0,0%,0%,.108);
  width: 33%;
  margin:0.5em;
}
</style>
