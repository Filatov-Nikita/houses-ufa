<template>
  <div>
    <BaseTabsGroup v-model="store.type">
      <BaseTabsGroupItem name="all">Все</BaseTabsGroupItem>
      <BaseTabsGroupItem name="townhouse">Таунхаусы</BaseTabsGroupItem>
      <BaseTabsGroupItem name="cottage">Дома</BaseTabsGroupItem>
    </BaseTabsGroup>
  </div>
</template>

<script setup lang="ts">
  import { useProjectList } from '../store';

  const store = useProjectList();
</script>
