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
      <button
        class="the-header__toggle"
        :class="{ active: navigationMobileState }"
        @click="navigationMobileState = !navigationMobileState"
      ></button>
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
    <the-header-expanded
      :current="navigationCurrent"
      :items="navigationItems"
      :mobile-state="navigationMobileState"
    />
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
              to: 'https://discord.com/invite/YjwYEBk',
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
      navigationMobileState: false,
    }
  },
}
</script>

<style lang="scss" scoped>
$header-main-height-mobile: $size-base * 6;
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
  background: $color-white;

  &::before {
    position: absolute;
    top: $header-main-height-desktop + 7px;
    right: calc(100% - #{$header-logo-width-desktop});
    display: none;
    width: ($size-base * 32);
    height: $header-border-width-mobile;
    content: '';
    background: $color-primary;
    transform: rotate(-30deg);
    transform-origin: right top;

    @include bp(md) {
      display: block;
      height: $header-border-width-desktop;
    }
  }
  &::after {
    position: absolute;
    top: $header-main-height-mobile + 7px;
    right: 0;
    width: 100%;
    height: $header-border-width-mobile;
    content: '';
    background: $color-primary;

    @include bp(md) {
      top: $header-main-height-desktop + 7px;
      width: calc(100% - #{$header-logo-width-desktop});
      height: $header-border-width-desktop;
    }
  }
}

.the-header__main {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: $header-logo-width-mobile 1fr;
  align-items: center;
  max-width: $size-width-max;
  height: $header-main-height-mobile;
  padding: 0 ($size-base * 1);
  margin: auto;

  @include bp(sm) {
    padding: 0 ($size-base * 2);
  }
  @include bp(md) {
    grid-template-columns: $header-logo-width-tablet 1fr;
    height: $header-main-height-desktop;
    padding: 0 ($size-base * 3);
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

.the-header__toggle {
  position: relative;
  display: block;
  justify-self: right;
  width: ($size-base * 3);
  height: ($size-base * 3);
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 47%,
    $color-gray-1 47%,
    $color-gray-1 53%,
    transparent 53%,
    transparent
  );

  @include bp(md) {
    display: none;
  }

  &::before,
  &::after {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    content: '';
    background: $color-gray-1;
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
      transform: translate(0, 11.2px) rotateZ(45deg);
    }
    &::after {
      transform: translate(0, -3.2px) rotateZ(-45deg);
    }
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
