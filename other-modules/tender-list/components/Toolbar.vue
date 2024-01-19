<template>
  <div class="tender-toolbar">
    <p class="tender-toolbar__count"><BasePlural :total="count" :cases="сases" /></p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    count: number,
  }>();

  const сases: [ string, string, string ] = [ 'закупка', 'закупки', 'закупок' ];
</script>

<style scoped lang="scss">
  .tender-toolbar {
    &__count {
      @apply tw-text-text00 tw-text-2xl;
    }
  }
</style>
