<template>
  <button
    class="tabs-group-item"
    :class="[{
      'tabs-group-item--active': isActive,
      'tabs-group-item--disabled': disabled,
    }, `tabs-group-item--${theme}`
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { setValueKey, currentValueKey } from './symbols';

  interface Props {
    name: string,
    disabled?: boolean,
    theme?: "white" | "gray"
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    theme: "white"
  });

  const setValue = inject(setValueKey);
  const currentValue = inject(currentValueKey);

  const isActive = computed(() => currentValue?.value === props.name);

  function onClick() {
    if(setValue === undefined) return;
    setValue(props.name);
  }
</script>


<style scoped lang="scss">
  .tabs-group-item {
    white-space: nowrap;
    user-select: none;
    display: inline-block;
    border-radius: 8px;
    padding: 13px 24px;
    transition: background-color 300ms;
    @apply tw-text-base tw-text-text00 ;
    &--white {
      @apply tw-bg-white;
    }
    &--gray {
      @apply tw-bg-base00;
    }
    @media (hover: hover){
      &:hover {
        @apply tw-bg-secondary-hover tw-text-text00;
      }
    }
    @media (hover: none) {
      &:active {
        @apply tw-bg-secondary-hover tw-text-text00;
      }
    }

    &:active {
      @apply tw-bg-secondary-press tw-text-text00;
    }

    &--active {
      pointer-events: none;
      @apply tw-bg-primary tw-text-white;
    }

    &--disabled {
      pointer-events: none;
      @apply tw-bg-base00 tw-text-base02;
    }
  }
</style>
