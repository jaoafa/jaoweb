<template>
  <div
    class="the-header-expanded"
    :class="{ show: mobileState, selected: current }"
  >
    <the-header-expanded-mobile :items="items" @close="closeNavigation" />
    <the-header-expanded-desktop :current="current" :items="items" />
  </div>
</template>

<script>
export default {
  props: {
    current: {
      default: '',
      type: String,
    },
    items: {
      default: () => [],
      type: Array,
    },
    mobileState: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    closeNavigation() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.the-header-expanded {
  position: relative;
  z-index: 95;
  max-width: $size-width-max;
  min-height: 0;
  max-height: 0;
  margin: auto;
  overflow: hidden;
  transition-timing-function: ease-in-out;
  transition-duration: ($transition-duration-base * 2);
  transition-property: max-height min-height;

  &.show {
    min-height: calc(100vh - #{$size-base * 8});
    overflow: scroll;

    @include bp(md) {
      min-height: inherit;
      overflow: hidden;
    }
  }
  &.selected {
    @include bp(md) {
      max-height: 100vh;
    }
  }
}
</style>
