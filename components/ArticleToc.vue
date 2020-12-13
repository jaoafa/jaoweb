<template>
  <div class="article-toc">
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
      const cancelScroll = VueScrollTo.scrollTo(to, 200, { offset: -88 })
      return cancelScroll
    },
  },
}
</script>
