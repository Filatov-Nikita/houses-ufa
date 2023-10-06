<template>
  <div class="apart-filter">
    <div class="tab-zone">
      <BaseTabsGroup class="tab-zone__groups" v-model="currentTabFilter">
        <BaseTabsGroupItem class="tab-zone__item" theme="white" name="flats">
          {{ tabLabels[0] }}
        </BaseTabsGroupItem>
        <BaseTabsGroupItem class="tab-zone__item" theme="white" name="objects">
          {{ tabLabels[1] }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
      <BaseTabsTabContent leave-classes="" enter-classes="" v-model="currentTabFilter">
        <BaseTabsTabContentItem name="flats" key="flats">
          <FlatFilter />
        </BaseTabsTabContentItem>
        <BaseTabsTabContentItem name="objects" key="objects">
          2
        </BaseTabsTabContentItem>
      </BaseTabsTabContent>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FlatFilter from './components/FlatFilter.vue';
  import { useFilterHead } from './store/filter-head';

  const filterHeadStore = useFilterHead();

  const currentTabFilter = toRef(filterHeadStore, 'currentTabFilter');

  const tabLabels = ['Квартиры', 'Машиноместо и кладовые'];
</script>
<style scoped lang="scss">
  .tab-zone {
    &__groups {
      width: 100%;
      margin-bottom: 32px;
    }

    &__item {
      flex-grow: 1;
    }
  }
</style>
