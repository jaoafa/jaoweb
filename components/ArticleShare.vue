<template>
  <div class="article-share">
    <div class="article-share__main">
      <template v-for="item in items">
        <a
          :key="item.icon"
          :href="item.url"
          class="article-share__item"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <app-icon :icon="item.icon" />
        </a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
  },
  computed: {
    _url() {
      return this.$config.baseUrl + this.url
    },
    _title() {
      return this.title + '｜' + this.$config.baseName
    },
    items() {
      return [
        {
          icon: 'twitter',
          url:
            'https://twitter.com/intent/tweet?text=' +
            this._title +
            '&url=' +
            this._url,
        },
        {
          icon: 'facebook',
          url: 'https://www.facebook.com/sharer/sharer.php?u=' + this._url,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.article-share {
  position: absolute;
  top: ($size-base * 16);
  left: ($size-width-mid - $size-width-max);
  width: ($size-base * 3);
  height: 100%;

  @include bp(lg) {
    left: ($size-base * -6);
  }
  @include bp(xl) {
    left: ($size-base * -20);
  }
}

.article-share__main {
  position: sticky;
  top: ($size-base * 18);
  left: 0;
  width: 100%;
  height: auto;
}

.article-share__item {
  display: block;
  font-size: $font-size-l2;
  color: inherit;
  text-decoration: none;
  transition-duration: ($transition-duration-base * 1);

  &:hover {
    color: $color-gray-3;
  }

  & ~ & {
    margin-top: ($size-base * 1);
  }
}
</style>
