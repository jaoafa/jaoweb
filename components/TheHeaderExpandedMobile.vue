<template>
  <nav class="the-header-expanded-mobile">
    <ul class="the-header-expanded-mobile__container" :style="styles">
      <li
        v-for="category in filteredItems"
        :key="category.value"
        class="the-header-expanded-mobile__category"
      >
        <!-- Internal link -->
        <nuxt-link
          v-if="category.to"
          :to="category.to"
          class="the-header-expanded-mobile__link"
        >
          <span class="the-header-expanded-mobile__label">
            {{ category.text }}
          </span>
        </nuxt-link>
        <!-- External link -->
        <a
          v-else-if="category.href"
          :href="category.href"
          class="the-header-expanded-mobile__link"
        >
          <span class="the-header-expanded-mobile__label">
            {{ category.text }}
          </span>
        </a>
        <!-- Child items -->
        <template v-else>
          <span
            class="the-header-expanded-mobile__label"
            @click="updateCurrent(category.value)"
          >
            {{ category.text }}
            <app-icon icon="chevron-right" />
          </span>
          <!-- Child items -->
          <ul
            :class="{
              current: category.value === current,
              'the-header-expanded-mobile__item': true,
            }"
          >
            <li>
              <span
                class="the-header-expanded-mobile__back"
                @click="updateCurrent('')"
              >
                <app-icon icon="chevron-left" />
              </span>
            </li>
            <li v-for="item in category.children" :key="item.value">
              <!-- Internal link -->
              <nuxt-link
                v-if="item.to"
                :to="item.to"
                class="the-header-expanded-mobile__link"
                @click.native="closeNavigation"
              >
                <span class="the-header-expanded-mobile__label">
                  {{ item.text }}
                </span>
              </nuxt-link>
              <!-- External link -->
              <a
                v-else-if="item.href"
                :href="item.href"
                class="the-header-expanded-mobile__link"
              >
                <span class="the-header-expanded-mobile__label">
                  {{ item.text }}
                </span>
              </a>
              <!-- Child items -->
              <ul v-if="item.children">
                <li
                  v-for="page in item.children"
                  :key="page.value"
                  class="the-header-expanded-mobile__page"
                >
                  <!-- Internal link -->
                  <nuxt-link
                    v-if="page.to"
                    :to="page.to"
                    class="the-header-expanded-mobile__link"
                    @click.native="closeNavigation"
                  >
                    <span class="the-header-expanded-mobile__label">
                      {{ page.text }}
                    </span>
                  </nuxt-link>
                  <!-- External link -->
                  <a
                    v-else-if="page.href"
                    :href="page.href"
                    class="the-header-expanded-mobile__link"
                  >
                    <span class="the-header-expanded-mobile__label">
                      {{ page.text }}
                    </span>
                  </a>
                </li>
              </ul>
              <!-- / Child items -->
            </li>
          </ul>
        </template>
        <!-- / Child items -->
      </li>
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
  data() {
    return {
      current: '',
    }
  },
  computed: {
    filteredItems() {
      const current = this.current
      let items = [...this.items]
      if (current) {
        items = items.filter((item) => {
          return item.value === current
        })
      }
      return items
    },
    styles() {
      const value = this.current ? -100 : 0
      return {
        transform: 'translateX(' + value + '%)',
      }
    },
  },
  methods: {
    updateCurrent(value) {
      this.current = value
    },
    closeNavigation() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass' as *;

.the-header-expanded-mobile {
  width: 100%;
  padding: ($size-base * 6) 0;
  overflow: hidden;

  @include bp(md) {
    display: none;
  }

  ul {
    list-style: none;
  }
}

.the-header-expanded-mobile__container {
  transition-duration: ($transition-duration-base * 2);
}

.the-header-expanded-mobile__category {
  display: flex;
  font-size: $font-size-base;
  font-weight: $font-weight-bold;

  & > * {
    flex: 0 0 100%;
  }
}

.the-header-expanded-mobile__item {
  display: none;

  &.current {
    display: block;
  }
}

.the-header-expanded-mobile__link {
  color: inherit;

  &:hover {
    text-decoration: none;
  }
}

.the-header-expanded-mobile__label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  padding: ($size-base * 1) ($size-base * 2);
  cursor: pointer;
}

.the-header-expanded-mobile__back {
  display: block;
  padding: 0 ($size-base * 1);
  font-size: $font-size-l2;
  color: $color-gray-4;
  cursor: pointer;
}

.the-header-expanded-mobile__page {
  position: relative;
  padding-left: ($size-base * 3);
  font-weight: $font-weight-normal;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ($size-base * 2);
    display: block;
    width: ($size-base * 1);
    height: ($size-base * 1);
    margin: auto;
    content: '';
    border: solid 1px currentColor;
    border-radius: 50%;
  }
}
</style>
