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
  margin-top: ($size-base * 5);

  @include bp(md) {
    margin-top: ($size-base * 6);
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

  p a,
  li a,
  th a,
  td a {
    color: $color-link;

    &:hover {
      text-decoration: none;
    }
  }

  img {
    display: block;
    width: 100%;
  }

  ol,
  ul {
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: auto;
    gap: ($size-base * 1) 0;
    padding: 0 ($size-base * 1) 0 ($size-base * 5);
    list-style: none;
    counter-reset: section;

    @include bp(md) {
      gap: ($size-base * 2) 0;
    }

    li {
      position: relative;

      &::before {
        position: absolute;
        right: calc(100% + #{$size-base * 2});
        display: block;
      }
    }

    ol,
    ul {
      padding: 0 0 0 ($size-base * 4);
      margin-top: ($size-base * 1);

      @include bp(md) {
        padding: 0 0 0 ($size-base * 5);
        margin-top: ($size-base * 2);
      }
    }
  }

  ol li {
    &::before {
      top: 7px;
      font-size: $font-size-s1;
      font-weight: $font-weight-bold;
      line-height: 1;
      white-space: nowrap;
      content: counters(section, '-') '.';
      counter-increment: section;
    }
  }

  ul li {
    &::before {
      top: 10px;
      width: ($size-base * 1);
      height: ($size-base * 1);
      content: '';
      background-color: $color-gray-1;
      border: solid 1px $color-gray-1;
      border-radius: 50%;
    }

    li {
      &::before {
        background-color: transparent;
      }

      li {
        &::before {
          background-color: $color-gray-1;
          border-radius: 0;
        }
      }
    }
  }

  table {
    display: block;
    width: 100%;
    overflow-x: scroll;
    table-layout: fixed;
    border-collapse: collapse;

    @include bp(md) {
      display: table;
      overflow-x: auto;
    }

    tr {
      &:nth-of-type(even) {
        background-color: $color-gray-6;
      }
    }

    th,
    td {
      padding: ($size-base * 1) ($size-base * 2);
      font-size: $font-size-s1;
      line-height: 1.25;

      @include bp(md) {
        padding: ($size-base * 2);
        word-wrap: break-word;
      }

      img {
        width: auto;
      }
    }

    th {
      background-color: $color-gray-5;
    }
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

blockquote {
  padding: ($size-base * 1) ($size-base * 1) ($size-base * 1) ($size-base * 2);
  border-left: solid 6px $color-gray-5;

  @include bp(md) {
    padding: ($size-base * 2) ($size-base * 1) ($size-base * 2) ($size-base * 3);
  }

  p {
    white-space: pre-wrap;
  }
}

hr {
  position: relative;
  width: ($size-base * 3);
  height: ($size-base * 1);
  margin: ($size-base * 4) auto;
  background-image: radial-gradient($color-gray-1 30%, transparent 30%);
  background-repeat: repeat;
  background-size: ($size-base * 1) ($size-base * 1);
  border: none;

  @include bp(md) {
    margin: ($size-base * 7) auto;
  }
}
</style>
