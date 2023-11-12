<template>
  <BaseTabsGroup v-model="store.currentType">
    <BaseTabsGroupItem
      v-for="item in items"
      :key="item.id"
      :name="item.label"
    >
      {{ item.label }}
    </BaseTabsGroupItem>
  </BaseTabsGroup>
</template>

<script setup lang="ts">
  import { useComplexGallery } from '../store';

  const store = useComplexGallery();

  const items = computed(() => store.data?.data ?? []);
</script>
