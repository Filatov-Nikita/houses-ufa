<template>
  <BtnsActionsBase :theme="theme" icon="heart" />
</template>

<script setup lang="ts">
  interface Props { theme?: 'white' | 'gray' };

  withDefaults(defineProps<Props>(), { theme: 'gray' });
</script>
