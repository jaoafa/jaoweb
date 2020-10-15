<template>
  <header class="the-header">
    <div class="the-header__main">
      <nuxt-link class="the-header__logo" to="/">
        <app-logo />
      </nuxt-link>
      <the-header-navigation
        v-model="navigationCurrent"
        class="the-header__navigation"
        :items="navigationItems"
      />
    </div>
    <svg
      class="the-header__left"
      viewBox="0 0 174 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-1.44358e-05 100L-5.69352e-06 -9.53966e-06L173.21 5.60284e-06L-1.44358e-05 100Z"
      />
    </svg>
    <div class="the-header__expanded"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigationCurrent: '',
      navigationItems: [
        {
          text: 'サーバ情報',
          value: 'server',
        },
        {
          text: 'ブログ',
          to: '/blog',
          value: 'blog',
        },
        {
          text: 'コミュニティ',
          value: 'community',
        },
        {
          text: 'お問い合わせ',
          value: 'support',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$header-main-height-mobile: $size-base * 6;
$header-main-height-desktop: $size-base * 9;
$header-logo-width-mobile: $size-base * 18;
$header-logo-width-desktop: $size-base * 27;
$header-border-width: 6px;

.the-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  background: $color-white;

  &::before {
    position: absolute;
    top: $header-main-height-desktop + 7px;
    right: calc(100% - #{$header-logo-width-desktop});
    display: none;
    width: ($size-base * 32);
    height: $header-border-width;
    content: '';
    background: $color-primary;
    transform: rotate(-30deg);
    transform-origin: right top;

    @include bp(md) {
      display: block;
    }
  }
  &::after {
    position: absolute;
    top: $header-main-height-mobile + 7px;
    right: 0;
    width: 100%;
    height: $header-border-width;
    content: '';
    background: $color-primary;

    @include bp(md) {
      top: $header-main-height-desktop + 7px;
      width: calc(100% - #{$header-logo-width-desktop});
    }
  }
}

.the-header__main {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: $header-logo-width-mobile 1fr;
  align-items: center;
  height: $header-main-height-mobile;
  padding: 0 ($size-base * 1);
  margin: auto;

  @include bp(sm) {
    padding: 0 ($size-base * 2);
  }
  @include bp(md) {
    grid-template-columns: $header-logo-width-desktop 1fr;
    max-width: $size-width-max;
    height: $header-main-height-desktop;
    padding: 0 ($size-base * 3);
  }
}

.the-header__logo {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  color: inherit;
  transition-duration: ($transition-duration-base * 1);

  &:hover {
    color: $color-gray-2;
  }

  @include bp(md) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
}

.the-header__navigation {
  display: none;
  justify-self: right;

  @include bp(md) {
    display: block;
  }
}

.the-header__left {
  position: absolute;
  top: $header-main-height-desktop;
  left: 0;
  z-index: 90;
  display: none;
  width: ($size-base * 27 - 2px);
  fill: $color-white;

  @include bp(md) {
    display: block;
  }
}
</style>
