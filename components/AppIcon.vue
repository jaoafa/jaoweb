<template>
  <span :class="classes"></span>
</template>

<script>
export default {
  props: {
    icon: {
      default: '',
      type: String,
    },
    left: {
      default: false,
      type: Boolean,
    },
    right: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    classes() {
      const icon = this.icon
      return {
        mdi: true,
        'app-icon': true,
        'app-icon--left': this.left,
        'app-icon--right': this.right,
        [`mdi-${icon}`]: icon,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass' as *;

.app-icon {
  display: inline-flex;
  line-height: 1;

  &--left,
  &--right {
    padding-top: 2px;
    scale: 1.3;
  }
  &--left {
    margin-right: ($size-base * 1);
  }
  &--right {
    margin-left: ($size-base * 1);
  }
}
</style>
