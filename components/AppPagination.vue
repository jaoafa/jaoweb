<template>
  <nav class="app-pagination">
    <ul class="app-pagination__container">
      <template v-if="value !== 1">
        <li class="app-pagination__item">
          <button class="app-pagination__button" @click="prev">
            <app-icon icon="chevron-left" />
          </button>
        </li>
      </template>
      <template v-for="item in generateItems">
        <li
          :key="item.id"
          :class="{
            'app-pagination__item': true,
            'app-pagination__item--current': item.label === value,
          }"
        >
          <component
            :is="item.tag"
            :class="item.class"
            @click="item.tag === 'button' ? input(item.label) : null"
          >
            {{ item.label }}
          </component>
        </li>
      </template>
      <template v-if="value !== length">
        <li class="app-pagination__item">
          <button class="app-pagination__button" @click="next">
            <app-icon icon="chevron-right" />
          </button>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      default: 0,
      type: Number,
      validator(val) {
        return val % 1 === 0
      },
    },
    length: {
      default: 0,
      type: Number,
      validator(val) {
        return val % 1 === 0
      },
    },
    lengthVisible: {
      default: 0,
      type: Number,
      validator(val) {
        return val % 1 === 0
      },
    },
  },
  data() {
    return {
      maxSize: 0,
    }
  },
  computed: {
    items() {
      if (this.lengthVisible === 0) {
        return []
      }

      const maxLength = Math.min(
        Math.max(0, this.lengthVisible) || this.length,
        Math.max(0, this.maxSize) || this.length,
        this.length
      )
      if (maxLength >= this.length) {
        return this.range(1, this.length)
      } else if (maxLength <= 4) {
        return [this.value]
      }

      const even = maxLength % 2 === 0 ? 1 : 0
      const left = Math.floor(maxLength / 2)
      const right = this.length - left + 1 + even
      if (this.value > left && this.value < right) {
        const start = this.value - left + 2
        const end = this.value + left - 2 - even
        return [1, '...', ...this.range(start, end), '...', this.length]
      } else if (this.value === left) {
        const end = this.value + left - 1 - even
        return [...this.range(1, end), '...', this.length]
      } else if (this.value === right) {
        const start = this.value - left + 1
        return [1, '...', ...this.range(start, this.length)]
      } else {
        return [
          ...this.range(1, left),
          '...',
          ...this.range(right, this.length),
        ]
      }
    },
    generateItems() {
      return this.items.map((item, index) => {
        const isButton = typeof item === 'number'
        return {
          id: index,
          tag: isButton ? 'button' : 'span',
          class: { 'app-pagination__button': isButton },
          label: item,
        }
      })
    },
  },
  mounted() {
    this.$nextTick(this.resize)
  },
  methods: {
    input(val) {
      this.$emit('input', val)
    },
    next() {
      this.$emit('input', this.value + 1)
    },
    prev() {
      this.$emit('input', this.value - 1)
    },
    range(min, max) {
      const range = []
      for (let i = min; i <= max; i++) {
        range.push(i)
      }
      return range
    },
    resize() {
      const getSize = () => {
        const width =
          this.$el && this.$el.parentElement
            ? this.$el.parentElement.clientWidth
            : window.innerWidth
        this.maxSize = Math.floor((width - 80) / 48)
      }
      let time = 0
      getSize()
      window.addEventListener('resize', () => {
        if (!time) {
          time = setTimeout(() => {
            time = 0
            getSize()
          }, 500)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 4px;
}

.app-pagination__container {
  display: flex;
  list-style: none;
}

.app-pagination__item {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  width: ($size-base * 4);
  height: ($size-base * 4);
  font-family: $font-family-en;
  font-size: $font-size-l1;
  font-weight: $font-weight-bold;
  line-height: 1;
  text-align: center;
  user-select: none;

  & ~ & {
    margin-left: ($size-base * 2);
  }

  &--current {
    &::after {
      position: absolute;
      bottom: -4px;
      left: 0;
      display: block;
      width: 100%;
      height: 4px;
      content: '';
      background-color: $color-primary;
    }
  }
}

.app-pagination__button {
  width: 100%;
  height: 100%;
  border-radius: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
