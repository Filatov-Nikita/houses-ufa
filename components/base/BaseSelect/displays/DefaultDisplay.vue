<template>
  <div class="tw-text-base tw-text-text01">
    {{ getLabel(value) }}
  </div>
</template>

<script setup lang="ts">
  interface Props {
    value: any,
    handleChange: Function,
    toggle: () => void,
    getLabel?: (val: any) => string,
  }

  withDefaults(defineProps<Props>(), {
    getLabel: (v: any) => v?.label || 'Выберите значение',
  });
</script>
