<template>
  <div class="page">
    <div class="page-breadcrumbs">
      <app-breadcrumbs :items="breadcrumbs" />
    </div>
    <article class="page-article">
      <article-header
        :title="_article.title"
        category="お知らせ"
        :author="_article.author"
        :image="_article.image"
        :created-at="_article.createdAt"
        :updated-at="_article.updatedAt"
      />
      <ul>
        <li
          v-for="link of _article.toc"
          :key="link.id"
          :class="{
            toc2: link.depth === 2,
            toc3: link.depth === 3,
          }"
        >
          <a :href="`#${link.id}`" @click.prevent="scrollSmooth('#' + link.id)">
            {{ link.text }}
          </a>
        </li>
      </ul>
      <nuxt-content :document="_article" />
    </article>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

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
  methods: {
    scrollSmooth(to) {
      const cancelScroll = VueScrollTo.scrollTo(to, 200, { offset: -100 })
      return cancelScroll
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: ($size-base * 4) ($size-base * 2) ($size-base * 24);

  @include bp(md) {
    padding: ($size-base * 4) ($size-base * 3) ($size-base * 24);
  }
}

.page-breadcrumbs {
  max-width: $size-width-min;
  padding-bottom: ($size-base * 1);
  margin: auto;

  @include bp(md) {
    padding-bottom: ($size-base * 3);
    margin-left: ($size-base * 20);
  }
  @include bp(xl) {
    margin-left: auto;
  }
}

.page-article {
  max-width: $size-width-min;
  margin: auto;
}
</style>
