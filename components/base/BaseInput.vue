<template>
  <div class="base-input" :class="{ 'base-input--disabled': disabled }">
    <label class="base-input__label" :for="name">{{ label }}</label>
    <input
      class="base-input__input"
      :class="[ `base-input__input--${theme}`, { 'base-input__input--error': errorMessage }, inputClass ]"
      :id="name"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      v-maska
      :data-maska="maska"
      v-model="value"
    >
    <transition
      leave-active-class="animate__animated anim-300ms animate__fadeOutUp"
      enter-active-class="animate__animated anim-300ms animate__shakeX"
    >
      <div v-if="caption" class="base-input__caption" :class="{ 'base-input__caption--error': errorMessage }">
        {{ caption }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';

  interface Props {
    name: string,
    rules?: string,
    label: string,
    caption?: string,
    modelValue?: any,
    placeholder?: string,
    type?: string,
    disabled?: boolean,
    theme?: 'white' | 'gray',
    inputClass?:  string,
    maska?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'gray',
    type: 'text',
    disabled: false,
  });

  const { value, errorMessage } = useField(props.name, props.rules, {
    label: props.label,
    validateOnValueUpdate: false,
    syncVModel: true
  });

  const caption = computed(() => errorMessage.value || props.caption);
</script>
<style scoped lang="scss">
  .base-input {
    &--disabled {
      opacity: 0.5 !important;
    }

    &__label {
      letter-spacing: -0.14px;
      @apply tw-text-text02 tw-text-sm tw-font-normal tw-block tw-mb-2;
    }

    &__input {
      border-radius: 8px;
      min-height: 56px;
      border-width: 1px;
      border-style: solid;
      transition: background-color 300ms;
      @apply tw-py-3 tw-px-4 tw-text-text00 tw-block tw-w-full;

      &::placeholder {
        @apply tw-text-text02;
      }

      &--gray {
        @apply tw-bg-base01 tw-border-base01;
      }

      &--white {
        @apply tw-bg-white tw-border-white;

        &:hover {
          @apply tw-bg-base01 tw-border-base01;
        }

        &:focus {
          @apply tw-bg-base01 tw-border-base01;
        }
      }

      &--error {
        border-color: theme('colors.error') !important;
      }

      &--success {
        @apply tw-border-primary;
      }
    }

    &__caption {
      @apply tw-mt-2 tw-text-text02 tw-text-xs tw-font-normal;

      &--error {
        @apply tw-text-error;
      }
    }
  }
</style>
