<template>
  <BaseTabsGroup v-model="store.filterValue">
    <BaseTabsGroupItem v-for="tab in tabs" :key="tab" :name="tab">
      {{ tab }}
    </BaseTabsGroupItem>
  </BaseTabsGroup>
</template>

<script setup lang="ts">
  import { useTownMaterials } from '../store';

  const store = useTownMaterials();

  const tabs = computed(() => {
    return store.data?.data.map(el => el.label) ?? [];
  });
</script>
