<template>
  <div class="apart-filter">
    <div class="tab-zone">
      <div class="tab-zone__area scroll-y">
        <BaseTabsGroup class="tab-zone__groups" v-model="currentTabFilter">
          <BaseTabsGroupItem class="tab-zone__item" theme="white" name="flats">
            {{ tabLabels[0] }}
          </BaseTabsGroupItem>
          <BaseTabsGroupItem class="tab-zone__item" theme="white" name="places" :disabled="!canShowParkStores">
            {{ tabLabels[1] }}
          </BaseTabsGroupItem>
        </BaseTabsGroup>
      </div>
      <BaseTabsTabContent leave-classes="" enter-classes="" v-model="currentTabFilter">
        <BaseTabsTabContentItem name="flats" key="flats">
          <GenplanController v-if="currentFlatFilter === 'genplan'" />
          <FlatFilter v-else />
        </BaseTabsTabContentItem>
        <BaseTabsTabContentItem name="places" key="places">
          <ParkStoresFilter />
        </BaseTabsTabContentItem>
      </BaseTabsTabContent>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FlatFilter from './components/FlatFilter.vue';
  import ParkStoresFilter from './components/ParkingStores/ParkStoresFilter.vue';
  import GenplanController from './components/Genplan/Controller.vue';
  import { useFilterHead } from './store/filter-head';
  import { useComplexOne } from '@/stores/pages/complex-one';

  const filterHeadStore = useFilterHead();
  const complexOne = useComplexOne();

  const currentTabFilter = toRef(filterHeadStore, 'currentTabFilter');
  const currentFlatFilter = toRef(filterHeadStore, 'currentFlatFilter');

  const tabLabels = ['Квартиры', 'Машиноместа и кладовые'];

  const canShowParkStores = computed(() => {
    return complexOne.complex?.data.has_parkings === true
    && complexOne.complex?.data.has_storehouses === true;
  });
</script>

<style scoped lang="scss">
  .tab-zone {
    &__area {
      width: 100%;
      max-width: 100%;
      overflow-y: hidden;
      margin-bottom: 32px;

      @include md {
        margin-bottom: 24px;
      }
    }

    &__groups {
      width: 100%;
    }

    &__item {
      flex-grow: 1;
    }
  }
</style>
