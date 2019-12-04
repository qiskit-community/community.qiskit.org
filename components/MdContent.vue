<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) renderFn
  @Prop(String) staticRenderFns

  render(createElement) {
    return this.$data.templateRender ? this.$data.templateRender()
      : createElement('div', 'Rendering...')
  }

  created() {
    /* eslint no-new-func: "off" */
    this.$data.templateRender =
      (new Function(this.$props.renderFn)()).bind(this)
    this.$options.staticRenderFns = new Function(this.$props.staticRenderFns)()
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
