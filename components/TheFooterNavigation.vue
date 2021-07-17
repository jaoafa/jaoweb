<template>
  <nav class="the-footer-navigation">
    <ul class="the-footer-navigation__list">
      <!-- Navigation items -->
      <template v-for="item in items">
        <li :key="item.value" class="the-footer-navigation__item">
          <nuxt-link class="the-footer-navigation__link" :to="item.to">
            <span class="the-footer-navigation__label">{{ item.text }}</span>
          </nuxt-link>
        </li>
      </template>
      <!-- / Navigation items -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass' as *;

.the-footer-navigation__list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.the-footer-navigation__item {
  margin: ($size-base * 1) ($size-base * 2) 0 0;
}

.the-footer-navigation__link {
  color: inherit;

  &:hover {
    text-decoration: none;
  }
}

.the-footer-navigation__label {
  font-size: $font-size-s2;
}
</style>
