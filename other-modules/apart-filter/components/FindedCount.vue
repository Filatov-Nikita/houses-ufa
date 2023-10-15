<template>
  <div>Найдено <BasePlural v-bind="{ total, cases }" /></div>
</template>

<script setup lang="ts">
  defineProps<{
    total: number | null,
    cases: [string, string, string],
  }>();
</script>
