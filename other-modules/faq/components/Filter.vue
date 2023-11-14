<template>
  <BaseTabsGroup v-model="store.filterType">
    <BaseTabsGroupItem name="buyer">Покупателям</BaseTabsGroupItem>
    <BaseTabsGroupItem name="owner">Владельцам</BaseTabsGroupItem>
  </BaseTabsGroup>
</template>

<script setup lang="ts">
  import { useFaq } from '../store';
  const store = useFaq();
</script>
