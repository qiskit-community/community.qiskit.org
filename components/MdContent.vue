<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) renderFn
  @Prop(String) staticRenderFns

  templateRender: Function | null = null

  render (createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering...')
  }

  created () {
    /* eslint no-eval: "off" */
    this.templateRender = eval(this.$props.renderFn).bind(this)
    this.$options.staticRenderFns = eval(this.$props.staticRenderFns)
  }
}
</script>

<style lang="scss" scoped>
ul, ol {
  list-style-position: inside;
  padding-left: 2rem;
  margin-top: 1rem;
}

ul {
  list-style-type: square;
}

ol li,
ul li {
  margin: 1rem 0;
}

h2 {
  margin-top: 3rem;
}

h3 {
  margin-top: 2rem;
}

p {
  text-align: justify;
}
</style>
