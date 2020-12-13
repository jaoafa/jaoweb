<template>
  <div class="article-body">
    <nuxt-content class="article-body__content" :document="article" />
  </div>
</template>

<script>
export default {
  props: {
    article: {
      default: () => {},
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.article-body__content {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: ($size-base * 4) 0;
  margin-top: ($size-base * 2);

  @include bp(md) {
    margin-top: ($size-base * 4);
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ($size-base * 2);

    @include bp(md) {
      margin-top: ($size-base * 4);
    }
  }
  h2 {
    font-size: $font-size-l3;

    @include bp(md) {
      font-size: $font-size-l4;
    }
  }
  h3 {
    font-size: $font-size-l1;

    @include bp(md) {
      font-size: $font-size-l2;
    }
  }
  h4 {
    font-size: $font-size-base;

    @include bp(md) {
      font-size: $font-size-l1;
    }
  }
  h5 {
    font-size: $font-size-base;
    font-weight: $font-weight-normal;
    text-decoration: underline;

    @include bp(md) {
      font-size: $font-size-base;
      font-weight: $font-weight-bold;
      text-decoration: none;
    }
  }
  h6 {
    font-size: $font-size-base;
    font-weight: $font-weight-normal;

    @include bp(md) {
      font-size: $font-size-base;
      font-weight: $font-weight-normal;
      text-decoration: underline;
    }
  }

  p {
    a {
      color: $color-link;

      &:hover {
        text-decoration: none;
      }
    }
  }

  img {
    display: block;
    width: 100%;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: $font-family-code;
  }
  p > code,
  th > code,
  td > code {
    padding: 0 ($size-base * 0.5);
    background-color: $color-gray-7;
    border: solid 1px $color-gray-5;
    border-radius: 2px;
  }
}
</style>
