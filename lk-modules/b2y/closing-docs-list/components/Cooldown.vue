<template>
  <div class="cooldown">
    Документы формируются, пожалуйста подождите! Осталось: {{ seconds }} сек.
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    seconds: number,
  }>();
</script>

<style scoped lang="scss">
  .cooldown {
    padding: 32px 0;
    @apply tw-text-text02;
  }
</style>
