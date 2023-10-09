<template>
  <div class="toolbar">
    <div class="toolbar__tabs">
      <BaseTabsGroup v-model="filter.currentTab">
        <BaseTabsGroupItem name="tiding" theme="white">
          Новости
        </BaseTabsGroupItem>
        <BaseTabsGroupItem name="mass_media" theme="white">
          СМИ о нас
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
    <div class="toolbar__params">
      <SelectYears />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SelectYears from './SelectYears.vue';
  import { useArticlesFilter } from '../store';

  const filter = useArticlesFilter();
</script>

<style scoped lang="scss">
  .toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    &__params {
      flex-basis: 160px;
    }
  }
</style>
