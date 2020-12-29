<template>
  <div class="article-meta-item">
    <component
      :is="iconTag"
      v-bind="iconAttributes"
      class="article-meta-item__icon"
    />
    <component
      :is="textTag"
      v-bind="textAttributes"
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
    text: {
      default: '',
      required: true,
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
    href: {
      default: '',
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
    iconAttributes() {
      const attributes = {}
      const icon = this.icon
      const image = this.image
      if (icon) {
        attributes.icon = icon
      }
      if (image) {
        attributes.src = image
        attributes.alt = 'icon'
        attributes.loading = 'lazy'
      }
      return attributes
    },
    textTag() {
      const tag = this.href ? 'a' : this.to ? 'nuxt-link' : 'span'
      return tag
    },
    textAttributes() {
      const attributes = {}
      const href = this.href
      const to = this.to
      if (href) {
        attributes.href = href
      }
      if (to) {
        attributes.to = to
      }
      return attributes
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
