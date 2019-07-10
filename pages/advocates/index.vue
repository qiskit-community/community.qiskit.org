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
      <Card
        v-for="(card, cardIndex) in section.regular"
        :key="`card-${cardIndex}`"
        :title="card.attributes.title"
        :image="`/images/events/${card.attributes.image}`"
        :to="card.attributes.to"
        :info="card.html"
        major
      />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Card from '~/components/Card.vue'

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
  layout: 'secondary',

  components: { Card },

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
