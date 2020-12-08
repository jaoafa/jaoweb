<template>
  <footer class="the-footer">
    <!-- Main footer area -->
    <div class="the-footer__main">
      <!-- Logo -->
      <nuxt-link class="the-footer__logo" to="/">
        <app-logo />
      </nuxt-link>
      <!-- Social Links -->
      <div class="the-footer__social-links"></div>
      <!-- Navigation -->
      <the-footer-navigation
        class="the-footer__navigation"
        :items="navigationItems"
      />
      <!-- Note -->
      <div class="the-footer__note">
        <template v-for="item in noteItems">
          <p :key="item.id">{{ item.text }}</p>
        </template>
      </div>
      <!-- Copyright -->
      <div class="the-footer__copyright">
        <p>&copy; 2016-{{ currentYear }} jao Minecraft Server</p>
      </div>
    </div>
    <!-- / Main footer area -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      // NavigationItems
      navigationItems: [
        {
          text: '利用規約',
          to: '/server/terms',
          value: 'server-terms',
        },
        {
          text: 'プライバシーポリシー',
          to: '/server/privacy',
          value: 'server-privacy',
        },
        {
          text: 'よくあるご質問',
          to: '/support/faq',
          value: 'support-faq',
        },
        {
          text: 'お問い合わせ',
          to: '/support/inquiry',
          value: 'support-inquiry',
        },
      ],
      // Text to be displayed in the notes
      noteItems: [
        {
          id: 1,
          text:
            '当Minecraftサーバは非公式なものであり、Mojang ABが提供・作成・承認したものではございません。また、当サーバはコミュニティ参加者の寄付等によって、非営利目的で運営を行っております。',
        },
        {
          id: 2,
          text: 'Minecraftは、Mojang ABの商標です。',
        },
      ],
    }
  },
  computed: {
    currentYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.the-footer {
  width: 100%;
  color: $color-white;
  background-color: $color-black;
}

.the-footer__main {
  display: grid;
  grid-template-columns: ($size-base * 80) 1fr ($size-base * 23);
  grid-auto-rows: auto;
  gap: ($size-base * 4) ($size-base * 3);
  align-items: center;
  max-width: $size-width-max;
  padding: ($size-base * 9) ($size-base * 2) ($size-base * 12);
  margin: auto;
}

.the-footer__logo {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: ($size-base * 25);
  color: inherit;
  transition-duration: ($transition-duration-base * 1);

  &:hover {
    color: $color-gray-4;
  }
}

.the-footer__social-links {
  display: flex;
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  justify-content: space-between;
}

.the-footer__navigation {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  color: $color-gray-4;
}

.the-footer__note {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  font-size: $font-size-s2;
}

.the-footer__copyright {
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  font-size: $font-size-s2;
}
</style>
