<template>
  <div
    class="the-header-expanded"
    :class="{ show: mobileState, selected: current }"
  >
    <nav class="the-header-expanded__main--mobile"></nav>
    <nav class="the-header-expanded__main--desktop">
      <template v-for="category in items">
        <ul
          :key="category.value"
          :class="{
            current: category.value === current,
            'the-header-expanded__category': true,
            'the-header-expanded__category--desktop': true,
          }"
          :style="{ transform: 'translateX(' + currentIndex * -100 + '%)' }"
        >
          <li
            v-for="item in category.children"
            :key="item.value"
            class="the-header-expanded__item the-header-expanded__item--desktop"
          >
            <nuxt-link
              v-if="item.to"
              :to="item.to"
              class="the-header-expanded__link"
            >
              {{ item.text }}
            </nuxt-link>
            <a
              v-else-if="item.href"
              :href="item.href"
              class="the-header-expanded__link"
            >
              {{ item.text }}
            </a>
            <span v-else>{{ item.text }}</span>
            <template v-if="item.children">
              <ul>
                <li v-for="page in item.children" :key="page.value">
                  <nuxt-link
                    v-if="page.to"
                    :to="page.to"
                    class="the-header-expanded__link"
                  >
                    {{ page.text }}
                  </nuxt-link>
                  <a
                    v-else-if="page.href"
                    :href="page.href"
                    class="the-header-expanded__link"
                  >
                    {{ page.text }}
                  </a>
                  <span v-else>{{ page.text }}</span>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
    </nav>
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
  data() {
    return {
      currentIndex: 0,
    }
  },
  computed: {
    currentItemIndex() {
      return this.items.findIndex((item) => {
        return item.value === this.current
      })
    },
  },
  watch: {
    currentItemIndex: {
      handler(newValue, oldValue) {
        if (newValue >= 0) {
          this.currentIndex = newValue
        }
      },
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
    min-height: calc(100vh - #{$size-base * 6});
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

.the-header-expanded__main {
  &--mobile {
    @include bp(md) {
      display: none;
    }
  }
  &--desktop {
    display: none;

    @include bp(md) {
      display: flex;
      align-items: center;
      padding: ($size-base * 4) 0 ($size-base * 5);
    }
  }
}

.the-header-expanded__category {
  &--desktop {
    display: flex;
    flex: 0 0 100%;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 ($size-base * 3) 0 ($size-base * 27);
    list-style: none;
    opacity: 0;
    transition-duration: ($transition-duration-base * 2);
    transition-property: transform opacity;

    &.current {
      opacity: 1;
    }
  }
}

.the-header-expanded__item {
  &--desktop {
    padding-top: ($size-base * 2);
    padding-right: ($size-base * 3);
    font-size: $font-size-s1;
    font-weight: $font-weight-bold;

    &:last-child {
      padding-right: 0;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-auto-rows: auto;
      font-weight: $font-weight-normal;
      list-style: none;

      li {
        position: relative;
        padding: 0 ($size-base * 2);

        &::before {
          position: absolute;
          top: 9px;
          left: 0;
          display: block;
          width: ($size-base * 1);
          height: ($size-base * 1);
          content: '';
          border: solid 1px currentColor;
          border-radius: 50%;
        }
      }
    }
  }
}

.the-header-expanded__link {
  color: inherit;

  &:hover {
    text-decoration: none;
  }
}
</style>
