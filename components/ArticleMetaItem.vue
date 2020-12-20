<template>
  <div class="article-meta-item">
    <component
      :is="iconTag"
      :icon="icon"
      :src="image"
      alt="icon"
      class="article-meta-item__icon"
      loading="lazy"
    />
    <component
      :is="textTag"
      :href="href"
      :to="to"
      class="article-meta-item__text"
    >
      {{ text }}
    </component>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon'

export default {
  components: {
    AppIcon,
  },
  props: {
    href: {
      default: '',
      type: String,
    },
    icon: {
      default: '',
      type: String,
    },
    image: {
      default: '',
      type: String,
    },
    text: {
      default: '',
      required: true,
      type: String,
    },
    to: {
      default: '',
      type: String,
    },
  },
  computed: {
    iconTag() {
      const tag = this.icon ? 'app-icon' : 'img'
      return tag
    },
    textTag() {
      const tag = this.href ? 'a' : this.to ? 'nuxt-link' : 'span'
      return tag
    },
  },
}
</script>

<style lang="scss" scoped>
.article-meta-item {
  display: grid;
  grid-template-rows: ($size-base * 2);
  grid-template-columns: ($size-base * 2) 1fr;
  gap: ($size-base * 1);
  align-items: center;
}
.article-meta-item__icon {
  width: 100%;
  height: 100%;
  font-size: $font-size-l1;
  line-height: ($size-base * 2);
}

.article-meta-item__text {
  font-size: $font-size-s2;
  line-height: 1;
  color: inherit;

  @include bp(md) {
    font-size: $font-size-s1;
  }

  &:hover {
    text-decoration: none;
  }
}
</style>
