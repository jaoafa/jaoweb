<template>
  <nav class="the-header-navigation">
    <ul class="the-header-navigation__list">
      <template v-for="item in items">
        <li
          :key="item.value"
          class="the-header-navigation__item"
          @click="updateValue(item.value)"
        >
          <template v-if="item.to">
            <nuxt-link class="the-header-navigation__link" :to="item.to">
              <span class="the-header-navigation__label">{{ item.text }}</span>
            </nuxt-link>
          </template>
          <template v-else>
            <span class="the-header-navigation__label">{{ item.text }}</span>
            <app-icon
              :class="{
                'the-header-navigation__icon': true,
                current: value === item.value,
              }"
              icon="chevron-down"
            />
          </template>
        </li>
      </template>
      <li class="the-header-navigation__item">
        <app-button to="/login">ログイン</app-button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    items: {
      default: () => [],
      type: Array,
    },
    value: {
      default: '',
      required: true,
      type: String,
    },
  },
  methods: {
    updateValue(value) {
      if (this.value === value) {
        this.$emit('change', '')
      } else if (
        this.items.some((item) => {
          return item.to && item.value === value
        })
      ) {
        this.$emit('change', '')
      } else {
        this.$emit('change', value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.the-header-navigation__list {
  display: flex;
  align-items: baseline;
  list-style: none;
}

.the-header-navigation__item {
  cursor: pointer;
  user-select: none;

  &:hover {
    background: $color-gray-5;
  }
  & + & {
    margin-left: ($size-base * 4);
  }
}

.the-header-navigation__link {
  color: inherit;
  text-decoration: none;
}

.the-header-navigation__icon {
  vertical-align: middle;
  transition-duration: ($transition-duration-base * 1);

  &.current {
    transform: rotateZ(180deg);
  }
}

.the-header-navigation__label {
  font-size: $font-size-s1;
  font-weight: $font-weight-bold;
}
</style>
