<template>
  <BtnsActionsBase :theme="theme" icon="dots_three_vertical" />
</template>

<script setup lang="ts">
  interface Props { theme?: 'white' | 'gray' };

  withDefaults(defineProps<Props>(), { theme: 'gray' });
</script>
