<template>
  <div class="project-list-filter">
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


<style scoped lang="scss">
  .project-list-filter {
    overflow-y: hidden;
    max-width: 100%;
    width: 100%;
  }
</style>
