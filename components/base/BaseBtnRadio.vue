<template>
  <div
    class="base-btn-radio"
    :class="{ 'base-btn-radio--disabled': disabled }"
    :disabled="disabled"
  >
    <label class="base-btn-radio__label">{{ label }}</label>
    <div class="base-btn-radio__btns">
      <button
        type="button"
        class="base-btn-radio__btn"
        :class="[
          `base-btn-radio__btn--${theme}`,
          { 'base-btn-radio__btn--active': isActive(btn) },
        ]"
        v-for="btn in btns"
        @click="onClick(btn)"
      >
        {{ btn.label }}
      </button>
    </div>
    <transition
      leave-active-class="animate__animated anim-300ms animate__fadeOutUp"
      enter-active-class="animate__animated anim-300ms animate__shakeX"
    >
      <div v-if="errorMessage" class="base-btn-radio__error">
        {{ errorMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';

  interface Btn {
    label: string,
    value: string
  }

  interface Props {
    name: string,
    rules?: string,
    label: string,
    modelValue?: Btn,
    disabled?: boolean,
    btns: Array<Btn>,
    theme?: 'gray' | 'white',
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    theme: 'white',
  });

  const { value, errorMessage, handleChange } = useField<Btn>(props.name, props.rules, {
    label: props.label,
    syncVModel: true
  });

  function onClick(btn: Btn) {
    handleChange(btn);
  }

  function isActive(btn: Btn) {
    const val = value.value;
    return val && val.value === btn.value;
  }
</script>
<style scoped lang="scss">
  .base-btn-radio {
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
