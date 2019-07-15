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
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 1em;
  -webkit-box-shadow: 10px 10px 11px -10px rgba(148,148,148,1);
  -moz-box-shadow: 10px 10px 11px -10px rgba(148,148,148,1);
  box-shadow: 10px 10px 11px -10px rgba(148,148,148,1);
  border: 1px solid rgba(148,148,148,1);
  width: 25%;
  margin:0.5em;
}
figure {
  width: 96px;
  margin: 0 auto;
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
  margin-top: 1em;
  font-size: 1em;
  font-weight: 800;
}

@media (max-width: 720px) {
  article {
    width: 70%;
  }
}
</style>
