<template>
  <main>
    <section
      v-if="sections[0]"
    >
      <h2>
        {{ sections[0].title }}
      </h2>
      <div class="content featured">
        <ExperimentCard
          v-for="(experiment, experimentIndex) in sections[0].cards"
          :key="`experiment-${experimentIndex}`"
          :title="experiment.attributes.title"
          :image="experiment.attributes.image"
          :to="experiment.attributes.to"
          :author="experiment.attributes.author"
          :info="experiment.attributes.description"
          major
        />
      </div>
    </section>
    <section
      v-if="sections[1]"
    >
      <h2>
        {{ sections[1].title }}
      </h2>
      <div class="content collection">
        <ExperimentCard
          v-for="(experiment, experimentIndex) in sections[1].cards"
          :key="`experiment-${experimentIndex}`"
          :title="experiment.attributes.title"
          :image="experiment.attributes.image"
          :to="experiment.attributes.to"
          :author="experiment.attributes.author"
          :info="experiment.attributes.description"
          major
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ExperimentCard from '~/components/ExperimentCard.vue'

async function loadToc(source: string): Promise<any> {
  const toc = (await import(`~/src/${source}/index/toc.md`)).attributes
  return toc
}

async function embedCards(section, source: string) {
  const cards = await Promise.all((section.cards || []).map(
    path => import(`~/src/${source}/${path}`)
  ))
  section.cards = cards
}

@Component({
  layout: 'secondary',

  components: {
    ExperimentCard
  },

  async asyncData() {
    const root = 'experiments'
    const sections = await loadToc(root)
    for (const aSection of sections) {
      await embedCards(aSection, root)
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

.content {
  margin-left: 10%;
  margin-right: 10%;
  max-width: 100rem;
}

.featured .experiment {
  border: 1px solid #cccccc;
  box-shadow: 0 0 2rem 0rem rgba(0, 0, 0, 0.2);
  max-width: 40rem;
}

.featured .experiment:hover {
  box-shadow: 0 0rem 1rem 0rem rgba(0, 0, 0, 0.4);
}

.collection {
  display: grid;
  grid-gap: 0.4rem;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-auto-flow: row;
}

.collection .experiment {
  box-sizing: border-box;
  min-height: 20rem;
  min-width: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  border: 1px solid var(--ibm-color);
}

@media (max-width: 500px) {
  .collection {
    display: block;
  }

  .collection .experiment {
    min-height: auto;
    min-width: auto;
    max-width: auto;
    max-height: auto;
    margin-bottom: 0.5rem;
  }
}
</style>
