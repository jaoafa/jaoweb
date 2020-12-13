<template>
  <div class="article-body">
    <nuxt-content class="article-body__content" :document="article" />
  </div>
</template>

<script>
export default {
  props: {
    article: {
      default: () => {},
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.article-body__content {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: ($size-base * 2) 0;
  margin-top: ($size-base * 3);

  @include bp(md) {
    margin-top: ($size-base * 5);
  }
}
</style>
