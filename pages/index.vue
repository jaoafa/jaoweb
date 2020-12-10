<template>
  <div>
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
    <section class="intro-section"></section>
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
    }
  },
  head() {
    return {
      title: 'ホーム',
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
</style>
