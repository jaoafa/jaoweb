<template>
  <div class="page">
    <div class="page__breadcrumbs">
      <app-breadcrumbs :items="breadcrumbs" />
    </div>
    <article class="page__article">
      <article-header
        :title="_article.title"
        :image="_article.image"
        :meta="meta"
        class="page__header"
      />
      <div class="page__body">
        <article-toc :article="_article" />
        <article-body :article="_article" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error, redirect }) {
    const { category, subcategory } = params
    if (subcategory === 'index') {
      return redirect('/' + category)
    }
    let article
    try {
      try {
        article = await $content(category, subcategory, 'index').fetch()
      }
      catch (e) {
        try {
          article = await $content(category, subcategory).fetch()
        }
      catch (e) {
          throw new Error('Page not found.')
        }
      }
    }
      catch (e) {
      if (e.message === 'Page not found.') {
        error({ statusCode: 404, message: e.message })
      }
      else {
        error({ statusCode: 500, message: e.message })
      }
    }
    return {
      article,
      category,
      subcategory,
    }
  },
  head() {
    const article = this.article
    const meta = []
    if (article.description) {
      if (article.description.length > 80) {
        article.description = (
          article.description.substr(0, 80) + '...'
        ).replace(/\r?\n/g, '')
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
    // Article
    _article() {
      const article = { ...this.article }
      if (article.createdAt) {
        const createdAt = new Date(article.createdAt)
        article.createdAt =
          createdAt.getFullYear() +
          '-' +
          ('0' + (createdAt.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + createdAt.getDate()).slice(-2)
      }
      if (article.updatedAt) {
        const updatedAt = new Date(article.updatedAt)
        article.updatedAt =
          updatedAt.getFullYear() +
          '-' +
          ('0' + (updatedAt.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + updatedAt.getDate()).slice(-2)
      }
      if (!article.image) {
        article.image = ''
      }
      return article
    },
    // Breadcrumbs items
    breadcrumbs() {
      return [
        {
          disabled: false,
          to: '/',
          text: 'ホーム',
        },
        {
          disabled: false,
          to: '/' + this.category,
          text:
            this.category === 'server'
              ? 'サーバ情報'
              : this.category === 'support'
              ? 'サポート'
              : '',
        },
        {
          disabled: true,
          to: this._article.path,
          text: this._article.title,
        },
      ]
    },
    // Meta to display in article header
    meta() {
      const article = { ...this._article }
      const meta = []
      if (article.createdAt) {
        meta.push({
          icon: 'calendar',
          text: article.createdAt,
        })
      }
      if (article.updatedAt) {
        meta.push({
          icon: 'update',
          text: article.updatedAt,
        })
      }
      return meta
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass' as *;

.page {
  max-width: $size-width-min;
  padding: ($size-base * 3) ($size-base * 2) ($size-base * 16);
  margin: auto;

  @include bp(md) {
    padding: ($size-base * 4) ($size-base * 3) ($size-base * 24);
  }
}

.page__breadcrumbs {
  padding-bottom: ($size-base * 2);

  @include bp(md) {
    padding-bottom: ($size-base * 3);
    margin-left: ($size-base * 20);
  }
  @include bp(xl) {
    margin-left: auto;
  }
}

.page__body {
  margin-top: ($size-base * 5);

  @include bp(md) {
    margin-top: ($size-base * 7);
  }
}
</style>
