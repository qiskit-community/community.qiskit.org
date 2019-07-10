<template>
  <article>
    <figure>
      <img :src="image" :alt="name">
    </figure>
    <div class="content">
      <p class="bold">
        <strong>{{ name }}</strong>
      </p>
      <p>{{ location }}</p>
      <p class="bold">
        <strong>Focus Areas</strong>
      </p>
      <p>{{ areas }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  props: {
    name: String,
    image: String,
    location: String,
    areas: String
  }
})

export default class extends Vue { }
</script>

<style scoped>
article {
  display: flex;
  flex-direction: row;
}
figure {
  width: 35%;
  margin: 0.5em;
}
img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
p {
  font-size: 0.8em;
}
p.bold {
  font-size: 1em;
  font-weight: 800;
}
</style>
