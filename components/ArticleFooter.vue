<template>
  <footer class="article-footer">
    <div class="article-footer__author">
      <img class="article-footer__author-image" :src="_author.icon" />
      <div class="article-footer__author-name">
        {{ _author.name }}
      </div>
      <div class="article-footer__author-bio">{{ _author.bio }}</div>
    </div>
    <div class="article-footer__meta">
      <article-meta-item icon="calendar" :text="'公開日：' + createdAt" />
      <article-meta-item icon="update" :text="'更新日：' + updatedAt" />
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
  margin-top: ($size-base * 8);

  @include bp(md) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ($size-base * 10);
  }
}

.article-footer__author {
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: ($size-base * 8) 1fr;
  gap: ($size-base * 1) ($size-base * 3);
  max-width: ($size-base * 67);

  @include bp(md) {
    grid-template-columns: ($size-base * 10) 1fr;
    gap: ($size-base * 1) ($size-base * 4);
  }
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
  line-height: 1.25;
}

.article-footer__author-bio {
  font-size: $font-size-s1;
  white-space: pre-wrap;
}

.article-footer__meta {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: ($size-base * 1);
  margin-top: ($size-base * 4);
  font-size: $font-size-s1;

  @include bp(md) {
    margin-top: 0;
  }
}
</style>
