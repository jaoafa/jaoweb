<template>
  <div :class="classes" :style="styles" class="app-progress-bar">
    <div class="app-progress-bar__background"></div>
    <div
      :style="{ width: `${percentage}%`}"
      class="app-progress-bar__determinate"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'AppProgressBar',

  props: {
    absolute: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 4,
      type: Number,
      validator: (val) => {
        return val > 0
      },
    },
    percentage: {
      default: 0,
      type: Number,
      validator: (val) => {
        return val >= 0 && val <= 100
      },
    },
  },

  computed: {
    classes () {
      return {
        'app-progress-bar--absolute': this.absolute,
      }
    },
    styles () {
      return {
        height: `${this.size}px`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass' as *;

.app-progress-bar {
  position: relative;
  width: 100%;
  color: $color-primary;
  transition: 0.1s ease-in-out;

  &--absolute {
    position: absolute;
  }
}

.app-progress-bar__background {
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0.3;
  transition: inherit;
}

.app-progress-bar__determinate {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: currentColor;
  transition: inherit;
}
</style>
