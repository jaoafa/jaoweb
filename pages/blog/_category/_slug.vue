<template>
  <div>
    <article class="page-article">
      <app-breadcrumbs :items="breadcrumbs" />
      <ul>
        <li
          v-for="link of article.toc"
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
      <nuxt-content :document="article" />
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
          text: this.article.category,
        },
        {
          disabled: true,
          to:
            this.category && this.slug
              ? '/blog/' + this.category + '/' + this.slug
              : '',
          text: this.article.title,
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
.page-article {
  max-width: $size-width-min;
  padding: ($size-base * 4) 0 ($size-base * 24);
  margin: auto;
}
</style>
