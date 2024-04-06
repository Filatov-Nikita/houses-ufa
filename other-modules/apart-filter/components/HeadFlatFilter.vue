<template>
  <div class="head-filter">
    <div class="head-filter__controls">
      <FindedCount class="head-filter__count" :total="total" :cases="cases" />
      <div class="head-filter__btns">
        <BaseSelect
          class="head-filter__sort"
          theme="gray"
          name="sort"
          height="64px"
          v-bind="selectProps(sortOptions)"
          :disabled="disabledSort"
          :modelValue="currentSort"
          @update:modelValue="updateSort"
        />
        <div class="scroll-y head-filter__scroll-area">
          <BaseTabsGroup class="head-filter__tabs" theme="gray" v-model="listView">
            <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="genplan">
              На фасаде
            </BaseTabsGroupItem>
            <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="plan">
              Шахматка
            </BaseTabsGroupItem>
            <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="list">
              Списком
            </BaseTabsGroupItem>
          </BaseTabsGroup>
        </div>
      </div>
    </div>
    <BaseTabsTabContent v-bind="animTabs" v-model="listView" keepAlive>
      <BaseTabsTabContentItem name="plan" key="plan">
        <FloorsList :grid="plan" :loading="loadingPlan" />
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="list" key="list">
        <FlatList :flats="flats" :loading="loadingFlats" />
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>

<script setup lang="ts">
  import { useFilterList } from '../store/filter-list';
  import { useFilterPlan } from '../store/filter-plan';
  import { useFilterHead } from '../store/filter-head';
  import FlatList from './FlatList.vue';
  import FloorsList from './Plan/FloorsList.vue';
  import FindedCount from './FindedCount.vue';
  import { computed } from 'vue';

  const animTabs = {
    leaveClasses: '',
    enterClasses: '',
  }

  const filterListStore = useFilterList();
  const filterPlanStore = useFilterPlan();
  const filterHeadStore = useFilterHead();
  const loadingFlats = computed(() => filterListStore.loadingFlats);
  const flats = computed(() => filterListStore.flats);
  const plan = computed(() => filterPlanStore.grid);
  const loadingPlan = computed(() => filterPlanStore.loadingGrid);

  const listView = toRef(filterHeadStore, 'currentFlatFilter');
  const disabledSort = computed(() => listView.value === 'plan');
  const sortOptions = [
    { label: 'Сначала дешевле', order_by_direction: 'asc', order_by_field: 'price_total' },
    { label: 'Сначала дороже', order_by_direction: 'desc', order_by_field: 'price_total' },
    { label: 'Сначала с большей площадью', order_by_direction: 'desc', order_by_field: 'area_total' },
    { label: 'Сначала с меньшей площадью', order_by_direction: 'asc', order_by_field: 'area_total' },
  ];

  const cases: [string, string, string] = [ 'планировка', 'планировки', 'планировок' ];

  const total = computed(() => {
    return flats.value?.meta.total ?? null;
  });

  const currentSort = computed(() => {
    return sortOptions.find(opt => {
      return opt.order_by_direction === filterListStore.filterParams.order_by_direction
      && opt.order_by_field === filterListStore.filterParams.order_by_field
    }) ?? null;
  });

  function updateSort(opt: typeof sortOptions[number] | null) {
    filterListStore.filterParams.order_by_direction = opt?.order_by_direction ?? null;
    filterListStore.filterParams.order_by_field = opt?.order_by_field ?? null;
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

  &__scroll-area {
    @include lg {
      width: 100%;
    }

    @include sm {
      @apply tw-max-w-full tw-w-full tw-overflow-y-hidden;
    }
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 16px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  &__count {
    flex-basis: 260px;
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
    width: 200px;

    @include lg {
      width: 100%;
    }
  }

  &__tabs {
    @include lg {
      width: 100%;
    }
  }

  &__tab {
    @include lg {
      width: 100%;
    }
  }
}
</style>
