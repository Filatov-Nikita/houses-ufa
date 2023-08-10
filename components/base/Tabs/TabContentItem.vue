<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  const instance = getCurrentInstance();
  defineProps<{ name: string }>();
</script>
