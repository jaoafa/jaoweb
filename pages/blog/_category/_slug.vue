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
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
      <nuxt-content :document="article" />
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
}
</script>

<style lang="scss" scoped>
.page-article {
  max-width: $size-width-min;
  margin: auto;
}
</style>
