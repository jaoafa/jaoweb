<template>
  <div class="app-breadcrumbs">
    <ol class="app-breadcrumbs__list">
      <template v-for="item in _items">
        <li :key="item.id" class="app-breadcrumbs__item">
          <app-icon icon="chevron-right" class="app-breadcrumbs__chevron" />
          <component
            :is="item.disabled ? 'span' : item.to ? 'nuxt-link' : 'a'"
            :href="item.href"
            :to="item.to"
            :class="{
              'app-breadcrumbs__link': !item.disabled,
              'app-breadcrumbs__label': item.disabled,
            }"
          >
            <span class="app-breadcrumbs__text">{{ item.text }}</span>
          </component>
        </li>
      </template>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    _items() {
      const items = this.items
      items.map((item) => {
        return {
          disabled: item.disabled,
          href: item.href ? item.href : '',
          to: item.to ? item.to : '',
          text: item.text ? item.text : '',
        }
      })
      return items
    },
  },
}
</script>

<style lang="scss" scoped>
.app-breadcrumbs {
  padding: ($size-base * 4) 0;
}

.app-breadcrumbs__list {
  display: inline-flex;
  flex-wrap: wrap;
  font-size: $font-size-s1;
  list-style: none;
}

.app-breadcrumbs__chevron {
  display: none;
}

.app-breadcrumbs__item {
  display: inline-flex;
  align-items: baseline;

  & ~ & {
    margin-left: ($size-base * 1);

    .app-breadcrumbs__chevron {
      display: block;
      margin-right: ($size-base * 1);
      font-size: $font-size-base;
    }
  }
}

.app-breadcrumbs__link {
  color: $color-link;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}
</style>
