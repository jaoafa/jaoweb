<template>
  <nav class="the-header-expanded-mobile"></nav>
</template>

<script>
export default {
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.the-header-expanded-mobile {
  @include bp(md) {
    display: none;
  }
}
</style>
