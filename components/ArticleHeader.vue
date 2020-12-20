<template>
  <header class="article-header">
    <h1 class="article-header__title">{{ title }}</h1>
    <div class="article-header__meta">
      <template v-for="item in _meta">
        <article-meta-item
          :key="item.id"
          :icon="item.icon"
          :image="item.image"
          :text="item.text"
        />
      </template>
    </div>

    <div v-if="image" class="article-header__eyecatch">
      <img :src="image" :alt="title" loading="lazy" />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      required: true,
      type: String,
    },
    image: {
      default: '',
      type: String,
    },
    meta: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    _meta() {
      return this.meta.map((item, index) => {
        item.index = index + 1
        return item
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.article-header__title {
  font-size: $font-size-l3;
  line-height: 1.25;

  @include bp(md) {
    font-size: $font-size-l5;
  }
}

.article-header__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ($size-base * 1);

  & > * {
    margin: ($size-base * 1) ($size-base * 1.5) 0 0;

    @include bp(md) {
      margin-right: ($size-base * 2);
    }
  }
}

.article-header__eyecatch {
  position: relative;
  margin-top: ($size-base * 2);
  background-color: $color-gray-6;
  border-top: solid 4px $color-gray-4;

  @include bp(md) {
    margin-top: ($size-base * 4);
  }

  &::before {
    display: block;
    width: 100%;
    padding-top: 52.5%;
    content: '';
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
