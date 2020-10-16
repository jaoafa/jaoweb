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
  },
  computed: {
    classes() {
      return {
        'app-icon': true,
        mdi: true,
        [`mdi-${this.icon}`]: this.icon,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app-icon {
  display: inline-flex;
  vertical-align: middle;
}
</style>
