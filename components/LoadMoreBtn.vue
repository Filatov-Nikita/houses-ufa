<template>
  <BaseButton class="tw-w-full" theme="white">
    Показать ещё {{ loaded }} из {{ total }}
  </BaseButton>
</template>

<script setup lang="ts">
  interface Props {
    total: number,
    loaded: number
  }

  defineProps<Props>();
</script>
