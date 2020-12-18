<template>
  <div class="page">
    <div class="page__main">
      <header class="page__header">
        <div class="page__status">{{ error.statusCode }}</div>
        <h1 class="page__heading">{{ title }}</h1>
      </header>
      <div class="page__body">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      default: () => {},
      required: true,
      type: Object,
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
    }
  },
  computed: {
    title() {
      return this.error.statusCode === 404
        ? 'Page Not Found'
        : 'An Error Occurred'
    },
    message() {
      return this.error.statusCode === 404
        ? 'ページが見つかりませんでした。あなたがアクセスしようとしたページは、何者かに破壊されたか、座標が変更されています。URLに間違いがないかお確かめの上、元のページにお戻りいただくか、ページ上部のメニューより移動したいページをお選びください。'
        : 'ページを開くことが出来ませんでした。あなたがアクセスしようとしたページは、運営チームの力量不足のためバグまみれになっているか、工事中の可能性があります。URLに間違いがないかお確かめの上、元のページにお戻りいただくか、ページ上部のメニューより移動したいページをお選びください。'
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: ($size-base * 8) ($size-base * 2) ($size-base * 14);

  @include bp(md) {
    padding: ($size-base * 10) ($size-base * 3) ($size-base * 20);
  }
}

.page__main {
  max-width: $size-width-min;
  margin: auto;
  text-align: center;
}

.page__header {
  font-family: $font-family-en;
  line-height: 1.25;
}

.page__status {
  font-size: $font-size-l5;
  font-weight: $font-weight-bold;

  @include bp(md) {
    font-size: 160px;
  }
}

.page__heading {
  font-size: $font-size-l2;
  font-weight: $font-weight-normal;

  @include bp(md) {
    font-size: $font-size-l4;
  }
}

.page__body {
  margin-top: ($size-base * 6);
  font-size: $font-size-s1;

  @include bp(md) {
    font-size: $font-size-base;
  }
}
</style>
