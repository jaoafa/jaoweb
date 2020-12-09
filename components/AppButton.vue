<template>
  <component
    :is="tag"
    :class="classes"
    :href="href"
    :to="to"
    type="button"
    @click="click"
  >
    <span class="app-button__content">
      <slot />
    </span>
  </component>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  props: {
    color: {
      default: 'primary',
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
    large: {
      default: false,
      type: Boolean,
    },
    small: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: false,
      type: Boolean,
    },
    outlined: {
      default: false,
      type: Boolean,
    },
    rounded: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    classes() {
      return {
        'app-button': true,
        'app-button--icon': this.icon,
        'app-button--size--large': this.large,
        'app-button--size--small': this.small,
        'app-button--size--default': !this.large && !this.small,
        'app-button--outlined': this.outlined,
        'app-button--rounded': this.rounded,
        [`app-button--color--${this.color}`]: true,
      }
    },
    tag() {
      return this.href && !this.href.startsWith('#')
        ? 'a'
        : this.to
        ? 'nuxt-link'
        : 'button'
    },
  },
  methods: {
    click(event) {
      if (this.href.startsWith('#')) {
        this.scrollSmooth()
      }
      this.$emit('change', event)
    },
    scrollSmooth() {
      const cancelScroll = VueScrollTo.scrollTo(this.href, 200)
      return cancelScroll
    },
  },
}
</script>

<style lang="scss" scoped>
$app-button-sizes: (
  large: (
    'height': $size-base * 6,
    'padding': $size-base * 3,
    'text-size': $font-size-base,
  ),
  small: (
    'height': $size-base * 3.5,
    'padding': $size-base * 1,
    'text-size': $font-size-s4,
  ),
  default: (
    'height': $size-base * 4,
    'padding': $size-base * 2,
    'text-size': $font-size-s2,
  ),
);

$app-button-colors: (
  primary: (
    'text': $color-gray-1,
    'background': $color-primary,
    'hover': $color-primary-light,
    'outlined-text': $color-gray-1,
    'outlined-border': $color-primary,
    'outlined-hover-text': $color-gray-1,
    'outlined-hover-background': $color-primary,
  ),
  dark: (
    'text': $color-white,
    'background': $color-black,
    'hover': $color-gray-2,
    'outlined-text': $color-black,
    'outlined-border': $color-black,
    'outlined-hover-text': $color-white,
    'outlined-hover-background': $color-black,
  ),
);

.app-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  font-weight: $font-weight-bold;
  text-decoration: none;
  transition-duration: ($transition-duration-base * 1);

  @each $name, $size in $app-button-sizes {
    &--size--#{$name} {
      min-width: map-get($size, 'height');
      height: map-get($size, 'height');

      &.app-button--icon {
        font-size: (map-get($size, 'text-size') * 1.5);
      }

      &:not(.app-button--icon) {
        padding: 0 map-get($size, 'padding');
        font-size: map-get($size, 'text-size');
      }

      &:not(.app-button--rounded) {
        &::before {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 0;
          height: 0;
          content: '';
          border: solid 6px transparent;
          border-bottom-color: $color-white;
          transform: rotate(-45deg);
        }
      }
    }
  }

  @each $name, $color in $app-button-colors {
    &--color--#{$name} {
      color: map-get($color, 'text');
      background: map-get($color, 'background');
      border-color: map-get($color, 'outlined-border');

      &:hover {
        background: map-get($color, 'hover');
      }

      &.app-button--outlined {
        color: map-get($color, 'outlined-text');

        &:hover {
          color: map-get($color, 'outlined-hover-text');
          background: map-get($color, 'outlined-hover-background');
        }
      }

      &:not(.app-button--rounded) {
        box-shadow: 2px 2px $color-white,
          3px 3px 0 1px map-get($color, 'background');

        &:hover {
          box-shadow: 2px 2px $color-white,
            3px 3px 0 1px map-get($color, 'hover');
        }
      }
    }
  }

  &--outlined {
    background: transparent;
    border-style: solid;
    border-width: 2px;
  }

  &--rounded {
    border-radius: 50%;
  }
}

.app-button__content {
  display: flex;
  align-items: center;
}
</style>
