<template>
  <div class="social-share"></div>
</template>

<script>
  import '../../node_modules/social-share.js/dist/js/social-share.min.js'
  export default {
    name: 'share',
    props: {
      config: {
        type: Object
      }
    },
    mounted() {
      window.socialShare(this.$el, this.config)
    }
  }
</script>

<style src="../../node_modules/social-share.js/dist/css/share.min.css"></style>
