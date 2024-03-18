<template>
  <div class="price-type" :class="[ `price-type--${theme}`, { 'price-type--disabled': disabled } ]">
    <button
      class="price-type__btn"
      :class="[
        `price-type__btn--${theme}`,
        { [`price-type__btn--${theme}-active`]: isActive(btn) }
      ]"
      v-for="btn in btns"
      type="button"
      :disabled="disabled"
      @click="onClick(btn)"
    >
      <span>{{ btn.label }}</span>
      <BaseIcon class="tw-w-4 tw-h-4" :color="isActive(btn) ? `tw-fill-primary` : 'tw-fill-icon'" name="info" />
    </button>
  </div>
</template>

<script setup lang="ts">
  type Types = 'mortgage_initial_fee' | 'mortgage_monthly_payment' | 'price_total';
  type ModelValue = Types;
  type Btn = { label: string, value: Types };

  const props = withDefaults(defineProps<{
    modelValue?: ModelValue,
    disabled?: boolean,
    theme?: 'gray' | 'white',
  }>(), { disabled: false, theme: 'white' });

  const emit = defineEmits<{
    (event: 'update:modelValue', btn: ModelValue): void
  }>();

  const btns: Btn[] = [
    { label: 'По цене', value: 'price_total' },
    { label: 'По взносу', value: 'mortgage_initial_fee' },
    { label: 'По платежу', value: 'mortgage_monthly_payment' },
  ];

  function isActive(btn: Btn) {
    return props.modelValue === btn.value;
  }

  function onClick(btn: Btn) {
    emit('update:modelValue', btn.value);
  }
</script>
<style scoped lang="scss">
.price-type {
  border-radius: 8px;
  padding: 8px;
  display: flex;
  gap: 8px;
  overflow: auto;

  &--gray {
    @apply tw-bg-base00;
  }

  &--white {
    @apply tw-bg-white;
  }

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__btn {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    border-radius: 6px;
    gap: 8px;
    flex-grow: 1;
    justify-content: center;
    min-width: fit-content;
    @apply tw-text-sm;

    &--white {
      @apply tw-text-text00;

      &:hover {
        @apply tw-bg-secondary-hover;
      }

      &:active {
        @apply tw-bg-secondary-press;
      }
    }


    &--white-active {
      @apply tw-bg-secondary;
    }

    &--gray {
      @apply tw-text-text02;

      &:hover {
        @apply tw-bg-white tw-text-text00;
      }

      &:active {
        @apply tw-bg-secondary-press;
      }
    }

    &--gray-active {
      @apply tw-text-text00 tw-bg-white;
    }
  }
}
</style>
