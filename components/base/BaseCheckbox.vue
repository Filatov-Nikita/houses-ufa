<template>
  <div class="base-checkbox">
    <div
      class="base-checkbox__checkbox"
      :class="{ 'base-checkbox__checkbox--disabled': disabled }"
      @click="handleChange(checkedValue)"
    >
      <div
        class="base-checkbox__input"
        :class="{
          'base-checkbox__input--checked': checked,
          'base-checkbox__input--disabled': disabled,
        }"
        :aria-disabled="disabled"
        role="checkbox"
      >
        <svg v-show="checked" class="base-checkbox__mark" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.898 3.7725L4.89798 9.7725C4.84572 9.82494 4.78362 9.86655 4.71525 9.89494C4.64688 9.92333 4.57357 9.93794 4.49954 9.93794C4.42551 9.93794 4.3522 9.92333 4.28383 9.89494C4.21546 9.86655 4.15336 9.82494 4.1011 9.7725L1.4761 7.1475C1.42378 7.09518 1.38227 7.03306 1.35396 6.96469C1.32564 6.89633 1.31107 6.82306 1.31107 6.74906C1.31107 6.67507 1.32564 6.60179 1.35396 6.53343C1.38227 6.46506 1.42378 6.40295 1.4761 6.35062C1.52843 6.2983 1.59054 6.2568 1.65891 6.22848C1.72727 6.20016 1.80054 6.18559 1.87454 6.18559C1.94854 6.18559 2.02181 6.20016 2.09017 6.22848C2.15854 6.2568 2.22066 6.2983 2.27298 6.35062L4.50001 8.57766L10.102 2.97656C10.2077 2.87089 10.351 2.81152 10.5005 2.81152C10.6499 2.81152 10.7932 2.87089 10.8989 2.97656C11.0046 3.08223 11.064 3.22556 11.064 3.375C11.064 3.52444 11.0046 3.66776 10.8989 3.77344L10.898 3.7725Z" fill="white"/>
        </svg>
      </div>
      <div class="base-checkbox__label" :class="{ 'base-checkbox__label--disabled': disabled }">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';

  interface Props {
    name: string,
    rules?: string,
    label: string,
    modelValue?: any,
    checkedValue?: any,
    uncheckedValue?: any,
    disabled?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false
  });

  const { checked, handleChange } = useField(props.name, props.rules, {
    type: 'checkbox',
    label: props.label,
    syncVModel: true,
    checkedValue: props.checkedValue,
    uncheckedValue: props.uncheckedValue,
  });
</script>
<style scoped lang="scss">
.base-checkbox {
  user-select: none;
  display: inline-block;
  cursor: pointer;
  position: relative;

  &__checkbox {
    gap: 16px;
    padding: 8px 16px;
    transition: background-color 300ms;
    @apply tw-rounded-lg tw-flex tw-items-center;

    &:hover {
      @apply tw-bg-base00;
    }

    &--disabled {
      pointer-events: none;
    }
  }

  &__input {
    @apply tw-w-5 tw-h-5 tw-shrink-0 tw-rounded tw-border tw-relative tw-bg-secondary tw-border-border00;

    &--checked {
      @apply tw-bg-primary tw-border-primary;
    }

    &--disabled {
      @apply tw-bg-base01 tw-border-base01;
    }
  }

  &__mark {
    top: 3px;
    left: 3px;
    @apply tw-w-3 tw-h-3 tw-absolute;
  }

  &__label {
    @apply tw-text-sm tw-leading-none tw-text-text00;

    &--disabled {
      @apply tw-text-text03;
    }
  }
}
</style>
