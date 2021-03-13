<template>
  <header :class="classes">
    <!-- Main header area -->
    <div class="the-header__main">
      <!-- Logo -->
      <nuxt-link class="the-header__logo" to="/">
        <app-logo />
      </nuxt-link>
      <!-- Navigation -->
      <the-header-navigation
        v-model="navigationCurrent"
        class="the-header__navigation"
        :items="navigationItems"
      />
      <!-- Hamburger -->
      <button
        class="the-header__hamburger"
        @click="navigationMobileState = !navigationMobileState"
      >
        <span :class="{ active: navigationMobileState }"></span>
      </button>
    </div>
    <!-- / Main header area -->

    <!-- Right triangle -->
    <svg
      class="the-header__left"
      viewBox="0 0 174 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-1.44358e-05 100L-5.69352e-06 -9.53966e-06L173.21 5.60284e-06L-1.44358e-05 100Z"
      />
    </svg>

    <!-- Expanded navigation area -->
    <the-header-expanded
      :current="navigationCurrent"
      :items="navigationItems"
      :mobile-state="navigationMobileState"
      @close="navigationMobileState = false"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      // Currently selected navigation item
      navigationCurrent: '',
      // Navigation items
      navigationItems: [
        {
          text: 'サーバ情報',
          value: 'server',
          children: [
            {
              text: 'はじめての方へ',
              to: '/server/beginners',
              value: 'server-biginners',
            },
            {
              text: '運営者情報',
              to: '/server/profiles',
              value: 'server-profiles',
            },
            {
              text: 'サービス仕様',
              to: '/server/specifications',
              value: 'server-specifications',
            },
            {
              text: '利用規約',
              to: '/server/terms',
              value: 'server-terms',
            },
            {
              text: 'ガイドライン',
              to: '/server/guidelines',
              value: 'server-guidelines',
              children: [
                {
                  text: '鉄道敷設に関するガイドライン',
                  to: '/server/guidelines/railways',
                  value: 'server-guidelines-railways',
                },
                {
                  text: '自治体に関するガイドライン',
                  to: '/server/guidelines/cities',
                  value: 'server-guidelines-cities',
                },
                {
                  text: '撮影・動画配信に関するガイドライン',
                  to: '/server/guidelines/broadcasts',
                  value: 'server-guidelines-broadcasts',
                },
                {
                  text: '発言に関するガイドライン',
                  to: '/server/guidelines/communications',
                  value: 'server-guidelines-communications',
                },
              ],
            },
            {
              text: 'プライバシーポリシー',
              to: '/server/privacy',
              value: 'server-privacy',
            },
          ],
        },
        {
          text: 'ブログ',
          to: '/blog',
          value: 'blog',
        },
        {
          text: 'コミュニティ',
          value: 'community',
          children: [
            {
              text: 'ユーザ一覧',
              to: '/community/users',
              value: 'community-users',
            },
            {
              text: 'ギャラリー',
              to: '/community/gallery',
              value: 'community-gallery',
            },
            {
              text: 'Wiki',
              href: 'https://wiki.jaoafa.com',
              value: 'community-wiki',
            },
            {
              text: 'Discord',
              href: 'https://discord.com/invite/YjwYEBk',
              value: 'community-discord',
            },
          ],
        },
        {
          text: 'お問い合わせ',
          value: 'support',
          children: [
            {
              text: 'お問い合わせ',
              to: '/support/inquiry',
              value: 'support-inquiry',
            },
            {
              text: 'よくあるご質問',
              to: '/support/faq',
              value: 'support-faq',
            },
          ],
        },
      ],
      // Hamburger, USA
      navigationMobileState: false,
    }
  },
  computed: {
    classes() {
      return {
        'the-header': true,
        'the-header--selected': this.navigationCurrent,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$header-main-height-mobile: $size-base * 8;
$header-main-height-desktop: $size-base * 9;
$header-logo-width-mobile: $size-base * 16;
$header-logo-width-tablet: $size-base * 20;
$header-logo-width-desktop: $size-base * 27;
$header-border-width-mobile: 4px;
$header-border-width-desktop: 6px;

.the-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: $color-white;

  // Diagonal orange line under the header
  &::before {
    position: absolute;
    top: $header-main-height-desktop;
    right: calc(100% - #{$header-logo-width-desktop} + 4px);
    display: none;
    width: ($size-base * 32);
    height: $header-border-width-mobile;
    content: '';
    background-color: $color-primary;
    transform: rotate(-30deg);
    transform-origin: right top;

    @include bp(md) {
      display: block;
      height: $header-border-width-desktop;
    }
  }
  // Horizontal orange line under the header
  &::after {
    position: absolute;
    top: $header-main-height-mobile;
    right: 0;
    width: 100%;
    height: $header-border-width-mobile;
    content: '';
    background-color: $color-primary;

    @include bp(md) {
      top: $header-main-height-desktop;
      width: calc(100% - #{$header-logo-width-desktop} + 4px);
      height: $header-border-width-desktop;
    }
  }

  &--selected {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
}

.the-header__main {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: $header-logo-width-mobile 1fr;
  align-items: center;
  max-width: $size-width-max;
  height: $header-main-height-mobile;
  padding-left: ($size-base * 2);
  margin: auto;
  border-bottom: solid 1px $color-gray-6;

  @include bp(md) {
    grid-template-columns: $header-logo-width-tablet 1fr;
    height: $header-main-height-desktop;
    padding: 0 ($size-base * 3);
    border-bottom: none;
  }
  @include bp(lg) {
    grid-template-columns: $header-logo-width-desktop 1fr;
  }
}

.the-header__logo {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  color: inherit;
  transition-duration: ($transition-duration-base * 1);

  @include bp(md) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  &:hover {
    color: $color-gray-2;
  }
}

.the-header__navigation {
  display: none;
  justify-self: right;

  @include bp(md) {
    display: block;
  }
}

.the-header__hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: right;
  width: $header-main-height-mobile;
  height: $header-main-height-mobile;
  border-left: solid 1px $color-gray-6;

  @include bp(md) {
    display: none;
  }

  span {
    position: relative;
    display: block;
    width: ($size-base * 2);
    height: ($size-base * 2.5);
    background: linear-gradient(
      to bottom,
      transparent,
      transparent 45%,
      $color-gray-1 45%,
      $color-gray-1 55%,
      transparent 55%,
      transparent
    );

    &::before,
    &::after {
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      content: '';
      background-color: $color-gray-1;
      transition-duration: ($transition-duration-base * 1);
    }
    &::before {
      top: 4px;
    }
    &::after {
      bottom: 4px;
    }
    &.active {
      background: transparent;

      &::before {
        transform: translate(0, 7px) rotateZ(45deg);
      }
      &::after {
        transform: translate(0, -3px) rotateZ(-45deg);
      }
    }
  }
}

// Right triangle
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
