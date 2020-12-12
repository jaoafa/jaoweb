<template>
  <div>
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
    }
  },
}
</script>
