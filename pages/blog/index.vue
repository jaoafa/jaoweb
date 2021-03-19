<template>
  <div class="page">
    <div class="page__breadcrumbs">
      <app-breadcrumbs :items="breadcrumbs" />
    </div>
    <div class="page__collection">
      <article-header
        class="page__header"
        title="ブログ"
        description="jaoの世界から、最新情報から旬なネタ、お役立ち情報まで幅広くお届けします。"
      />
      <div class="page__body">
        <article-collection :collection="collection" />
      </div>
    </div>
    <div class="page__footer">
      <app-pagination
        :value="1"
        :length-visible="8"
        :length="totalPages"
        @input="selectPage"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, $config, error }) {
    const limit = 8
    let collection
    let authors
    let categories
    let totalPages
    try {
      try {
        const all = await $content('blog').fetch()
        totalPages = Math.ceil(all.length / limit)
        collection = await $content('blog')
          .only([
            'title',
            'slug',
            'author',
            'image',
            'category',
            'createdAt',
            'path',
          ])
          .sortBy('createdAt', 'desc')
          .limit(limit)
          .fetch()
      } catch (e) {
        throw new Error('Page not found.')
      }
      try {
        authors = await $content('blog', 'authors').fetch()
      } catch (e) {
        throw new Error('Author settings is incorrect.')
      }
      try {
        categories = await $content('blog', 'categories').fetch()
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
      collection: collection.map((article) => {
        const createdAt = new Date(article.createdAt)
        return {
          title: article.title,
          slug: article.slug,
          path: article.path,
          image: article.image || $config.baseUrl + $config.baseImage,
          author: [...authors]
            .filter((item) => item.slug === article.author)
            .map((item) => {
              return {
                name: item.name,
                icon:
                  'https://crafatar.com/avatars/' + item.uuid + '?overlay=true',
              }
            })
            .shift(),
          category: [...categories]
            .filter((item) => item.slug === article.category)
            .shift().name,
          createdAt:
            createdAt.getFullYear() +
            '-' +
            ('0' + (createdAt.getMonth() + 1)).slice(-2) +
            '-' +
            ('0' + createdAt.getDate()).slice(-2),
        }
      }),
      authors,
      categories,
      totalPages,
    }
  },
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
  methods: {
    selectPage(page) {
      this.$router.push('/blog/page/' + page)
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

.page__footer {
  margin-top: ($size-base * 7);
  overflow: hidden;
}
</style>
