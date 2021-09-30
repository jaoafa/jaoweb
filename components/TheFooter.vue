<template>
  <footer class="the-footer">
    <!-- Main footer area -->
    <div class="the-footer__main">
      <!-- Logo -->
      <nuxt-link class="the-footer__logo" to="/">
        <app-logo />
      </nuxt-link>
      <!-- Social Link -->
      <div class="the-footer__social-link">
        <template v-for="item in socialLinkItems">
          <app-button
            :key="item.value"
            :href="item.href"
            color="dark"
            icon
            large
            rounded
          >
            <app-icon :icon="item.icon" />
          </app-button>
        </template>
      </div>
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
import AppIcon from './AppIcon.vue'
export default {
  components: { AppIcon },
  data() {
    return {
      // Navigation items
      navigationItems: [
        // {
        //   text: '利用規約',
        //   to: '/server/terms',
        //   value: 'server-terms',
        // },
        {
          text: 'サーバルール',
          to: '/server/rules',
          value: 'server-rules',
        },
        {
          text: 'プライバシーポリシー',
          to: '/server/policies/privacy',
          value: 'server-policies-privacy',
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
            '当Minecraftサーバは非公式なものであり、Mojang ABが提供・作成・承認したものではございません。また、当サーバはコミュニティ参加者の協力によって、非営利目的で運営を行っております。',
        },
        {
          id: 2,
          text: 'Minecraftは、Mojang ABの商標です。',
        },
      ],
      // Social link items
      socialLinkItems: [
        {
          icon: 'twitter',
          href: 'https://twitter.com/jaoafa/',
          value: 'twitter',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/jaoafa/',
          value: 'instagram',
        },
        {
          icon: 'discord',
          href: 'https://discord.com/invite/qhRFRNBFSc',
          value: 'discord',
        },
        {
          icon: 'youtube',
          href: 'https://www.youtube.com/channel/UC92wyJyhqXEMiEROeFJKNKg',
          value: 'youtube',
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
@use 'assets/sass' as *;

.the-footer {
  width: 100%;
  color: $color-white;
  background-color: $color-black;
}

.the-footer__main {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: ($size-base * 3);
  align-items: center;
  max-width: $size-width-max;
  padding: ($size-base * 8) ($size-base * 2) ($size-base * 10);
  margin: auto;

  @include bp(md) {
    padding: ($size-base * 9) ($size-base * 3) ($size-base * 12);
  }
  @include bp(lg) {
    grid-template-columns: ($size-base * 80) 1fr ($size-base * 26);
    gap: ($size-base * 4) ($size-base * 3);
  }
}

.the-footer__logo {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  max-width: ($size-base * 25);
  color: inherit;
  transition-duration: ($transition-duration-base * 1);

  &:hover {
    color: $color-gray-4;
  }
}

.the-footer__social-link {
  display: flex;
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  justify-content: space-between;
  max-width: ($size-base * 26);

  @include bp(lg) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
  }
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
  grid-row: 5 / 6;
  grid-column: 1 / 2;
  font-size: $font-size-s2;

  @include bp(lg) {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
  }
}
</style>
