<template>
  <header class="article-header">
    <h1 class="article-header__title">{{ title }}</h1>
    <div class="article-header__meta">
      <template v-if="_author.name">
        <div class="article-header__item">
          <img
            :src="_author.icon"
            class="article-header__icon"
            loading="lazy"
          />
          <span class="article-header__text">{{ _author.name }}</span>
        </div>
      </template>
      <template v-if="createdAt">
        <div class="article-header__item">
          <app-icon icon="calendar" class="article-header__icon" />
          <span class="article-header__text">{{ createdAt }}</span>
        </div>
      </template>
      <template v-if="updatedAt">
        <div class="article-header__item">
          <app-icon icon="update" class="article-header__icon" />
          <span class="article-header__text">{{ updatedAt }}</span>
        </div>
      </template>
      <template v-if="category">
        <div class="article-header__item">
          <app-icon icon="tag" class="article-header__icon" />
          <span class="article-header__text">{{ category }}</span>
        </div>
      </template>
    </div>
    <div class="article-header__eyecatch">
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
    category: {
      default: '',
      type: String,
    },
    author: {
      default: () => {},
      type: Object,
    },
    image: {
      default: '',
      type: String,
    },
    createdAt: {
      default: '',
      type: String,
    },
    updatedAt: {
      default: '',
      required: true,
      type: String,
    },
  },
  computed: {
    _author() {
      const author = { ...this.author }
      return {
        name: author.name ? author.name : '',
        icon: author.uuid
          ? 'https://crafatar.com/avatars/' + author.uuid + '?overlay=true'
          : '',
      }
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
}

.article-header__item {
  display: inline-flex;
  align-items: center;
  margin: ($size-base * 1) ($size-base * 1.5) 0 0;
  font-size: $font-size-s2;

  @include bp(md) {
    margin: ($size-base * 1) ($size-base * 2) 0 0;
    font-size: $font-size-s1;
  }

  &:last-child {
    margin-right: 0;
  }
}

.article-header__icon {
  width: ($size-base * 2);
  height: ($size-base * 2);
  margin-right: ($size-base * 1);
  font-size: $font-size-l1;
  line-height: ($size-base * 2);
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
