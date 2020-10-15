<template>
  <div>
    <section class="hero-section">
      <img src="/img/main-visual.jpg" />
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ホーム',
    }
  },
}
</script>

<style lang="scss" scoped>
.hero-section {
  width: 100%;
  height: 680px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
