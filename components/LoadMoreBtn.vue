<template>
  <BaseButton class="tw-w-full" theme="white" :disabled="loading">
    Показать ещё {{ loaded }} из {{ total }}
  </BaseButton>
</template>

<script setup lang="ts">
  interface Props {
    total: number,
    loaded: number,
    loading: boolean
  }

  defineProps<Props>();
</script>
