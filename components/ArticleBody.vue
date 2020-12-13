<template>
  <div class="article-body">
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
    <nuxt-content class="article-body__content" :document="article" />
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  props: {
    article: {
      default: () => {},
      required: true,
      type: Object,
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
// .article-body {}

// .article-body__content {}
</style>
