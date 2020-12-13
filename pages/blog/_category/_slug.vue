<template>
  <div class="page">
    <div class="page__breadcrumbs">
      <app-breadcrumbs :items="breadcrumbs" />
    </div>
    <article class="page__article">
      <div class="page__article-header">
        <article-header
          :title="_article.title"
          category="お知らせ"
          :author="_article.author"
          :image="_article.image"
          :created-at="_article.createdAt"
          :updated-at="_article.updatedAt"
        />
      </div>
      <div class="page__article-body">
        <article-toc :article="article" />
        <article-body :article="article" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const { category, slug } = params
    let article
    try {
      article = await $content('blog', category, slug).fetch()
    } catch (e) {
      error({ message: 'Article not found.' })
    }
    return {
      article,
      category,
      slug,
    }
  },
  data() {
    return {}
  },
  computed: {
    _article() {
      const article = { ...this.article }
      if (article.createdAt) {
        const createdAt = new Date(article.createdAt)
        article.createdAt =
          createdAt.getFullYear() +
          '-' +
          (createdAt.getMonth() + 1) +
          '-' +
          createdAt.getDate()
      }
      if (article.updatedAt) {
        const updatedAt = new Date(article.updatedAt)
        article.updatedAt =
          updatedAt.getFullYear() +
          '-' +
          (updatedAt.getMonth() + 1) +
          '-' +
          updatedAt.getDate()
      }
      return article
    },
    breadcrumbs() {
      return [
        {
          disabled: false,
          to: '/',
          text: 'ホーム',
        },
        {
          disabled: false,
          to: '/blog',
          text: 'ブログ',
        },
        {
          disabled: false,
          to: this.category ? '/blog/' + this.category : '',
          text: this._article.category,
        },
        {
          disabled: true,
          to:
            this.category && this.slug
              ? '/blog/' + this.category + '/' + this.slug
              : '',
          text: this._article.title,
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

.page__article {
  max-width: $size-width-min;
  margin: auto;
}

.page__article-body {
  margin-top: ($size-base * 3);

  @include bp(md) {
    margin-top: ($size-base * 5);
  }
}
</style>
