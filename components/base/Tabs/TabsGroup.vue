<template>
  <div class="tabs-group" :class="[`tabs-group--${theme}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { setValueKey, currentValueKey } from './symbols';

  type StrOrNull = string | null;

  interface Props {
    modelValue?: StrOrNull,
    theme?: string
  };

  const props = withDefaults(defineProps<Props>(), {
    modelValue: null,
    theme: 'white',
  });

  const current = toRef(props, 'modelValue');

  const emit = defineEmits<{
    (event: 'update:modelValue', val: StrOrNull): void
  }>();

  function setValue(value: StrOrNull) {
    emit('update:modelValue', value);
  }

  provide(setValueKey, setValue);
  provide(currentValueKey, current);
</script>

<style scoped lang="scss">
  .tabs-group {
    padding: 8px;
    border-radius: 8px;
    @apply tw-bg-white tw-inline-flex tw-gap-3;

    &--white {
      @apply tw-bg-white;
    }

    &--gray {
      @apply tw-bg-base00;
    }
  }
</style>
