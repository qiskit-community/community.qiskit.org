<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Button from '~/components/Button.vue'

@Component({
  components: {
    Button
  },

  props: {
    renderFn: String,
    staticRenderFns: String,
    availableComponents: Array
  },

  render(createElement) {
    return this.$data.templateRender ? this.$data.templateRender()
      : createElement('div', 'Rendering')
  },

  created() {
    /* eslint no-new-func: "off" */
    this.$data.templateRender =
      (new Function(this.$props.renderFn)()).bind(this)
    this.$options.staticRenderFns = new Function(this.$props.staticRenderFns)()
  }
})
export default class extends Vue {}
</script>
