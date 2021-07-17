<template>
  <div class="container">
    <the-header />
    <main class="main">
      <Nuxt />
      <invite-section />
    </main>
    <the-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@use 'assets/sass' as *;

* {
  box-sizing: border-box;
}
body {
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: $font-height-base;
  color: $color-gray-1;
  background: $color-background-base;
}
.container {
  position: relative;
}
.main {
  padding-top: $size-base * 8;

  @include bp(md) {
    padding-top: $size-base * 9;
  }
}
</style>
