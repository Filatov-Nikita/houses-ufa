<template>
  <BtnsActionsBase :theme="theme" icon="download" />
</template>

<script setup lang="ts">
  interface Props { theme?: 'white' | 'gray' };

  withDefaults(defineProps<Props>(), { theme: 'gray' });
</script>
