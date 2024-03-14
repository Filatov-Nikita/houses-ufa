<template>
  <div
    class="estate-square-filter"
    :class="{ 'estate-square-filter--disabled': disabled }"
    :disabled="disabled"
  >
    <label class="estate-square-filter__label">{{ label }}</label>
    <div class="estate-square-filter__btns">
      <button
        type="button"
        class="estate-square-filter__btn"
        :class="[
          `estate-square-filter__btn--${theme}`,
          { 'estate-square-filter__btn--active': isActive(option) },
        ]"
        v-for="option in options"
        @click="onClick(option)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Option {
    label: string,
    from?: number,
    to?: number,
  }

  interface Props {
    disabled?: boolean,
    label?: string,
    theme?: 'gray' | 'white',
    fromVal?: number,
    toVal?: number,
    options: Option[],
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    theme: 'gray',
    label: 'Площадь объекта, м²',
  });

  const emit = defineEmits<{
    (event: 'update:fromVal', fromVal?: number): void,
    (event: 'update:toVal', toVal?: number): void,
  }>();

  function isActive(option: Option) {
    return option.from === props.fromVal && option.to === props.toVal;
  }

  function onClick(option: Option) {
    emit('update:fromVal', option.from);
    emit('update:toVal', option.to);
  }
</script>

<style scoped lang="scss">
  .estate-square-filter {
    &--disabled {
      opacity: 0.3 !important;
      pointer-events: none !important;
    }

    &__label {
      letter-spacing: -0.14px;
      @apply tw-text-text02 tw-text-sm tw-font-normal tw-block tw-mb-2;
    }

    &__error {
      @apply tw-mt-2 tw-text-error tw-text-xs tw-font-normal;
    }

    &__btns {
      display: flex;
      column-gap: 8px;
    }

    &__btn {
      padding: 16px;
      transition: background-color 200ms;
      @apply tw-text-base tw-text-black tw-rounded-lg tw-w-full tw-text-center;

      &--white {
        @apply tw-bg-white;
      }

      &--gray {
        @apply tw-bg-base00;
      }

      &:hover {
        @apply tw-bg-secondary-hover;
      }

      &:active {
        @apply tw-bg-secondary-press;
      }

      &--active {
        @apply tw-bg-primary tw-text-white;

        &:hover {
          @apply tw-bg-primary-hover;
        }

        &:active {
          @apply tw-bg-primary-press;
        }
      }
    }
  }
</style>
