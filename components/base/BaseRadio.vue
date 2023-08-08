<template>
  <div class="base-radio">
    <div
      class="base-radio__wrap"
      :class="{ 'base-radio__wrap--disabled': disabled }"
      @click="handleChange(checkedValue)"
    >
      <div
        class="base-radio__input"
        :class="{
          'base-radio__input--checked': checked,
          'base-radio__input--disabled': disabled
        }"
        role="radio"
      >

      </div>
      <label class="base-radio__label">{{ label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';

  interface Props {
    name: string,
    label: string,
    rules?: string,
    disabled?: boolean,
    modelValue?: any,
    checkedValue?: any,
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
  });

  const { checked, handleChange } = useField(props.name, props.rules, {
    type: 'radio',
    syncVModel: true,
    label: props.label,
    checkedValue: props.checkedValue
  });
</script>

<style scoped lang="scss">
  .base-radio {
    display: inline-block;

    &__wrap {
      padding: 8px 16px;
      cursor: pointer;
      user-select: none;
      transition: background-color 300ms;
      @apply tw-flex tw-items-center tw-gap-4 tw-rounded-lg;

      &:hover {
        @apply tw-bg-base00;
      }

      &--disabled {
        pointer-events: none;
      }
    }

    &__input {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border-width: 5px;
      @apply tw-border-solid tw-border-secondary-hover tw-bg-secondary-hover;

      &--checked {
        @apply tw-border-primary tw-bg-white;
      }

      &--disabled {
        @apply tw-border-base01 tw-bg-white;
      }
    }

    &__label {
      letter-spacing: -0.14px;
      @apply tw-text-text00 tw-text-sm;
    }
  }
</style>
