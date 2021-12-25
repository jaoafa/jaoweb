<template>
  <ul>
    <li
      v-for="page in pages"
      :key="page.path"
      :class="'page-list__item--' + (page.path.split('/').length - minlength)"
    >
      <nuxt-link :to="page.path">
        {{ page.title }}
      </nuxt-link>
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
      minlength: 0,
    }
  },
  async created() {
    this.pages = await this.$content(this.path, { deep: true })
      .only(['title', 'slug', 'dir'])
      .sortBy(this.sortBy, this.sortDirection)
      .fetch()
    this.minlength = Math.min(
      ...this.pages.map((p) => p.path.split('/').length)
    )
  },
}
</script>

<style lang="scss" scoped>
.page-list__item {
  &--1 {
    margin-left: ($size-base * 3);
  }

  &--2 {
    margin-left: ($size-base * 6);
  }
}
</style>
