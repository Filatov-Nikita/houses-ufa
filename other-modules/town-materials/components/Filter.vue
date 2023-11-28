<template>
  <div class="material-filter">
    <BaseTabsGroup v-model="store.filterValue">
      <BaseTabsGroupItem v-for="tab in tabs" :key="tab" :name="tab">
        {{ tab }}
      </BaseTabsGroupItem>
    </BaseTabsGroup>
  </div>
</template>

<script setup lang="ts">
  import { useTownMaterials } from '../store';

  const store = useTownMaterials();

  const tabs = computed(() => {
    return store.data?.data.map(el => el.label) ?? [];
  });
</script>

<style scoped lang="scss">
  .material-filter {
    overflow-y: hidden;
    width: 100%;
    max-width: 100%;
  }
</style>
