<template>
  <div class="article-collection">
    <template v-for="item of collection">
      <nuxt-link
        :key="item.slug"
        :to="item.path"
        class="article-collection__card"
      >
        <div class="article-collection__header">
          <img :src="item.image" :alt="item.title" loading="lazy" />
        </div>
        <div class="article-collection__body">
          <span class="article-collection__category">{{ item.category }}</span>
          <h2 class="article-collection__title">{{ item.title }}</h2>
          <span class="article-collection__author">{{ item.author.name }}</span>
          <span class="article-collection__date">{{ item.createdAt }}</span>
        </div>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    collection: {
      default: () => [],
      require: true,
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.article-collection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: ($size-base * 3) ($size-base * 2);
  align-items: flex-start;
}

.article-collection__card {
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  background-color: $color-white;
  border: solid 1px $color-gray-5;
  border-radius: 3px;
  transition-duration: $transition-duration-base;
  transition-property: border-color opacity;

  &:first-child {
    grid-column: span 2;
  }

  &:hover {
    border-color: $color-gray-4;
    opacity: 0.85;
  }
}

.article-collection__header {
  position: relative;
  width: 100%;
  padding-top: calc(100% / 1.9);
  overflow: hidden;

  & > img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: cover;
  }
}

.article-collection__body {
  display: flex;
  flex-wrap: wrap;
  padding: ($size-base * 2) ($size-base * 2);
}

.article-collection__category {
  width: 100%;
  font-size: $font-size-s2;
  color: $color-gray-3;
}

.article-collection__title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  margin-bottom: ($size-base * 1);
  overflow: hidden;
  font-size: $font-size-l1;
  line-height: 1.5;
  text-overflow: ellipsis;
}

.article-collection__author {
  display: inline-flex;
  align-items: center;
  margin-right: ($size-base * 1);
  font-size: $font-size-s2;
  color: $color-gray-3;
}

.article-collection__date {
  font-size: $font-size-s2;
  color: $color-gray-3;
}
</style>
