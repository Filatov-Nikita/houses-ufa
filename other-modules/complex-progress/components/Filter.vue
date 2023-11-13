<template>
  <div class="progress-filter">
    <div class="tw-grow"></div>
    <BaseTabsGroup v-model="store.filterType">
      <BaseTabsGroupItem name="album">Фото</BaseTabsGroupItem>
      <BaseTabsGroupItem name="camera">Онлайн-камеры</BaseTabsGroupItem>
    </BaseTabsGroup>
  </div>
</template>

<script setup lang="ts">
  import { useComplexProgress } from '../store';

  const store = useComplexProgress();
</script>

<style scoped lang="scss">
  .progress-filter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
