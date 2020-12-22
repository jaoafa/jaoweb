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
      <article-footer
        :author="_article.author"
        :created-at="_article.createdAt"
        :updated-at="_article.updatedAt"
        class="page__footer"
      />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const { slug } = params
    let article
    try {
      try {
        article = await $content('blog', slug).fetch()
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
          article.category
        ).fetch()
        article.category = {
          name: article.category.name,
          slug: article.category.slug,
        }
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
    // Article
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
          to: '/blog',
          text: 'ブログ',
        },
        {
          disabled: false,
          to: '/blog/category/' + this._article.category.slug,
          text: this._article.category.name,
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
      if (article.author.name) {
        meta.push({
          image:
            'https://crafatar.com/avatars/' +
            article.author.uuid +
            '?overlay=true',
          text: article.author.name,
        })
      }
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
      if (article.category) {
        meta.push({
          icon: 'tag',
          text: article.category.name,
        })
      }
      return meta
    },
  },
}
</script>

<style lang="scss" scoped>
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
