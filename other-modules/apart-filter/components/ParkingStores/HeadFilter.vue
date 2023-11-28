<template>
  <div class="head-filter">
    <div class="head-filter__controls">
      <FindedCount class="head-filter__count"
        :total="total"
        :cases="currentCases"
      />
      <div class="head-filter__btns">
        <BaseTabsGroup class="head-filter__tabs" theme="gray" v-model="currentView">
          <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="stores" :disabled="!canShowStores">
            Кладовки
          </BaseTabsGroupItem>
          <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="parking" :disabled="!canShowPark">
            Паркинг
          </BaseTabsGroupItem>
        </BaseTabsGroup>
        <BaseSelect
          class="head-filter__sort"
          theme="gray"
          label=""
          name="sort"
          v-bind="selectProps(sortOptions)"
          :modelValue="currentSort"
          @update:modelValue="updateSort"
        />
      </div>
    </div>
    <BaseTabsTabContent v-bind="animTabs" v-model="currentView" keepAlive>
      <BaseTabsTabContentItem name="stores" key="stores">
        <PlacesList
          placeName="Кладовка"
          :loading="loadingStores"
          :items="storeData"
        >
          <template #pagination>
            <StoresPagination />
          </template>
        </PlacesList>
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="parking" key="parking">
        <PlacesList
          placeName="Машиноместо"
          :loading="loadingParking"
          :items="parkData"
        >
          <template #pagination>
            <ParkingPagination />
          </template>
        </PlacesList>
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>

<script setup lang="ts">
  import { useFilterStorehouse } from '../../store/filter-storehouse';
  import { useFilterParking } from '../../store/filter-parking';
  import { useFilterHead } from '../../store/filter-head';
  import { useParkStorParams } from '../../store/filter-parkstor-params';
  import { useComplexOne } from '@/stores/pages/complex-one';
  import PlacesList from './PlacesList.vue';
  import ParkingPagination from './ParkingPagination.vue';
  import StoresPagination from './StoresPagination.vue';
  import FindedCount from '../FindedCount.vue';
  import { computed } from 'vue';

  const animTabs = {
    leaveClasses: '',
    enterClasses: '',
  }

  type Cases = [string, string, string];
  const casesStores: Cases = ['кладовка', 'кладовки', 'кладовок'];
  const casesParkings: Cases = ['парковка', 'парковки', 'парковок'];

  const filterStoreHouseStore = useFilterStorehouse();
  const filterParkingStore = useFilterParking();
  const filterParamsStore = useParkStorParams();
  const filterHeadStore = useFilterHead();
  const complexOneStore = useComplexOne();
  const storehouses = computed(() => filterStoreHouseStore.storeshouses);
  const parkings = computed(() => filterParkingStore.parkings);
  const loadingParking = computed(() => filterParkingStore.loadingParkings);
  const loadingStores = computed(() => filterStoreHouseStore.loadingStores);

  const currentView = toRef(filterHeadStore, 'currentParkStoreFilter');

  const total = computed(() => {
    switch(currentView.value) {
      case 'parking': return parkings.value?.meta.total ?? null;
      case 'stores': return storehouses.value?.meta.total ?? null;
    }
  });

  const currentCases = computed(() => {
    switch(currentView.value) {
      case 'parking': return casesParkings;
      case 'stores': return casesStores;
    }
  });

  const canShowPark = computed(() => complexOneStore.complex?.data.has_parkings === true);
  const canShowStores = computed(() => complexOneStore.complex?.data.has_storehouses === true);

  const parkData = computed(
    () => filterParkingStore.parkings?.data.map(item => toItem(item)) ?? null
  );

  const storeData = computed(
    () => filterStoreHouseStore.storeshouses?.data.map(item => toItem(item)) ?? null
  );

  function toItem<T extends Itemable>(item: T): Itemable {
    const { price_total, area_total, number } = item;
    return { price_total, area_total, number }
  }

  type Itemable = {
    area_total: string,
    price_total: string,
    number: string
  };

  const sortOptions = [
    { label: 'Сначала дешевле', order_by_direction: 'asc', order_by_field: 'price_total' },
    { label: 'Сначала дороже', order_by_direction: 'desc', order_by_field: 'price_total' },
  ] as const;

  const currentSort = computed(() => {
    return sortOptions.find(opt => {
      return opt.order_by_direction === filterParamsStore.filterParams.order_by_direction
      && opt.order_by_field === filterParamsStore.filterParams.order_by_field
    }) ?? null;
  });

  function updateSort(opt: typeof sortOptions[number]) {
    filterParamsStore.filterParams.order_by_direction = opt.order_by_direction;
    filterParamsStore.filterParams.order_by_field = opt.order_by_field;
  }

  function selectProps(options: typeof sortOptions) {
    return {
      'drop-down-props': {
        getLabel: (opt: any) => opt.label,
        isActive: (opt: any, v: any) => {
          return opt.order_by_direction === v?.order_by_direction
          && opt.order_by_field === v?.order_by_field;
        },
        options,
      },
      'display-props': {
        getLabel: (v: any) => v?.label || 'сортировка',
      }
    };
  }
</script>

<style scoped lang="scss">
.head-filter {
  @apply tw-rounded-2xl tw-bg-white tw-p-6;

  @include sm {
    padding: 16px;
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 16px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  &__count {
    flex-basis: 270px;
    @apply tw-text-lg tw-text-text00;
  }

  &__btns {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 16px;

    @include lg {
      width: 100%;
      justify-content: space-between;
    }

    @include md {
      row-gap: 8px;
    }
  }

  &__sort {
    width: 250px;

    @include lg {
      width: 310px;
    }

    @include md {
      width: 100%;
    }
  }

  &__tabs {
    @include md {
      width: 100%;
    }
  }

  &__tab {
    @include md {
      width: 100%;
    }
  }
}
</style>
