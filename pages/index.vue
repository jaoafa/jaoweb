<template>
  <div class="page">
    <!-- Hero section -->
    <section class="hero-section">
      <div class="hero-section__image-container">
        <img :src="heroImage.url" loading="lazy" />
      </div>
      <div class="hero-section__photographer-name">
        <span>Photo by {{ heroImage.photographerName }}</span>
      </div>
    </section>
    <!-- Intro section -->
    <section class="intro-section">
      <div class="intro-section__container intro-section__container--left">
        <h2 class="intro-section__catchcopy">
          ここで爆発します、<br />あなたの可能性が。
        </h2>
        <div class="intro-section__text">
          <p>jaoの世界へようこそ！</p>
          <p>
            このサーバには、やべーやつらが生息し、独特で最高にイカしたコミュニティをつくっています。
          </p>
        </div>
        <app-button
          color="discord"
          href="https://discord.com/invite/YjwYEBk"
          large
        >
          <app-icon icon="discord" left />
          Discordに参加する
        </app-button>
      </div>
      <div class="intro-section__container intro-section__container--right">
        <div class="intro-section__balloon">jao<br />afa</div>
        <div class="intro-section__members intro-section__members--admin">
          <template v-for="item in members.admin">
            <a
              :key="item.id"
              :href="'https://users.jaoafa.com/' + item.uuid"
              :title="item.name"
              class="intro-section__user"
            >
              <img
                :src="
                  'https://crafatar.com/avatars/' + item.uuid + '?overlay=true'
                "
                loading="lazy"
              />
            </a>
          </template>
        </div>
        <div class="intro-section__members intro-section__members--moderator">
          <template v-for="item in members.moderator">
            <a
              :key="item.id"
              :href="'https://users.jaoafa.com/' + item.uuid"
              :title="item.name"
              class="intro-section__user"
            >
              <img
                :src="
                  'https://crafatar.com/avatars/' + item.uuid + '?overlay=true'
                "
                loading="lazy"
              />
            </a>
          </template>
        </div>
        <p>（jao鯖のゆかいな運営メンバーたち）</p>
      </div>
    </section>
    <!-- Gallery section -->
    <section class="gallery-section"></section>
    <!-- News section -->
    <section class="news-section"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroImage: {
        url: '/img/main-visual.jpg',
        photographerName: 'Zakuro',
      },
      members: {
        admin: [
          {
            id: 'X4Z',
            uuid: '5799296a-d1ec-4252-93bd-440bb9caa65c',
            name: 'Zakuro',
          },
          {
            id: 'Hirotaisou2012',
            uuid: '39cf878b-ef0b-44fc-a2c6-de3d540a4728',
            name: 'Hiratake',
          },
          {
            id: 'mine_book000',
            uuid: '32ff7cdc-a1b4-450a-aa7e-6af75fe8c37c',
            name: 'Tomachi',
          },
          {
            id: 'X9Z',
            uuid: '7008531a-539b-4dfc-8b81-7b267d18dd0a',
            name: 'Omelet',
          },
        ],
        moderator: [
          {
            id: 'Ekusas83',
            uuid: '22ab15d6-2e88-4fdd-91c0-e459f0f804f8',
            name: 'Ekusas',
          },
          {
            id: 'X5Z',
            uuid: '0bdc0219-f3c3-4d73-a4df-1d8bd088f419',
            name: 'Zozokasu',
          },
          {
            id: 'kohonayoshi',
            uuid: '26728d53-add7-46d1-97c3-0a25bc6607f5',
            name: 'Kohona',
          },
          {
            id: 'Nudonge',
            uuid: '22b69dc2-a8e7-4ffd-a3d0-54023d687d5f',
            name: 'Nudonge',
          },
          {
            id: 'MinHero_exp',
            uuid: '0ad34a33-3ca4-4c86-84f3-a4591920b06a',
            name: 'Ekipa',
          },
        ],
      },
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: this.$config.baseName,
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// Hero section
.hero-section {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 280px;

  @include bp(sm) {
    height: 360px;
  }
  @include bp(md) {
    height: 400px;
  }
  @include bp(lg) {
    height: 520px;
  }
  @include bp(xl) {
    height: 640px;
  }
}

.hero-section__image-container {
  flex: 0 0 calc(100% - #{$size-base * 3});
  height: 100%;

  @include bp(md) {
    flex: 0 0 calc(100% - #{$size-base * 5});
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-section__photographer-name {
  display: flex;
  align-items: center;
  width: ($size-base * 3);
  padding: ($size-base * 2) 0;
  font-family: $font-family-en;
  font-size: $font-size-s2;
  font-weight: $font-weight-bold;
  background: $color-primary;
  writing-mode: vertical-rl;

  @include bp(md) {
    width: ($size-base * 5);
    font-size: $font-size-s1;
  }
}

// Intro section
.intro-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: $size-width-mid;
  padding: ($size-base * 9) ($size-base * 2);
  margin: auto;
  text-align: center;

  @include bp(md) {
    flex-wrap: nowrap;
    padding: ($size-base * 12) ($size-base * 3);
    text-align: left;
  }
  @include bp(lg) {
    justify-content: space-between;
  }
}

.intro-section__container {
  width: 100%;

  @include bp(md) {
    width: auto;
  }

  & ~ & {
    margin-top: ($size-base * 8);

    @include bp(md) {
      margin-top: 0;
    }
  }

  &--right {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr;
    gap: ($size-base * 2);
    justify-items: center;
    text-align: center;
  }
}

.intro-section__catchcopy {
  font-size: $font-size-l3;
  line-height: 1.5;
  text-align: center;

  @include bp(md) {
    text-align: left;
  }
  @include bp(lg) {
    font-size: $font-size-l5;
  }
}

.intro-section__text {
  max-width: ($size-base * 44);
  margin: ($size-base * 3) auto ($size-base * 4);

  @include bp(md) {
    margin: ($size-base * 3) 0 ($size-base * 4);
  }
}

.intro-section__balloon {
  position: relative;
  width: ($size-base * 13);
  padding: ($size-base * 1) 0;
  margin-bottom: ($size-base * 2);
  font-size: $font-size-l1;
  font-weight: $font-weight-bold;
  line-height: 1.5;
  border: solid 4px $color-gray-1;
  border-radius: 8px;

  @include bp(sm) {
    width: ($size-base * 20);
    margin-bottom: ($size-base * 4);
    font-size: $font-size-l2;
  }
  @include bp(lg) {
    width: ($size-base * 28);
    font-size: $font-size-l3;
  }

  &::before,
  &::after {
    position: absolute;
    right: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    margin: auto;
    content: '';
  }
  &::before {
    bottom: -40px;
    border: solid 20px transparent;
    border-top-color: $color-gray-1;
  }
  &::after {
    bottom: -28px;
    border: solid 14px transparent;
    border-top-color: $color-background-base;
  }
}

.intro-section__members {
  display: inline-flex;
  justify-content: space-around;
}

.intro-section__user {
  width: ($size-base * 5);
  transition-duration: ($transition-duration-base * 1);

  @include bp(sm) {
    width: ($size-base * 10);
  }
  @include bp(md) {
    width: ($size-base * 6);
  }
  @include bp(lg) {
    width: ($size-base * 10);
  }

  &:hover {
    opacity: 0.8;
  }

  & ~ & {
    margin-left: ($size-base * 1);

    @include bp(sm) {
      margin-left: ($size-base * 3);
    }
  }

  img {
    display: block;
    width: 100%;
  }
}
</style>
