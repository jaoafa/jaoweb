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
      const icon = this.icon
      return {
        'app-icon': true,
        mdi: true,
        [`mdi-${icon}`]: icon,
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
