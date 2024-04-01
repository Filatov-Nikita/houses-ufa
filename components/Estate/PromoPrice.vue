<template>
  <span class="promo-price">
    {{ $amount(value) }}
  </span>
</template>

<script setup lang="ts">
  defineProps<{
    value: string | number,
  }>();
</script>

<style scoped lang="scss">
  .promo-price {
    @apply tw-text-text02 tw-line-through;
  }
</style>
