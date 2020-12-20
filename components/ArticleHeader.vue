<template>
  <header class="article-header">
    <h1 class="article-header__title">{{ title }}</h1>
    <div class="article-header__meta">
      <template v-for="item in meta">
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
    meta() {
      return [
        {
          id: 1,
          image: this._author.icon,
          text: this._author.name,
        },
        {
          id: 2,
          icon: 'calendar',
          text: this.createdAt,
        },
        {
          id: 3,
          icon: 'update',
          text: this.updatedAt,
        },
        {
          id: 4,
          icon: 'tag',
          text: this.category,
        },
      ]
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
