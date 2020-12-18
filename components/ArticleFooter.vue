<template>
  <footer class="article-footer">
    <div class="article-footer__author">
      <img class="article-footer__author-image" :src="_author.icon" />
      <div class="article-footer__author-name">
        <app-icon
          icon="shield-check"
          class="article-footer__author-name-icon"
        />
        {{ _author.name }}
      </div>
      <div class="article-footer__author-bio">{{ _author.bio }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    author: {
      default: () => {},
      required: true,
      type: Object,
    },
  },
  computed: {
    _author() {
      const author = { ...this.author }
      return {
        name: author.name ? author.name : '',
        bio: author.bio ? author.bio : '',
        icon: author.uuid
          ? 'https://crafatar.com/avatars/' + author.uuid + '?overlay=true'
          : '',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.article-footer {
  margin-top: ($size-base * 5);

  @include bp(md) {
    margin-top: ($size-base * 14);
  }
}

.article-footer__author {
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: ($size-base * 10) 1fr;
  gap: ($size-base * 1) ($size-base * 4);
}

.article-footer__author-image {
  display: grid;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  width: 100%;
}

.article-footer__author-name {
  font-size: $font-size-l1;
  font-weight: $font-weight-bold;
}

.article-footer__author-name-icon {
  margin-right: ($size-base * 1);
  font-size: $font-size-l2;
  color: $color-primary;
}

.article-footer__author-bio {
  font-size: $font-size-s1;
  white-space: pre-wrap;
}
</style>
