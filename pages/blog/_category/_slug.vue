<template>
  <div class="page">
    <div class="page__breadcrumbs">
      <app-breadcrumbs :items="breadcrumbs" />
    </div>
    <article class="page__article">
      <div class="page__article-header">
        <article-header
          :title="_article.title"
          :category="_article.category"
          :author="_article.author"
          :image="_article.image"
          :created-at="_article.createdAt"
          :updated-at="_article.updatedAt"
        />
      </div>
      <div class="page__article-body">
        <article-toc :article="_article" />
        <article-body :article="_article" />
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
      try {
        article = await $content('blog', category, slug).fetch()
      } catch (e) {
        throw new Error('Page not found.')
      }
      try {
        article.author = article.author
          ? await $content('authors', article.author).fetch()
          : {}
      } catch (e) {
        throw new Error('Author settings is incorrect.')
      }
      try {
        article.category = await $content(
          'blog',
          'categories',
          category
        ).fetch()
        article.category = article.category.name
      } catch (e) {
        throw new Error('Category settings is incorrect.')
      }
    } catch (e) {
      if (e.message === 'Page not found.') {
        error({ statusCode: 404, message: e.message })
      } else {
        error({ statusCode: 500, message: e.message })
      }
    }
    return {
      article,
    }
  },
  data() {
    return {}
  },
  head() {
    const article = this.article
    const meta = []
    if (article.description) {
      if (article.description.length > 80) {
        article.description = article.description.substr(0, 80) + '...'
      }
      meta.push({
        hid: 'description',
        name: 'description',
        content: article.description,
      })
      meta.push({
        hid: 'og:description',
        property: 'og:description',
        content: article.description,
      })
    }
    if (article.title) {
      meta.push({
        hid: 'og:title',
        property: 'og:title',
        content: article.title,
      })
    }
    if (article.path) {
      meta.push({
        hid: 'og:url',
        property: 'og:url',
        content: this.$config.baseUrl + article.path,
      })
    }
    if (article.image) {
      meta.push({
        hid: 'og:image',
        property: 'og:image',
        content: article.image,
      })
    }
    return {
      title: this._article.title,
      meta,
    }
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
      if (!article.image) {
        article.image = this.$config.baseImage
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
          to: this._article.dir,
          text: this._article.category,
        },
        {
          disabled: true,
          to: this._article.path,
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
  margin-top: ($size-base * 5);

  @include bp(md) {
    margin-top: ($size-base * 7);
  }
}
</style>
