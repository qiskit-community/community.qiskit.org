<template>
  <main>
    <header>
      <section>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NHTDqdGfzcc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div>
            <h1>{{ attributes.title }}</h1>
            <p class="header-subtitle">
              {{ attributes.tagline }}
            </p>
          </div>
        </div>
      </section>
    </header>
    <section class="recommendations">
      <h2
        v-if="!!sections[0].title"
        :id="sections[0].anchor"
        class="section-title"
      >
        {{ sections[0].title }}
      </h2>
      <div class="card-container">
        <Card
          v-for="(card, cardIndex) in sections[0].collections.cards"
          :key="`card-${cardIndex}`"
          :title="card.attributes.title"
          :image="card.attributes.image"
          :to="card.attributes.to"
          :info="card.html"
          major
          centered-background
        />
      </div>
    </section>
    <section class="benefits">
      <h2
        v-if="!!sections[1].title"
        :id="sections[1].anchor"
        class="section-title"
      >
        {{ sections[1].title }}
      </h2>
      <div class="card-container">
        <Card
          v-for="(card, cardIndex) in sections[1].collections.cards"
          :key="`card-${cardIndex}`"
          :title="card.attributes.title"
          :image="card.attributes.image"
          :to="card.attributes.to"
          :info="card.html"
          major
          centered-background
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Card from '~/components/Card.vue'
import Button from '~/components/Button.vue'
import MdContent from '~/components/MdContent.vue'

@Component({
  layout: 'education',

  components: { Card, Button, MdContent },

  head() {
    const self = this as any
    const title = self.attributes.title
    const description = self.attributes.tagline
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description }
      ]
    }
  },

  async asyncData(ctx) {
    const index = await import(`~/content/education/index/${'master.md'}`)
    const sections = await ctx.app.deepLoadCardToc('toc.md', {
      basePath: 'education/index/'
    })

    return {
      attributes: index.attributes,
      sections
    }
  }
})
export default class extends Vue { }
</script>

<style>
</style>
