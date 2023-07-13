<template>
  <div class="tw-relative" :class="{ 'tw-pb-6': !hideBottomSpace }">
    <div class="base-toggle">
      <div class="toggle" :class="{ 'toggle-active': checked }" @click="handleChange(checkedValue)">
        <div class="dot" :class="{ 'dot-active': checked }"></div>
      </div>
      <label class="label">{{ label }}</label>
    </div>
    <div v-if="errorMessage" :class="errorClasses">{{ errorMessage }}</div>
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
    hideBottomSpace?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    checkedValue: true,
    uncheckedValue: false,
    hideBottomSpace: false
  });

  const { checked, handleChange, errorMessage } = useField(props.name, props.rules, {
    type: 'checkbox',
    syncVModel: true,
    checkedValue: props.checkedValue,
    uncheckedValue: props.uncheckedValue,
  });

  const errorClasses = computed(() => {
    return [
      'tw-text-xs',
      'tw-text-error',
      'tw-leading-none',
      {
        'tw-absolute tw-bottom-1': !props.hideBottomSpace,
        'tw-mt-2': props.hideBottomSpace,
      }
    ];
  });
</script>
<style scoped>
  .base-toggle {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .toggle {
    min-width: 48px;
    height: 24px;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: theme('colors.base01');
    background-color: theme('colors.base01');
    line-height: 22px;
    cursor: pointer;
    padding: 0 4px;
  }

  .toggle-active {
    background-color: theme('colors.primary');
    border-color: theme('colors.primary');
  }

  .dot {
    display: inline-block;
    vertical-align: middle;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: theme('colors.base01');
    background-color: theme('colors.base02');
    transition: transform 300ms;
  }

  .dot-active {
    background-color: theme('colors.white');
    border-color: theme('colors.white');
    transform: translateX(24px);
  }

  .label {
    @apply tw-text-text00 tw-leading-none tw-text-base;
  }
</style>
