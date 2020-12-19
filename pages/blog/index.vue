<template>
  <div class="page">
    <div class="page__breadcrumbs">
      <app-breadcrumbs :items="breadcrumbs" />
      <div class="page__collection">
        <header class="page__collection-header"></header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ブログ',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.baseUrl + '/blog',
        },
      ],
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          disabled: false,
          to: '/',
          text: 'ホーム',
        },
        {
          disabled: true,
          to: '/blog',
          text: 'ブログ',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: ($size-base * 3) ($size-base * 2) ($size-base * 16);

  @include bp(md) {
    padding: ($size-base * 4) ($size-base * 3) ($size-base * 24);
  }
}

.page__breadcrumbs {
  max-width: $size-width-min;
  padding-bottom: ($size-base * 2);
  margin: auto;

  @include bp(md) {
    padding-bottom: ($size-base * 3);
    margin-left: ($size-base * 20);
  }
  @include bp(xl) {
    margin-left: auto;
  }
}
</style>
