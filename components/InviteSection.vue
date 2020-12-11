<template>
  <section class="invite-section">
    <div class="invite-section__main">
      <header class="invite-section__header">
        <h2 class="invite-section__heading">サーバへ参加する</h2>
      </header>
      <div class="invite-section__body">
        <dl class="invite-section__list">
          <dt class="invite-section__item-term">サーバアドレス</dt>
          <dd
            class="invite-section__item-description invite-section__item-description--filled"
          >
            {{ serverAddress }}
            <app-button
              class="invite-section__copy"
              color="dark"
              icon
              rounded
              small
              @click="copyAddress"
            >
              <app-icon icon="content-copy" />
            </app-button>
          </dd>
          <dt class="invite-section__item-term">バージョン</dt>
          <dd class="invite-section__item-description">
            {{ serverVersion }} (Java Edition)
          </dd>
        </dl>
        <div class="invite-section__text">
          <p>
            サーバに参加する前に、
            <nuxt-link to="/server/terms">利用規約</nuxt-link>
            をお読みください。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Server Address
      serverAddress: 'play.jaoafa.com',
      // Server Version
      serverVersion: '1.12.2',
    }
  },
  methods: {
    copyAddress() {
      const form = document.createElement('textarea')
      form.textContent = this.serverAddress
      document.body.appendChild(form)
      form.select()
      document.execCommand('copy')
      document.body.removeChild(form)
    },
  },
}
</script>

<style lang="scss" scoped>
.invite-section {
  background-color: $color-primary;
}

.invite-section__main {
  max-width: $size-width-mid;
  padding: ($size-base * 9) ($size-base * 3);
  margin: auto;
}

.invite-section__heading {
  font-size: $font-size-l3;
  text-align: center;

  @include bp(md) {
    font-size: $font-size-l4;
    text-align: left;
  }
}

.invite-section__body {
  position: relative;
  max-width: $size-width-min;
  padding: ($size-base * 6) ($size-base * 3) ($size-base * 4);
  margin: ($size-base * 5) auto 0;
  border: solid 12px $color-white;

  @include bp(md) {
    padding: ($size-base * 8) ($size-base * 8) ($size-base * 6);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    content: '';
    border: solid 48px transparent;
    border-bottom-color: $color-white;
    transform: translateX(-60px) translateY(-60px) rotate(-45deg);
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    content: '';
    border: solid 36px transparent;
    border-bottom-color: $color-primary;
    transform: translateX(-50px) translateY(-50px) rotate(-45deg);
  }
}

.invite-section__list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: ($size-base * 1) ($size-base * 4);
  align-items: center;
  font-size: $font-size-base;
  font-weight: $font-weight-bold;

  @include bp(md) {
    grid-template-columns: ($size-base * 16) 1fr;
    gap: ($size-base * 2) ($size-base * 4);
    font-size: $font-size-l1;
  }
}

.invite-section__item-term {
  & ~ & {
    margin-top: ($size-base * 2);

    @include bp(md) {
      margin-top: 0;
    }
  }
}

.invite-section__item-description {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ($size-base * 1) ($size-base * 2);
  font-family: $font-family-en;

  @include bp(md) {
    padding: ($size-base * 1) ($size-base * 4);
  }

  &--filled {
    background-color: $color-white;
  }
}

.invite-section__text {
  margin-top: ($size-base * 2);
  font-size: $font-size-s1;
  text-align: center;

  a {
    color: $color-link;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
