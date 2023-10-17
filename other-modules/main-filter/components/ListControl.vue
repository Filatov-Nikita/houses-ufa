<template>
  <div class="list-control">
    <div class="list-control__finded">
      Найдено <BasePlural :total="mainFilter.showedCount" :cases="cases" />
    </div>
    <BaseSelect
      class="list-control__sort"
      theme="white"
      name="sort"
      label=""
      v-bind="selectProps(sortOpts)"
      :model-value="currentSort"
      @update:modelValue="updateSort"
    />
  </div>
</template>

<script setup lang="ts">
  import { useMainFilter } from '../store/index';
  import { useFilterParams } from '../store/filter-params';

  const mainFilter = useMainFilter();
  const filterParams = useFilterParams();

  const cases: [ string, string, string ] = ['предложение', 'предложения', 'предложений'];

  const flatSortOptions = [
    { label: 'Сначала дешевле', order_by_direction: 'asc', order_by_field: 'price_total' },
    { label: 'Сначала дороже', order_by_direction: 'desc', order_by_field: 'price_total' },
    { label: 'Сначала с большей площадью', order_by_direction: 'desc', order_by_field: 'area_total' },
    { label: 'Сначала с меньшей площадью', order_by_direction: 'asc', order_by_field: 'area_total' },
    { label: 'Сначала с большим еж. платежом', order_by_direction: 'desc', order_by_field: 'mortgage_monthly_payment' },
    { label: 'Сначала с меньшим еж. платежом', order_by_direction: 'asc', order_by_field: 'mortgage_monthly_payment' },
  ];

  const townSortOptions = [
    { label: 'Сначала с большей площадью', order_by_direction: 'desc', order_by_field: 'area_cottage' },
    { label: 'Сначала с меньшей площадью', order_by_direction: 'asc', order_by_field: 'area_cottage' },
  ];

  const sortOpts = computed(() => {
    if(mainFilter.isFlat) return flatSortOptions;
    else if(mainFilter.isTown) return townSortOptions;
    return [];
  });

  function selectProps(options: typeof sortOpts.value) {
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

  const currentSort = computed(() => {
    return sortOpts.value.find(opt => {
      return opt.order_by_direction === filterParams.params.order_by_direction
      && opt.order_by_field === filterParams.params.order_by_field
    }) ?? null;
  });

  function updateSort(opt: typeof sortOpts.value[number] | null) {
    filterParams.params.order_by_direction = opt?.order_by_direction ?? null;
    filterParams.params.order_by_field = opt?.order_by_field ?? null;
  }
</script>

<style scoped lang="scss">
  .list-control {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    &__sort {
      flex-basis: 310px;
      min-width: 0;
    }

    &__finded {
      @apply tw-text-text00 tw-text-lg;
    }
  }
</style>
