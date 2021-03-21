<template>
  <ul>
    <li v-for="page in pages" :key="page.path">
      <nuxt-link :to="page.path">
        {{ page.title }}
      </nuxt-link>
      <pre>{{ page }}</pre>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    sortBy: {
      type: String,
      default: 'title',
    },
    sortDirection: {
      type: String,
      default: 'asc',
    },
  },
  data() {
    return {
      pages: [],
    }
  },
  async created() {
    this.pages = await this.$content(this.path, { deep: true })
      .only(['title', 'slug', 'dir'])
      .sortBy(this.sortBy, this.sortDirection)
      .fetch()
  },
}
</script>
