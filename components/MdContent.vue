<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(Function) renderFn
  @Prop(Array) staticRenderFns

  render(createElement) {
    return this.$data.templateRender ? this.$data.templateRender()
      : createElement('div', 'Rendering...')
  }

  created() {
    /* eslint no-new-func: "off" */
    this.$data.templateRender = (this.$props.renderFn).bind(this)
    this.$options.staticRenderFns = this.$props.staticRenderFns
  }
}
</script>
