<template>
  <div class="container">
    <the-header />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-family: $font-family-base;
  line-height: $font-height-base;
  color: $color-gray-1;
}
.container {
  position: relative;
}
.main {
  padding-top: $size-base * 6;

  @include bp(md) {
    padding-top: $size-base * 9;
  }
}
</style>
