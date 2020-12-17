<template>
  <div class="article-toc">
    <header class="article-toc__header" @click="toggleState">
      <span>目次</span>
      <app-icon
        :icon="tocState ? 'arrow-up-drop-circle' : 'arrow-down-drop-circle'"
      />
    </header>
    <div :class="{ 'article-toc__body': true, 'is-show': tocState }">
      <ul class="article-toc__list">
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{
            'article-toc__item': true,
            'article-toc__item--toc2': link.depth === 2,
            'article-toc__item--toc3': link.depth === 3,
          }"
        >
          <a
            class="article-toc__link"
            :href="`#${link.id}`"
            @click.prevent="scrollSmooth('#' + link.id)"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
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
  data() {
    return {
      tocState: false,
    }
  },
  methods: {
    scrollSmooth(to) {
      const cancelScroll = VueScrollTo.scrollTo(to, 200, { offset: -88 })
      return cancelScroll
    },
    toggleState() {
      this.tocState = !this.tocState
    },
  },
}
</script>

<style lang="scss" scoped>
.article-toc {
  width: 100%;
  max-width: ($size-base * 40);
}

.article-toc__header {
  padding: ($size-base * 1) ($size-base * 2);
  font-weight: $font-weight-bold;
  cursor: pointer;
  user-select: none;
  background-color: $color-gray-5;
}

.article-toc__body {
  max-height: 0;
  overflow: hidden;

  &.is-show {
    max-height: none;
  }
}

.article-toc__list {
  padding: ($size-base * 1) ($size-base * 3) ($size-base * 3);
  font-size: $font-size-s1;
  line-height: 1.25;
  list-style: none;
  border-left: solid 4px $color-gray-5;
}

.article-toc__item {
  padding: ($size-base * 1) 0 0;

  &--toc3 {
    padding-left: ($size-base * 3);
  }
}

.article-toc__link {
  color: $color-gray-1;

  &:hover {
    text-decoration: none;
  }
}
</style>
